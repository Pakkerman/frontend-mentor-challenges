import data from "data/data.json";

export default function AuthorLabel({
  comment,
  replyButton,
}: {
  comment: any;
  replyButton: React.ReactNode;
}) {
  const { username, createdAt } = comment;

  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <img
            // src={user.image.webp}
            src={"images/avatars/image-maxblagun.png"}
            alt="user profile thumbnail"
            className="h-8 w-8"
          />
          <div className="font-bold text-neutral-dark-blue">{username}</div>
          {username === data.currentUser.username && (
            <p className="rounded-sm bg-primary-moderate-blue px-2 text-sm font-bold leading-5 text-neutral-light-gray">
              you
            </p>
          )}
        </div>
        <div className="text-neutral-grayish-blue">
          {createdAt.toTimeString()}
        </div>
      </div>
      <div className="hidden md:block">{replyButton}</div>
    </div>
  );
}
