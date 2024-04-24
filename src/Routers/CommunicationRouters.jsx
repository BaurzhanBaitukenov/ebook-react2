import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../customer/pages/Notfound'
import HomePageCommunication from '../customer/components/Communication/HomePageCommunication/HomePageCommunication';

const CommunicationRouters = () => {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<HomePageCommunication />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default CommunicationRouters;
