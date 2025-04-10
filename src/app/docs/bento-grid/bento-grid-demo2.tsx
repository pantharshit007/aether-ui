import BentoGrid from "@/content/bento-grid";
import React from "react";

const data = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "cherry blossom",
    description: "japanese too",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "cherry blossom",
    description: "japanese too",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "cherry blossom",
    description: "japanese too",
  },
  {
    id: 4,
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "cherry blossom",
    description: "japanese too",
  },
];

const BentoGridDemo = () => {
  return (
    <div className="h-full w-full">
      <BentoGrid cards={data} customId="bento-grid-demo2" className="py-1.5" isClickable />
    </div>
  );
};

export default BentoGridDemo;
