import { useRef } from "react";
import { users } from "../data/users";
import { Comment, User } from "../types/types";

import "./Discussion.css";

export declare interface DiscussionProps {
  users: User[];
  comments: Comment[];
  handleAddComment: Function;
}

export default function Discussion(props: DiscussionProps) {
  const { comments, handleAddComment } = props;

  const newCommentRef = useRef<HTMLInputElement>(null);

  const onPostComment = () => {
    console.log(
      "Post Comment button clicked with input text:",
      newCommentRef.current?.value
    );

    if (newCommentRef.current?.value) {
      handleAddComment(newCommentRef.current?.value, "GENERAL");
      newCommentRef.current.value = "";
    }
  };

  return (
    <div id="discussion-component">
      {comments.map(c => {
        const user = users.find(u => u.id === c.userId);

        return (
          <div key={c.id} className="comment">
            <div className="comment-user-avatar">
              <img
                src={
                  user?.photoUrl ||
                  "https://cdn-icons-png.flaticon.com/128/747/747545.png"
                }
              />
              <span className="name">{user?.name || "Anonymous"}</span>
              <span className="date">{c.createdDate.toLocaleString()}</span>
            </div>

            <div className="comment-text">{c.text}</div>
          </div>
        );
      })}
      <div className="form">
        <input ref={newCommentRef} placeholder="Add a comment..."></input>
        <button onClick={onPostComment}>Post</button>
      </div>
    </div>
  );
}
