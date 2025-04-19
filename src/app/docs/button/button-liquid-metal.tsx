"use client";

import { Button } from "@/content/button";
import React from "react";

function ButtonLiquidMetal() {
  return (
    <Button variant="metal" onClick={() => alert("clicked in liquied metal")}>
      Click me
    </Button>
  );
}

export default ButtonLiquidMetal;
