import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';
import SigninForm from './SinginForm';
import RegisterForm from '../../Auth/RegisterForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    outline: "none"
};

export default function AuthModel({ open, handleClose }) {

    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = () => {
        const path = location.pathname === "/register" ? "/login" : "/register"
        navigate(path)
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
                    <div>
                        <h1 className='text-center font-bold text-3xl pb-20'>
                            Create your account
                        </h1>

                        {location.pathname === "/register" ? <SignupForm /> : <SigninForm />}

                        <h1 className='text-center py-5 font-semibold text-lg text-gray-500'>
                            {location.pathname === "/register" ? "Already have account" : "If you dont have account"}
                        </h1>

                        <Button fullWidth variant='outlined' onClick={handleNavigate}
                            sx={{ borderRadius: "29px", py: "15px" }}>
                            {location.pathname === "/register" ? "login" : "register"}
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
