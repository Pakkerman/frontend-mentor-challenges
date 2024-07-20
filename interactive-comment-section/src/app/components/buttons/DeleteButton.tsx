"use client";
import { api } from "~/trpc/react";
import { DeleteIcon } from "../svgs";

export default function DeleteButton({ commentId }: { commentId: number }) {
  const util = api.useUtils();
  const { mutate } = api.comment.deleteById.useMutation({
    onMutate: () => {
      console.log("deleting comment: ", commentId);
    },
    onSuccess: () => {
      util.comment.getAllWithUsername.invalidate();
    },
  });

  const handleClick = async () => {
    const res = mutate({ commentId });

    console.log(res);
  };

  return (
    <button
      className="group flex items-center gap-2 px-2 font-bold text-primary-soft-red hover:text-primary-pale-red"
      onClick={handleClick}
    >
      <DeleteIcon />
      Delete
    </button>
  );
}
