"use client";

import { Button } from "@/content/button";
import React from "react";

const buttonLink = () => {
  return (
    <Button variant="link" onClick={() => alert("clicked in link button")}>
      Click me
    </Button>
  );
};

export default buttonLink;
