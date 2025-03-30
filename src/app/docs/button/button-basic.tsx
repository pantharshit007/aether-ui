"use client";
import { Button } from "@/components/core/button";
import React from "react";

function ButtonBasic() {
  return <Button onClick={() => alert("clicked")}>Click me</Button>;
}

export default ButtonBasic;
