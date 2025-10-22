import { ScrollIndicator } from "@/components/content/scroll-indicator";
import React from "react";

const ScrollIndicatorDemo1 = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-10">
        <h1 className="mb-8 text-4xl font-bold">Scroll Indicator Demo</h1>

        <div className="space-y-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-card rounded-lg border p-8">
              <h2 className="mb-4 text-2xl font-semibold">Section {i + 1}</h2>
              <p className="text-muted-foreground">
                Scroll down to see the scroll indicator appear after you pass the first viewport
                height. The circular progress shows your scroll percentage, and hovering reveals an
                arrow to scroll back to top.
              </p>
            </div>
          ))}
        </div>
      </div>

      <ScrollIndicator showTopBar />
    </div>
  );
};

export default ScrollIndicatorDemo1;
