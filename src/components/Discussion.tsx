import { Comment } from "../types/types";

export declare interface DiscussionProps {
  comments: Array<Comment>;
}

export default function Discussion(props: DiscussionProps) {
  const { comments } = props;

  return (
    <>
      {comments.map(c => (
        <div key={c.id}>
          <p>{c.fromName}</p>
          <p>{c.text}</p>
        </div>
      ))}
      <input></input>
      <button>Post</button>
    </>
  );
}
