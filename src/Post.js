import React from 'react'
import {Avatar} from "@material-ui/core";
import "./styles/Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { ChatBubble, FavoriteBorder, Publish, Repeat } from '@material-ui/icons';
const Post = ({
    displayName,username,verified,
    timestamp,text,image,avatar
}) => {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src={avatar}/>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>{displayName}{" "}
                    <span className='post__headerSpecial'>
                   {verified && <VerifiedUserIcon className="post__badge"/> }  {"@"+username}   
                    </span>    
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt=""/>
            <div className='post__footer'>
                <ChatBubble fontSize='small'/>
                <Repeat fontSize='small'/>
                <FavoriteBorder fontSize='small'/>
                <Publish fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default Post