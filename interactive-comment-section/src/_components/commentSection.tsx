import data from "data/data.json";
import Comment from "~/components/Comment";
import CommentForm from "~/components/CommentForm";

export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: Array<ReplyComment>;
};

export type ReplyComment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
};

export default function CommentSection() {
  const { comments } = data;
  return (
    <div className="h-full w-full">
      <ul className="flex flex-col gap-4">
        {comments.map((item) => (
          <li key={item.id}>
            <Comment comment={item} />
          </li>
        ))}
        <CommentForm />
      </ul>
    </div>
  );
}
