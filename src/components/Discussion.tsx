import { useRef } from "react";
import { Comment } from "../types/types";

export declare interface DiscussionProps {
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
    <>
      {comments.map(c => (
        <div key={c.id}>
          <p>User {c.userId}</p>
          <p>{c.text}</p>
        </div>
      ))}
      <input ref={newCommentRef}></input>
      <button onClick={onPostComment}>Post</button>
    </>
  );
}
