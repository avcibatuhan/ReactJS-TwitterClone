import { Avatar,Button } from '@material-ui/core';
import React, { useState } from 'react';
import "./styles/TweetBox.css"
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const sendTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
      displayName:'Batuhan Avcı',
      username: 'avcibatuhan',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar : "https://www.w3schools.com/howto/img_avatar.png"
    })
    setTweetMessage("")
    setTweetImage("")
  }
  return (
    <div className='tweetBox'>
        <form action=''>
            <div className='tweetBox__input'>
            <Avatar src='https://www.w3schools.com/howto/img_avatar.png'/>
            <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text" />
            </div>
            <input
            value={tweetImage} onChange={e=> setTweetImage(e.target.value)}
            type="text"
            placeholder='Optional: Enter image URL'
            className='tweetBox__inputImage'
            />
            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox