"use client";
import {
  FeedbackStatus,
  HelpDesk,
  HelpDeskButton,
  HelpDeskForm,
  HelpDeskProvider,
} from "@/content/help-desk";
import React, { useState } from "react";

const HelpDeskDemo1 = () => {
  const [status, setStatus] = useState<FeedbackStatus>("idle");
  const [show, setShow] = useState(true);

  const handleSubmit = async (data: { email: string; message: string }) => {
    try {
      setStatus("submitting");

      // Simulate API call
      await new Promise((res, rej) => {
        setTimeout(() => res(data), 1000);
      });

      console.log("Query submitted:", data);
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Submittion failed:", error);
      setStatus("error");
      throw error;
    }
  };
  return (
    <div className="place-items-center">
      <p className="text-base">Look at the right side of the screen to see the help desk.</p>

      <button
        className="bg-accent-foreground/90 text-accent mt-2 rounded-md px-2.5 py-1"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
      {show && (
        <HelpDeskProvider onSubmit={handleSubmit} status={status}>
          <HelpDesk>
            <HelpDeskForm />
          </HelpDesk>
          <HelpDeskButton />
        </HelpDeskProvider>
      )}
    </div>
  );
};

export default HelpDeskDemo1;
