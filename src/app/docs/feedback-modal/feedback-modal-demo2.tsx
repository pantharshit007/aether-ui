"use client";
import { Modal, ModalContent } from "@/content/feedback-modal";

const FeedbackModalDemo2 = () => {
  function log(val: string) {
    // Simulate an API request that takes 2 seconds
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("feedback modal:", val);
        resolve();
      }, 2000);
    });
  }
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <p>Click me in Light mode</p>

      <Modal
        customId="styled-modal"
        title="Contact Us"
        callback={log}
        className="border-purple-300 bg-purple-100 text-purple-800"
      >
        <ModalContent className="border-purple-300 bg-purple-50" />
      </Modal>
    </div>
  );
};

export default FeedbackModalDemo2;
