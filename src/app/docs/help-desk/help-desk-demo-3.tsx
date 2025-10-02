"use client";
import {
  FeedbackStatus,
  HelpDesk,
  HelpDeskButton,
  HelpDeskForm,
  HelpDeskProvider,
  useHelpDesk,
} from "@/content/help-desk";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type FeedbackCategory = "General Feedback" | "Bug Report" | "Feature Request" | "Service Issue";
type CustomSubmitData = {
  email: string;
  message: string;
  category: FeedbackCategory;
};

const HelpDeskDemo1 = () => {
  const [status, setStatus] = useState<FeedbackStatus>("idle");
  const [category, setCategory] = useState<FeedbackCategory>("General Feedback");
  const [show, setShow] = useState(false);

  const handleCustomSubmit = async (data: { email: string; message: string }) => {
    try {
      setStatus("submitting");
      const fullData: CustomSubmitData = {
        ...data,
        category: category,
      };

      // Simulate API call
      await new Promise((res, rej) => {
        setTimeout(() => res(fullData), 1000);
      });

      console.log("Custom Feedback submitted:", fullData);
      setStatus("success");
      setCategory("General Feedback");

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
      <p className="text-base">Look at the bottom-right side of the screen to see the help desk.</p>

      <button
        className="bg-accent-foreground/90 text-accent mt-2 rounded-md px-2.5 py-1"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
      {show && (
        <HelpDeskProvider onSubmit={handleCustomSubmit} status={status}>
          <HelpDesk
            title="We value your feedback"
            subtitle="Please let us know how we can improve our service"
          >
            <CustomFeedbackForm category={category} setCategory={setCategory} />
          </HelpDesk>
          <HelpDeskButton className="bg-cyan-600 hover:bg-cyan-700" />
        </HelpDeskProvider>
      )}
    </div>
  );
};

function CustomFeedbackForm({
  category,
  setCategory,
}: {
  category: FeedbackCategory;
  setCategory: React.Dispatch<React.SetStateAction<FeedbackCategory>>;
}) {
  // Get necessary values and functions from the HelpDesk context
  const { email, message, setEmail, setMessage, handleSubmit, status } = useHelpDesk();

  const categories: FeedbackCategory[] = [
    "General Feedback",
    "Bug Report",
    "Feature Request",
    "Service Issue",
  ];

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4")}>
      <div className="space-y-2">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value as FeedbackCategory)}
          required
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Your Feedback
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you think..."
          required
          rows={4}
          className="min-h-24 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400"
        />
      </div>

      {/* Submit Button (custom text and style) */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "w-full rounded-md px-4 py-2 font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",
          status === "submitting"
            ? "cursor-not-allowed bg-zinc-400 dark:bg-zinc-600"
            : "bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700" // cyan color
        )}
      >
        {status === "submitting" ? "Sending..." : "Send Feedback"}
      </button>
    </form>
  );
}

export default HelpDeskDemo1;
