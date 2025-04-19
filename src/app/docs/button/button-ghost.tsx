"use client";

import { Button } from "@/content/button";
import React from "react";

const buttonGhost = () => {
  return (
    <Button variant="ghost" onClick={() => alert("clicked in liquied metal")}>
      Click me
    </Button>
  );
};

export default buttonGhost;
