import { FuzzyText } from "@/content/fuzzy-text";
import React from "react";

const FuzzyTextDemo = () => {
  return (
    <p className="text-xl font-medium transition-normal duration-300">
      Create amazing text with{" "}
      <FuzzyText text="Fuzzy Text" orignal="Aether UI" className="font-semibold">
        Aether UI
      </FuzzyText>{" "}
      effect
    </p>
  );
};

export default FuzzyTextDemo;
