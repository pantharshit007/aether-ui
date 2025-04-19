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

  const handleSubmit = async (data: { email: string; message: string }) => {
    setStatus("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Feedback submitted:", data);
    setStatus("success");

    // Reset status after some time
    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  };
  return (
    <>
      <HelpDeskProvider onSubmit={handleSubmit} status={status}>
        <HelpDesk>
          <HelpDeskForm />
        </HelpDesk>
        <HelpDeskButton />
      </HelpDeskProvider>
    </>
  );
};

export default HelpDeskDemo1;
