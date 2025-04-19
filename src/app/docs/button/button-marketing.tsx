"use client";

import { Button } from "@/content/button";
import React from "react";

const buttonMarketing = () => {
  return (
    <Button variant="marketing" onClick={() => alert("clicked in marketing button")}>
      Click me
    </Button>
  );
};

export default buttonMarketing;
