import React, { useEffect, useState } from 'react'
import Post from './Post';
import './styles/Feed.css';
import TweetBox from './TweetBox';
import db from './firebase';

function Feed() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  },[])
  return (
    <div className='feed'>
        <div className='feed__header'>
            Home
        </div>
        <TweetBox/>
        {posts.map((post) => (
          <Post
          key={post.text} 
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          avatar={post.avatar}
          image={post.image}
          text={post.text} />
        ))}
        {/* <Post displayName="Batuhan Avcı" username="avcibatuhan" 
        verified={true} text="Im creating twitter clone!!"
        avatar="https://www.w3schools.com/howto/img_avatar.png"
        image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
        /> */}

    </div>
  )
}

export default Feed