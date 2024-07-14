import type { Comment } from "~/_components/commentSection";

export default function AuthorLabel({
  comment,
  replyButton,
}: {
  comment: Comment;
  replyButton: React.ReactNode;
}) {
  const { user, createdAt } = comment;
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <img
            src={user.image.webp}
            alt="user profile thumbnail"
            className="h-8 w-8"
          />
          <div className="text-neutral-dark-blue">{user?.username}</div>
        </div>
        <div className="text-neutral-grayish-blue">{createdAt}</div>
      </div>
      <div className="hidden md:block">{replyButton}</div>
    </div>
  );
}
