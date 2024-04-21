import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findUserProfile } from '../../../State/User/Action';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { userProfile } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(findUserProfile());
    }, [dispatch]);

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        User Profile
                    </Typography>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsO-ci5NQCWMHnb304YQicZcvLEH8WLGJzA&usqp=CAU" alt="" />
                    {userProfile && (
                        <>
                            <Typography variant="body1">
                                <strong>First Name:</strong> {userProfile.firstName}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Last Name:</strong> {userProfile.lastName}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Email:</strong> {userProfile.email}
                            </Typography>
                        </>
                    )}
                </CardContent>
            </Grid>
        </Grid>
    );
};

export default UserProfile;
