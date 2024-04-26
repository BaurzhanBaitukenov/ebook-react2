import React, { useEffect } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from 'react-router-dom';
import TweetCard from '../HomeSectionCommunication/TweetCard';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { findTwitsById } from '../../../../State/Twit/Action';

const TwitDetail = () => {
    const param=useParams();
    const dispatch=useDispatch();
    const {twit,theme}=useSelector(store=>store);
    const navigate=useNavigate();

    const handleBack = () => navigate(-1)

    useEffect(()=>{
        dispatch(findTwitsById(param.id))
    },[param.id])

  return (
    <div>
        <section
        className={`z-50 flex items-center sticky top-0 bg-white bg-opacity-95`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          {"Twit"}
        </h1>
      </section>
       {twit.twit && <TweetCard twit={twit.twit}/>}
       <Divider sx={{margin:"2rem 0rem"}}/>

       <div>
        {twit.twit?.replyTwits.slice().reverse().map((item)=><TweetCard twit={item}/>)}
       </div>
    </div>
  )
}

export default TwitDetail
