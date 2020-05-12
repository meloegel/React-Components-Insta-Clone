// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  // const [postId, comments] = props
const [comment, setComment] = useState(props.comments)
  return (
    <div>

       {/* {postId.map(comment => <CommentInput comment={comment}/>)} */}
      {comment.map(comment => <Comment comment={comment}/>)}
      <CommentInput/>
    </div>
  );
};

export default CommentSection;
