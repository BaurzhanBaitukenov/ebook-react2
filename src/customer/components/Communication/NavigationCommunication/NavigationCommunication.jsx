import React, { useEffect } from 'react';
import { navigationCommunication } from './NavigationMenuCommunication';
import { useNavigate } from 'react-router-dom';
import { findUserProfile } from '../../../../State/User/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { getUser, logout } from '../../../../State/Auth/Action';
import { useLocation } from 'react-router-dom/dist';

const NavigationCommunication = () => {

    const { auth } = useSelector(store => store)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt")
    const location = useLocation();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout())
    }

    const handleGoBack = () => {
        navigate("/")
    }

    const handleLoginClick = () => {
        navigate("/")
    }

    const { userProfile } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(findUserProfile());
    }, [dispatch]);

    useEffect(() => {

        if(jwt) {
          dispatch(getUser(jwt))
        }
    
      },[auth.jwt])

    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='space-y-6'>

                    {navigationCommunication.map((item) => <div className='cursor-pointer flex space-x-3 
                    items-center' onClick={() => item.title === "Profile" ? navigate(`/communication/profile/${auth.user?.id}`) : navigate(item.path)}>
                        {item.icon}
                        <p className='text-xl'>{item.title}</p>
                    </div>)}

                </div>
                <div className='py-10'>
                    <Button
                        sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#1e88e5" }}
                        variant='contained'
                    >
                        Tweet
                    </Button>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Avatar
                        alt="username"
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnAV2195eKjdsIWb9qODnuYgxUnwJ0exESA&usqp=CAU'
                    />
                    <div>
                        <div>
                            <span> {auth.user?.firstName}</span>
                            <span> {auth.user?.lastName}</span>
                            <p className='opacity-70'>{auth.user?.email}</p>
                        </div>
                    </div>
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreHorizIcon />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {/* <MenuItem onClick={handleLoginClick}>Login</MenuItem> */}
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            <MenuItem onClick={handleGoBack}>Go Back</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavigationCommunication;
