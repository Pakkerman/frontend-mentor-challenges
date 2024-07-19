import type { Comment, ReplyComment } from "~/_components/commentSection";

import data from "data/data.json";

export default function AuthorLabel({
  comment,
  replyButton,
}: {
  comment: Comment | ReplyComment;
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
          <div className="font-bold text-neutral-dark-blue">
            {user?.username}
          </div>
          {user.username === data.currentUser.username && (
            <p className="rounded-sm bg-primary-moderate-blue px-2 text-sm font-bold leading-5 text-neutral-light-gray">
              you
            </p>
          )}
        </div>
        <div className="text-neutral-grayish-blue">{createdAt}</div>
      </div>
      <div className="hidden md:block">{replyButton}</div>
    </div>
  );
}
