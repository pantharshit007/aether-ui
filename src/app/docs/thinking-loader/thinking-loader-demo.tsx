import React from "react";
import ThinkingLoader from "@/components/content/thinking-loader";
import { Loader } from "lucide-react";

const ThinkingLoaderDemo = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <ThinkingLoader />
      <ThinkingLoader>
        <Loader className="h-5 w-5 animate-spin" />
      </ThinkingLoader>
    </div>
  );
};

export default ThinkingLoaderDemo;
