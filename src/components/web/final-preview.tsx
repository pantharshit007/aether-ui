import { cn } from "@/lib/utils";
import React from "react";

type ComponentPreviewProps = {
  component: React.ReactElement;
  className?: string;
};

// TODO: hasReTrigger tobe implemented
const FinalPreview = ({ component, className }: ComponentPreviewProps) => {
  return (
    <div
      className={cn(
        "group flex min-h-[350px] w-full items-center justify-center rounded-md",
        className
      )}
    >
      {component}
    </div>
  );
};

export default FinalPreview;
