import React from "react";
import MorphingCard from "@/content/morphing-card";

const MorphingCardBasic = () => {
  return (
    <div className="relative">
      <MorphingCard className="font-sans text-xl font-normal">
        Are you sure you want to delete this?
      </MorphingCard>
    </div>
  );
};

export default MorphingCardBasic;
