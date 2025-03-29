import Header from "@/components/web/nav/header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mx-auto px-6 lg:px-8">{children}</div>
    </>
  );
}

export default layout;
