import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createTweetReply } from '../../../../State/Twit/Action';
import * as Yup from "yup";
import { uploadToCloudnary } from '../../../../Utils/uploadToCloudnary';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required"),
  });
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    //   height: "90vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    borderRadius: 3,
    outline: "none",
    overflow: "scroll-y",
  };
  
  const ReplyModal = ({ handleClose, twitData, open }) => {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const dispatch = useDispatch();
    const { auth, theme } = useSelector((store) => store);
    // const jwt=localStorage.getItem("jwt")
  
    const handleSubmit = (values, actions) => {
      dispatch(createTweetReply(values));
      actions.resetForm();
      setSelectedImage("");
      handleClose()
    };
  
    const formik = useFormik({
      initialValues: {
        content: "",
        image: "",
        twitId:twitData.id
      },
      validationSchema,
      onSubmit: handleSubmit,
    });
    const handleSelectImage = async (event) => {
      setUploadingImage(true);
      const imgUrl = await uploadToCloudnary(event.target.files[0],"image");
      formik.setFieldValue("image", imgUrl);
      setSelectedImage(imgUrl);
      setUploadingImage(false);
    };
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex space-x-5 ">
              <Avatar
                // onClick={()=>navigate(`/profile/${twitData.user.id}`)}
                alt="Avatar"
                src={twitData.user.image}
                className="cursor-pointer"
              />
              <div className="w-full">
                <div className="flex justify-between items-center ">
                  <p className="flex cursor-pointer items-center space-x-2">
                    <span className="font-semibold">
                      {twitData.user.firstName}
                    </span>
                    <span className=" text-gray-600">
                      @{twitData.user.email}
                      · 2m
                    </span>
                  </p>
                  <div>{/* <MoreHorizIcon /> */}</div>
                </div>
  
                <div className="mt-2">
                  <p className="mb-2 p-0">{twitData.content}</p>
                </div>
              </div>
            </div>
            <section
              className={`py-10 }`}
            >
              <div className="flex space-x-5 ">
                <Avatar alt="Avatar" src={auth.user?.image} />
                <div className="w-full">
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <input
                     
                        type="text"
                        name="content"
                        placeholder="What is happening?"
                        className={`border-none outline-none text-xl bg-transparent `}
                        {...formik.getFieldProps("content")}
                      />
                      {formik.errors.content && formik.touched.content && (
                        <div className="text-red-500">
                          {formik.errors.content}
                        </div>
                      )}
                    </div>
  
                    {!uploadingImage && selectedImage && (
                      <div>
                        <img className="w-[28rem]" src={selectedImage} alt="" />
                      </div>
                    )}
  
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex space-x-5 items-center">
                        <label className="flex items-center space-x-2  rounded-md cursor-pointer">
                          <ImageIcon className="text-[#1d9bf0]" />
                          <input
                            type="file"
                            name="imageFile"
                            className="hidden"
                            onChange={handleSelectImage}
                          />
                        </label>
  
                        <FmdGoodIcon className="text-[#1d9bf0]" />
                        <TagFacesIcon className="text-[#1d9bf0]" />
                      </div>
  
                      <div>
                        <Button
                          type="submit"
                          sx={{
                            bgcolor: "#1d9bf0",
                            borderRadius: "20px",
                            paddingY: "8px",
                            paddingX: "20px",
                            color: "white",
                          }}
                        >
                          Tweet
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            {/* <section>
              { <BackdropComponent open={uploadingImage}/>}
            </section> */}
          </Box>
        </Modal>
      </div>
    );
  };
  
  export default ReplyModal;