import data from "data/data.json";

export default function AuthorLabel({
  comment,
  replyButton,
}: {
  comment: any;
  replyButton: React.ReactNode;
}) {
  const { username, createdAt } = comment;
  const currentTime = new Date().getTime();
  const elapsedSeconds = (currentTime - createdAt.getTime()) / 1000;

  let commentedTime = "";
  if (2419200 <= elapsedSeconds) {
    const time = +(elapsedSeconds / 2419200).toFixed();
    commentedTime = time < 2 ? "a month ago" : `${time} months ago`;
  } else if (604800 <= elapsedSeconds) {
    const time = +(elapsedSeconds / 604800).toFixed();
    commentedTime = time < 2 ? "a week ago" : `${time} weeks ago`;
  } else if (86400 <= elapsedSeconds) {
    const time = +(elapsedSeconds / 86400).toFixed();
    commentedTime = time < 2 ? "a day ago" : `${time} days ago`;
  } else if (3600 <= elapsedSeconds) {
    const time = +(elapsedSeconds / 3600).toFixed();
    commentedTime = time < 2 ? "a hour ago" : `${time} hours ago`;
  } else if (60 <= elapsedSeconds) {
    const time = +(elapsedSeconds / 60).toFixed();
    commentedTime = time < 2 ? "a minute ago" : `${time} minutes ago`;
  } else if (5 <= elapsedSeconds) {
    commentedTime = `${elapsedSeconds.toFixed()} seconds ago`;
  } else {
    commentedTime = "just now";
  }

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
        <div className="text-neutral-grayish-blue">{commentedTime}</div>
      </div>
      <div className="hidden md:block">{replyButton}</div>
    </div>
  );
}
