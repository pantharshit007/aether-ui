"use client";
import { Button } from "@/components/content/button";
import React from "react";

function ButtonBasic() {
  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => alert("clicked")}>Click me</Button>
      <Button variant="destructive" onClick={() => alert("clicked")}>
        Destructive
      </Button>
      <Button variant="success" onClick={() => alert("clicked")}>
        Success
      </Button>
    </div>
  );
}

export default ButtonBasic;
