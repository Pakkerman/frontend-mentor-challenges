import { ReplyIcon } from "~/svgs";

export default function ReplyButton({
  toggleReply,
}: {
  toggleReply: () => void;
}) {
  return (
    <button
      className="group flex items-center gap-2 px-2 font-bold text-primary-moderate-blue hover:text-primary-light-grayish-blue"
      onClick={toggleReply}
    >
      <ReplyIcon />
      Reply
    </button>
  );
}
