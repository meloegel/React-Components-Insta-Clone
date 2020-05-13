// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  // const [postId, comments] = props
const [comment] = useState(props.comments)
  return (
    <div>

       {/* {postId.map(comment => <CommentInput comment={comment}/>)} */}
      {comment.map((comment, index) => <Comment key={index} comment={comment}/>)}
      <CommentInput/>
    </div>
  );
};

export default CommentSection;
