"use client";

import { FuzzyText } from "@/components/content/fuzzy-text";
import React from "react";

const FuzzyTextDemo3 = () => {
  return (
    <button onClick={() => alert("Alert!")} aria-label="Alert btn">
      <FuzzyText
        orignal="Alert"
        className="cursor-pointer rounded-md bg-orange-500/90 px-3 py-2 text-xl font-semibold text-zinc-50 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-700"
      >
        Alert
      </FuzzyText>
    </button>
  );
};

export default FuzzyTextDemo3;
