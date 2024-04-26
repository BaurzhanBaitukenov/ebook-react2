import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Formik, useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../../../State/Auth/Action';
import { uploadToCloudnary } from '../../../../Utils/uploadToCloudnary';

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

const ProfileModalCommunication = ({ handleClose, open }) => {
  const [uploading, setUploading] = React.useState(false);
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);

  const handleSubmit = (values) => {
    dispatch(updateUserProfile(values))
    console.log(values);
    handleClose()
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: ""
    },
    onSubmit: handleSubmit,
  });

  React.useEffect(() => {
    if (auth.user) {
      formik.setValues({
        firstName: auth.user.firstName || "",
        lastName: auth.user.lastName || "",
        website: auth.user.website || "",
        location: auth.user.location || "",
        bio: auth.user.bio || "",
        backgroundImage: auth.user.backgroundImage || "",
        image: auth.user.image || "",
      });
    }
  }, [auth.user]);

  const handleImageChange = async (event) => {
    setUploading(true)
    const { name } = event.target;
    const file = event.target.files[0];
    const url = await uploadToCloudnary(file, "image");
    formik.setFieldValue(name, url);
    setUploading(false);

  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose} aria-label="delete">
                  <CloseIcon />
                </IconButton>
                <p>Edit Profile</p>
              </div>

              <Button type="submit">Save</Button>
            </div>

            <div className="customeScrollbar overflow-y-scroll  overflow-x-hidden h-[80vh]">
              <div className="">
                <div className="w-full">
                  <div className="relative ">
                    <img
                      src={
                        formik.values.backgroundImage ||
                        "https://cdn.pixabay.com/photo/2018/10/16/15/01/background-image-3751623_1280.jpg"
                      }
                      alt="Img"
                      className="w-full h-[12rem] object-cover object-center"
                    />
                    {/* Hidden file input */}
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleImageChange}
                      name="backgroundImage"
                    />
                  </div>
                </div>

                <div className="w-full transform -translate-y-20 translate-x-4 h-[6rem]">
                  <div className="relative borde ">
                    <Avatar
                      src={
                        formik.values.image
                      }
                      alt="Img"
                      sx={{
                        width: "10rem",
                        height: "10rem",
                        border: "4px solid white",
                      }}
                    />
                    {/* Hidden file input */}
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer"
                      onChange={handleImageChange}
                      name="image"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />

                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />
                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.website && Boolean(formik.errors.website)
                  }
                  helperText={formik.touched.website && formik.errors.website}
                />
                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.touched.location && formik.errors.location}
                />
              </div>
              <div className="my-3">
                <p className="text-lg">Birth date · Edit</p>
                <p className="text-2xl"> October 26, 1999</p>

              </div>
              <p className="py-3 text-lg">
                Edit Professional Profile
              </p>
            </div>
            {/* <BackdropComponent open={uploading}/> */}

          </form>
        </Box>

      </Modal>

    </div>
  );
};

export default ProfileModalCommunication;
