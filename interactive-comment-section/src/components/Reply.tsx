"use client";

import { useState } from "react";
import { ReplyComment } from "~/_components/commentSection";
import { PlusIcon, MinusIcon, ReplyIcon } from "~/svgs";
import ReplyInput from "./ReplyInput";

export function Reply({ replies }: { replies: ReplyComment[] }) {
  const [showRepliesInput, setShowRepliesInput] = useState(
    new Array(replies.length).fill(false),
  );

  console.log(showRepliesInput);

  return (
    <div className="group/indent flex items-stretch justify-center ">
      <div className="w-[20%] ">
        <div className="mx-auto h-full w-1 rounded-full bg-neutral-light-gray group-hover/indent:bg-primary-moderate-blue " />
      </div>
      <ul className="flex flex-col gap-2 ">
        {replies.length > 0 &&
          replies.map((item, idx) => (
            <li className="flex flex-col gap-2" key={item.id}>
              <ReplyCard
                reply={item}
                toggleReply={() => {
                  setShowRepliesInput((prev) => {
                    prev[idx] = !prev[idx];
                    return prev;
                  });
                }}
              />
              <ReplyInput show={true} to={replies[idx]!.replyingTo} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export function ReplyCard({
  reply,
  toggleReply,
}: {
  reply: ReplyComment;
  toggleReply: () => void;
}) {
  const { createdAt, user, id, content, score, replyingTo } = reply;
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [currentScore, setCurrentScore] = useState(score);

  return (
    <div className="flex w-full items-center gap-4 rounded-md bg-neutral-white p-4">
      <div className="flex w-[20px] flex-col items-center justify-center gap-2 rounded-md bg-neutral-light-gray px-5 py-2 text-primary-moderate-blue ">
        <button
          className="group h-6 w-6 "
          onClick={() => {
            setCurrentScore(currentScore + 1);
          }}
        >
          <PlusIcon />
        </button>
        <div>{currentScore}</div>
        <button
          className="group h-6 w-6 "
          onClick={() => {
            setCurrentScore(currentScore - 1);
          }}
        >
          <MinusIcon />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-4">
            <img
              src={user.image.webp}
              alt="user profile thumbnail"
              className="h-8 w-8"
            />
            <div className="text-neutral-dark-blue">{user?.username}</div>
            <div className="text-neutral-grayish-blue">{createdAt}</div>
          </div>
          <button
            className="group flex items-center gap-2 px-4 text-primary-moderate-blue hover:text-primary-light-grayish-blue"
            onClick={toggleReply}
          >
            <ReplyIcon />
            Reply
          </button>
        </div>
        <p className="">{content}</p>
      </div>
    </div>
  );
}
