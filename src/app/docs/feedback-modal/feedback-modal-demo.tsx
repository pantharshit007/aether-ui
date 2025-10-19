"use client";
import FeedbackModal from "@/components/content/feedback-modal";

const FeedbackModalDemo = () => {
  function log(val: string) {
    // Simulate an API request that takes 2 seconds
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("feedback modal:", val);
        resolve();
      }, 2000);
    });
  }
  return <FeedbackModal customId="feedback-modal-demo" callback={log} />;
};

export default FeedbackModalDemo;
