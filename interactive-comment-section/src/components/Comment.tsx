"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon, ReplyIcon } from "~/svgs";
import type { Comment } from "~/_components/commentSection";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Reply, ReplyCard } from "./Reply";
import ReplyForm from "./ReplyInput";
import ScoreCounter from "./ScoreCounter";
import AuthorLabel from "./AuthorLabel";

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
    <div className="flex max-w-2xl flex-col gap-4 rounded-lg bg-neutral-white p-6 sm:flex-row sm:px-4 sm:py-6">
      <div className="flex flex-col gap-2">
        <AuthorLabel
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
