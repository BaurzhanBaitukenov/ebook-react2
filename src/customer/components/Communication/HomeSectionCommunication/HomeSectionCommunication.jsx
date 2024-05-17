import { Avatar, Button } from '@mui/material';
import { Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';
import { useDispatch, useSelector } from 'react-redux';
import { createTweet, getAllTweets } from '../../../../State/Twit/Action';
import { uploadToCloudnary } from '../../../../Utils/uploadToCloudnary';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import EmojiPicker from "emoji-picker-react";

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required"),
  });
  
  const HomeSectionCommunication = () => {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [selsectedVideo,setSelectedVideo]=useState("");
    const dispatch = useDispatch();
    const {twit,auth,theme}=useSelector(store=>store);
    const jwt=localStorage.getItem("jwt")
  
    const [openEmoji,setOpenEmoji]=useState(false);
    const handleOpenEmoji=()=>setOpenEmoji(!openEmoji)
    const handleCloseEmoji=()=>setOpenEmoji(false);
  
    const handleSubmit = (values,actions) => {
      dispatch(createTweet(values))
      actions.resetForm();
      setSelectedImage("")
      setSelectedVideo("")
      handleCloseEmoji()
    };
  
  
    const formik = useFormik({
      initialValues: {
        content: "",
        image: "",
        video:""
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
  
    const handleSelectVideo = async (event) => {
      setUploadingImage(true);
      const videoUrl = await uploadToCloudnary(event.target.files[0],"video");
      formik.setFieldValue("video", videoUrl);
      setSelectedVideo(videoUrl)
      setUploadingImage(false);
  
      // console.log()
    };
  
    useEffect(()=>{
      dispatch(getAllTweets())
    },[])
  
    const handleEmojiClick=(value)=>{
      const {emoji}=value;
      formik.setFieldValue("content",formik.values.content+emoji)
    }
  
    
    return (
      <div className="space-y-5">
        <section>
          <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
        </section>
        <section className={`pb-10 p-10 rounded-md mb-10"}`}>
          <div className="flex space-x-5 ">
            <Avatar
              alt="Avatar"
              src={auth.user?.image}
            />
            <div className="w-full">
              <form onSubmit={formik.handleSubmit}>
                <div >
                  <input
                    type="text"
                    name="content"
                    placeholder="What is happening?"
                    className={`border-none outline-none text-xl bg-transparent `}
                    {...formik.getFieldProps("content")}
                  />
                  {formik.errors.content && formik.touched.content && (
                    <div className="text-red-500">{formik.errors.content}</div>
                  )}
                </div>
  
                {!uploadingImage &&  (
                  <div>
                    {selectedImage && <img className="w-[28rem]" src={selectedImage} alt="" />}
  
                    {selsectedVideo  && <video autoPlay controls src={twit.video}/>}
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
  
                    <label className="flex items-center space-x-2  rounded-md cursor-pointer">
                      <SlideshowIcon className="text-[#1d9bf0]" />
                      <input
                        type="file"
                        name="videoFile"
                        className="hidden"
                        onChange={handleSelectVideo}
                      />
                    </label>
  
                    <FmdGoodIcon className="text-[#1d9bf0]" />
                    <div className="relative">
                       <TagFacesIcon onClick={handleOpenEmoji} className="text-[#1d9bf0] cursor-pointer" />
                       {openEmoji && <div className="absolute top-10 z-50 ">
                        <EmojiPicker 
                        theme={theme}
                        onEmojiClick={handleEmojiClick}
                        lazyLoadEmojis={true}
                        />
  
                       </div>}
                    </div>
                   
                    
                  </div>
  
                  <div>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "#1d9bf0",
                        borderRadius: "20px",
                        paddingY: "8px",
                        paddingX: "20px",
                        color: "white",
                      }}
                    >
                      Bokeet
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
  
        {/* twit section */}
        <section className="pt-14 space-y-5">
          {twit.twits?.map((item) => (
            <TweetCard twit={item} />
          ))}
        </section>
  
        {/* <section>
          <BackdropComponent open={uploadingImage}/>
        </section> */}
      </div>
    );
  };
  
  export default HomeSectionCommunication;
