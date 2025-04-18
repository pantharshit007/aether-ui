import { srcUrl } from "@/lib/data";
import { cn } from "@/lib/utils";
import React from "react";
import OpenInV0 from "./open-in-v0";

type ComponentPreviewProps = {
  component: React.ReactElement;
  className?: string;
  filePath: string;
  disable?: boolean;
};

// TODO: hasReTrigger tobe implemented
const FinalPreview = ({ component, className, filePath, disable }: ComponentPreviewProps) => {
  const componentName = filePath.split("/").pop()?.split(".")[0];
  const registeryURL = `${srcUrl}/e/${componentName}.json`;

  return (
    <div
      className={cn(
        "group flex min-h-[350px] w-full items-center justify-center rounded-md",
        className
      )}
    >
      <div className="absolute top-3 right-2 z-[10] md:top-14">
        <div className="flex items-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
          {/* Re trigger */}
          <></>
          <OpenInV0 url={registeryURL} disable={disable} />
        </div>
      </div>

      {component}
    </div>
  );
};

export default FinalPreview;
