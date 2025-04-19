"use client";
import { Button } from "@/content/button";
import React from "react";

function ButtonBall() {
  return (
    <Button variant="ball" onClick={() => alert("click in ball")}>
      Click me
    </Button>
  );
}

export default ButtonBall;
