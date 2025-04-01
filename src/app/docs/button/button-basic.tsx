"use client";
import { Button } from "@/content/button";
import React from "react";

function ButtonBasic() {
  return <Button onClick={() => alert("clicked")}>Click me</Button>;
}

export default ButtonBasic;
