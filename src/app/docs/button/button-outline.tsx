"use client";

import { Button } from "@/content/button";
import React from "react";

const buttonOutline = () => {
  return (
    <Button variant="outline" onClick={() => alert("clicked in ghost button")}>
      Click me
    </Button>
  );
};

export default buttonOutline;
