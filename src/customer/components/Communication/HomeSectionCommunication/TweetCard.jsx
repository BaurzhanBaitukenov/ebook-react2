import React, { useState } from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { logout } from '../../../../State/Auth/Action';
import { useDispatch } from 'react-redux';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteOutlined } from '@mui/icons-material';
import ReplyModal from './ReplyModal';

const TweetCard = () => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [openReplyModal, setOpenReplyModal] = useState(false);
    const handleOpenReplyModel = () => setOpenReplyModal(true)
    const handleCloseReplyModal = () => setOpenReplyModal(false)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        console.log("delete tweet")
        handleClose()
    };

    const handleEdit = () => {
        console.log("edit tweet")
        handleClose()
    };

    const handleCreateRetweet = () => {
        console.log("handle create retweet")
    }

    const handleLiketweet = () => {
        console.log("handle like tweet")
    }

    return (
        <React.Fragment>

            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
                <RepeatIcon/>
                <p>You Retween</p>
            </div> */}

            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate(`/communication_profile/${6}`)}
                    className='cursor-pointer'
                    alt='username'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJc4HXepLkvr8m8PstglugpQs1MLFw3rjzmw&usqp=CAU'
                />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>

                            <span className='font-semibold'>Baurzhan</span>
                            <span className='text-gray-600'>baurzhan@gmail.com. 2m</span>
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
                                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                            </Menu>
                        </div>

                    </div>

                    <div className='mt-2'>
                        <div onClick={() => navigate(`/communication/twit/${3}`)} className='cursor-pointer'>
                            <p className='mb-2 p-0'>Cat in front of the FishBook</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md'
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMr1zBJm0tdi1bs-qlXYsfzaZFzf-bKRsmUQ&usqp=CAU" alt="" />
                        </div>

                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>43</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon onClick={handleCreateRetweet} className='cursor-pointer' />
                                <p>54</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                {true ? <FavoriteIcon onClick={handleLiketweet} className='cursor-pointer' /> :
                                    <FavoriteBorderIcon onClick={handleLiketweet} className='cursor-pointer' />}
                                <p>54</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>430</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>430</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <section>
                <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal}/>
            </section>

        </React.Fragment>
    );
};

export default TweetCard;
