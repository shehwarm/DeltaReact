import { useState } from "react";
import './Comment.css';
import CommentsForm from "./CommentsForm";

export default function Comment() {
  const [comments, setComments] = useState([
    {
      username: "user1",
      comment: "This is a great post!",
      rating: 5
    }
  ]);

  const addNewComment = (newComment) => {
    setComments((currComments) => [...currComments, newComment]);
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>

        {comments.map((comment, idx) => (
          <div key={idx} className="comment">
            <span>{comment.comment}</span>
            &nbsp; | &nbsp;
            <span>Rating: {comment.rating}</span>
            <br />
            <span>By: {comment.username}</span>
          </div>
        ))}

        <br />
      </div>

      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
