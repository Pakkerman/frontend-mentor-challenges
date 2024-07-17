"use client";

import clsx from "clsx";
import data from "data/data.json";

// export default function CommentForm() {
//   const { currentUser } = data;
//   return (
//     <div className="flex max-w-2xl flex-col gap-4 rounded-lg bg-neutral-white p-4 sm:flex-row sm:px-4 sm:py-6">
//       <textarea
//         className="rounded-lg border-[1.5px] border-neutral-light-gray p-3"
//         name="comment"
//         id="comment"
//         placeholder="Add a comment..."
//       />
//
//       <div className="flex w-full items-center justify-between sm:order-first sm:w-20">
//         <img
//           src={currentUser.image.png}
//           alt="user profile thumbnail"
//           className="h-8 w-8"
//         />
//         <button className="rounded-lg bg-primary-moderate-blue px-8 py-3 font-bold text-neutral-very-light-gray">
//           SEND
//         </button>
//       </div>
//     </div>
//   );
// }
//
export default function CommentForm() {
  const { currentUser } = data;
  return (
    <div
      className={clsx(
        "max-w-2xl gap-4 rounded-lg bg-neutral-white p-4 sm:px-4 sm:py-6",
        "grid",
        " sm:grid-cols-[1fr_7fr_2fr] sm:grid-rows-none",
      )}
    >
      <textarea
        className={clsx(
          "rounded-lg border-[1.5px] border-neutral-light-gray p-3 ",
          "col-span-2",
          "sm:col-span-1 sm:col-start-2",
        )}
        name="comment"
        id="comment"
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
        className={clsx(
          "rounded-lg bg-primary-moderate-blue px-8 py-3 font-bold text-neutral-very-light-gray ",
          "justify-self-end",
          "sm:self-start",
        )}
      >
        SEND
      </button>
    </div>
  );
}
