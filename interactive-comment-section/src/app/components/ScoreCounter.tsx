"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "./svgs";

export default function ScoreCounter({ score }: { score: number }) {
  const [currentScore, setCurrentScore] = useState(score);
  return (
    <div className="flex w-[90px] items-center justify-center gap-4 rounded-lg bg-neutral-light-gray px-5 py-2 text-primary-moderate-blue sm:w-[20px] sm:flex-col sm:gap-2">
      <button
        key="plus"
        className="group h-6 w-6"
        onClick={() => {
          setCurrentScore(currentScore + 1);
        }}
      >
        <PlusIcon />
      </button>
      <div>{currentScore}</div>
      <button
        key="minus"
        className="group h-6 w-6"
        onClick={() => {
          setCurrentScore(currentScore - 1);
        }}
      >
        <MinusIcon />
      </button>
    </div>
  );
}
