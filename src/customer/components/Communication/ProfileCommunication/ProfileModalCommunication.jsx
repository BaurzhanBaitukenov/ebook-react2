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
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 4,
};

export default function ProfileModalCommunication({open, handleClose}) {
    // const [open, setOpen] = React.useState(false);
    const [uploading, setUploading] = React.useState(false);
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = React.useState("");
    const {auth} = useSelector(store => store)
    const handleSubmit = (values) => {
        dispatch(updateUserProfile(values))
        console.log("handle submit", values)
        setSelectedImage("")
    }

    const handleImageChange = async (event) => {
        setUploading(true);
        const { name } = event.target
        const file = await uploadToCloudnary(event.target.files[0])
        formik.setFieldValue(name, file);
        setSelectedImage(file)
        setUploading(false)
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            image: "",
        },
        onSubmit: handleSubmit
    })
    console.log("auth ", auth)
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
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                                <IconButton onClick={handleClose} aria-label='delete'>
                                    <CloseIcon />
                                    <p className=''>Edit Profile</p>
                                </IconButton>
                            </div>
                            <Button type='submit'>Save</Button>
                        </div>
                        <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
                            <React.Fragment>
                                <div className='w-full'>
                                    <div className='relative'>
                                        <img className='w-full h-[12rem] object-cover object-center'
                                            src="https://wallpapers.com/images/hd/cool-hooded-black-cat-computer-sxcbxea9u0t2ylel.jpg" alt="" />

                                        <input type="file"
                                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                                            onChange={handleImageChange}
                                            name='backgroundImage'
                                        />
                                    </div>
                                </div>

                                <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                                    <div className='relative'>
                                        <Avatar
                                            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                                            src={selectedImage || auth.user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5060z9pN1BKdLvRKExuWHhtc1xvw4VgyioA&usqp=CAU"} />

                                        <input
                                            className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                                            onChange={handleImageChange}
                                            name='image'
                                            type="file" />

                                    </div>

                                </div>
                            </React.Fragment>

                            <div className='space-y-3'>

                                <TextField
                                    fullWidth
                                    id='firstName'
                                    name='firstName'
                                    label="First Name"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                />

<TextField
                                    fullWidth
                                    id='lastName'
                                    name='lastName'
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
                                    id='bio'
                                    name='bio'
                                    label="Bio"
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio}
                                />

                                <TextField
                                    fullWidth
                                    id='website'
                                    name='website'
                                    label="Website"
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.touched.website && formik.errors.website}
                                />

                                <TextField
                                    fullWidth
                                    id='location'
                                    name='location'
                                    label="location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}
                                />

                                <div className='my-3'>
                                    <p className='text-lg'>Birth date. Edit</p>
                                    <p className='text-2xl'>July 04. 2004</p>
                                </div>
                                <p className='py-3 text-lg'>Edit Proffesional Profile</p>

                            </div>

                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
