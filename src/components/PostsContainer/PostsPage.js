//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

import data from '../../dummy-data'

const PostsPage = () => {
  // set up state for your data
  const [postData, setPostData] = useState(data)
  return (
    <div className="posts-container-wrapper">
      {postData.map(post => <Post post={post}/>)}
    </div>
  );
};

export default PostsPage;
