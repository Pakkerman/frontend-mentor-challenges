"use client";

import clsx from "clsx";
import data from "data/data.json";
import { api } from "~/trpc/react";

export default function CommentForm() {
  const { mutate } = api.comment.create.useMutation({
    onMutate: () => {
      console.log("mutation!");
    },
  });

  const { currentUser } = data;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as {
      content: string;
    };

    mutate({ content: data.content, userId: 1 });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "mb-10 max-w-2xl gap-4 rounded-lg bg-neutral-white p-4 sm:px-4 sm:py-6",
        "grid",
        "sm:grid-cols-[1fr_7fr_2fr] sm:grid-rows-none",
      )}
    >
      <textarea
        className={clsx(
          "rounded-lg border-[1.5px] border-neutral-light-gray p-3",
          "col-span-2",
          "sm:col-span-1 sm:col-start-2",
        )}
        name="content"
        id="content"
        placeholder="Add a comment..."
      />
      <img
        src={currentUser.image.png}
        alt="user profile thumbnail"
        className={clsx(
          "h-8 w-8",
          "col-start-1 row-start-2 self-center",
          "sm:col-start-1 sm:row-start-1 sm:self-start sm:justify-self-center",
        )}
      />
      <button
        type="submit"
        className={clsx(
          "rounded-lg bg-primary-moderate-blue px-8 py-3 font-bold text-neutral-very-light-gray",
          "justify-self-end",
          "sm:self-start",
        )}
      >
        SEND
      </button>
    </form>
  );
}
