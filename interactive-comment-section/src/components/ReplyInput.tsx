"use client";

import { useState } from "react";

export default function ReplyForm({ show, to }: { show: boolean; to: string }) {
  const [text, setText] = useState(`@${to}, `);
  if (show)
    return (
      <div className="flex w-full items-start gap-4 rounded-md bg-neutral-white p-4">
        <textarea
          className="h-[100px] w-full rounded-md border border-neutral-light-gray p-2"
          name="content"
          id="content"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button className="rounded-md bg-primary-moderate-blue px-4 py-2 text-neutral-very-light-gray ">
          REPLY
        </button>
      </div>
    );
}
