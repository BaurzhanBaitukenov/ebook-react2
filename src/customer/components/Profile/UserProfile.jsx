import React, { useEffect } from 'react'
import { findUserProfile } from '../../../State/User/Action';
import { useDispatch, useSelector } from 'react-redux';
    


const UserProfile = () => {
    const dispatch = useDispatch();
    const { userProfile } = useSelector(state => state.user); // Предполагается, что вы сохраняете данные о пользователе в свойство user

    useEffect(() => {
        dispatch(findUserProfile());
    }, [dispatch]);

    return (
        <div>
            {userProfile && (
                <div>
                    <h2>Welcome, {userProfile.firstName}</h2>
                    <h2>Welcome, {userProfile.lastName}</h2>
                </div>
            )}
        </div>
    );
};

export default UserProfile;