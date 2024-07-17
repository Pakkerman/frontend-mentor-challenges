"use client";

import { useState } from "react";
import { ReplyComment } from "~/_components/commentSection";
import ReplyInput from "./ReplyInput";
import ScoreCounter from "./ScoreCounter";
import AuthorLabel from "./AuthorLabel";
import ReplyButton from "~/components/buttons/ReplyButton";
import DeleteButton from "~/components/buttons/DeleteButton";
import data from "data/data.json";
import EditButton from "./buttons/EditButton";

export function Reply({ replies }: { replies: ReplyComment[] }) {
  const [showRepliesInput, setShowRepliesInput] = useState(
    new Array(replies.length).fill(false),
  );

  console.log(showRepliesInput);

  if (replies.length === 0) return;

  return (
    <div className="group/indent flex justify-center">
      <div className="w-[10%] sm:w-[15%]">
        <div className="mr-auto h-full w-1 rounded-full bg-neutral-light-gray group-hover/indent:bg-primary-moderate-blue sm:mx-auto" />
      </div>
      <ul className="flex flex-col gap-4 ">
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
              <ReplyInput
                show={showRepliesInput[idx]}
                to={replies[idx]!.replyingTo}
              />
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
  const { content, score, replyingTo } = reply;
  const [showReplyInput, setShowReplyInput] = useState(false);

  return (
    <div className="flex max-w-2xl flex-col gap-4 rounded-lg bg-neutral-white p-4 sm:flex-row sm:px-4 sm:py-6">
      <div className="flex flex-col gap-2">
        <AuthorLabel
          comment={reply}
          replyButton={<ReplyButton toggleReply={toggleReply} />}
        />
        <p className="text-neutral-grayish-blue">
          <span className="font-bold text-primary-moderate-blue">
            @{replyingTo}
          </span>
          {content}
        </p>
      </div>
      <div className="flex w-full items-center justify-between sm:order-first sm:w-20">
        <ScoreCounter score={score} />
        <div className="flex  items-center justify-end sm:hidden">
          {data.currentUser.username === reply.user.username ? (
            <>
              <DeleteButton />
              <EditButton />
            </>
          ) : (
            <ReplyButton toggleReply={toggleReply} />
          )}
        </div>
      </div>
    </div>
  );
}
