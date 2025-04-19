"use client";

import { Button } from "@/content/button";
import React from "react";

const buttonDestructive = () => {
  return (
    <Button variant="destructive" onClick={() => alert("clicked on destructive button")}>
      Click me
    </Button>
  );
};

export default buttonDestructive;
