import { FuzzyText } from "@/components/content/fuzzy-text";
import React from "react";

const FuzzyTextDemo2 = () => {
  return (
    <p className="text-xl font-medium">
      Hover{" "}
      <FuzzyText orignal="over me!" className="font-semibold">
        over me!
      </FuzzyText>
    </p>
  );
};

export default FuzzyTextDemo2;
