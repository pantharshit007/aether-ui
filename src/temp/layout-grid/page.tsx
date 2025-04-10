import React from "react";
import GridLayout from "./layout-grid";

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
  {
    id: 5,
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "cherry blossom",
    description: "japanese too",
  },
  {
    id: 6,
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "cherry blossom",
    description: "japanese too",
  },
  {
    id: 7,
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "cherry blossom",
    description: "japanese too",
  },
];

const Page = () => {
  return (
    <div className="h-[600px] w-full">
      <GridLayout cards={data} />
    </div>
  );
};

export default Page;
