import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findUserProfile } from '../../../State/User/Action';
import { Card, CardContent, Typography, Grid, CardMedia, Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { userProfile } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(findUserProfile());
    }, [dispatch]);

    return (
        <Grid container justifyContent="center">
            <Grid item style={{ margin: '10px', textAlign: 'center' }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        User Profile
                    </Typography>
                    {userProfile && (
                        <>
                            <Avatar style={{ width: '100px', height: '100px', margin: 'auto' }} sx={{
                                bgcolor: deepPurple[500],
                                color: "white",
                                cursor: "pointer",
                            }}>
                                <Typography variant="h2" style={{ lineHeight: '100px' }}>
                                    {userProfile.firstName[0].toUpperCase()}
                                </Typography>
                            </Avatar>
                            <Typography variant="body1">
                                <strong>First Name:</strong> {userProfile.firstName}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Last Name:</strong> {userProfile.lastName}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Email:</strong> {userProfile.email}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Role:</strong> {userProfile.role}
                            </Typography>
                        </>
                    )}
                </CardContent>
            </Grid>
        </Grid>
    );

};

export default UserProfile;
