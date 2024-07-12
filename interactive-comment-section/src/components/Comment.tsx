"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon, ReplyIcon } from "~/svgs";
import type { Comment } from "~/_components/commentSection";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Reply, ReplyCard } from "./Reply";
import ReplyForm from "./ReplyInput";

export default function Comment({ comment }: { comment: Comment }) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [animationParent] = useAutoAnimate();

  return (
    <div
      ref={animationParent}
      className="flex flex-col items-center justify-center gap-2 transition-all"
    >
      <CommentCard
        comment={comment}
        toggleReply={() => {
          setShowReplyInput(!showReplyInput);
        }}
      />
      <Reply replies={comment.replies} />
      <ReplyForm show={showReplyInput} to={comment.user.username} />
    </div>
  );
}

function CommentCard({
  comment,
  toggleReply,
}: {
  comment: Comment;
  toggleReply: () => void;
}) {
  const { content, score } = comment;

  return (
    <div className="flex max-w-2xl flex-col gap-4 rounded-lg bg-neutral-white p-5 sm:flex-row">
      <div className="flex flex-col gap-3">
        <Label
          comment={comment}
          replyButton={<ReplyButton toggleReply={toggleReply} />}
        />
        <p className="text-neutral-grayish-blue">{content}</p>
      </div>
      <div className="flex w-full items-center justify-between sm:order-first sm:w-20">
        <ScoreCounter score={score} />
        <div className="sm:hidden">
          <ReplyButton toggleReply={toggleReply} />
        </div>
      </div>
    </div>
  );
}

function ReplyButton({ toggleReply }: { toggleReply: () => void }) {
  return (
    <button
      className="group flex items-center gap-2 px-4 text-primary-moderate-blue hover:text-primary-light-grayish-blue"
      onClick={toggleReply}
    >
      <ReplyIcon />
      Reply
    </button>
  );
}

function ScoreCounter({ score }: { score: number }) {
  const [currentScore, setCurrentScore] = useState(score);
  return (
    <div className="flex w-32 items-center justify-center gap-4 rounded-lg bg-neutral-light-gray px-5 py-2 text-primary-moderate-blue sm:w-[20px] sm:flex-col sm:gap-2 ">
      <button
        key="plus"
        className="group h-6 w-6 "
        onClick={() => {
          setCurrentScore(currentScore + 1);
        }}
      >
        <PlusIcon />
      </button>
      <div>{currentScore}</div>
      <button
        key="minus"
        className="group h-6 w-6 "
        onClick={() => {
          setCurrentScore(currentScore - 1);
        }}
      >
        <MinusIcon />
      </button>
    </div>
  );
}

function Label({
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
