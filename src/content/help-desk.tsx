"use client";
import { cn } from "@/lib/utils";
import { MessageSquare, X } from "lucide-react";
import React, { createContext, useCallback, useContext, useEffect, useRef } from "react";

type HelpDeskContextType = {
  email: string;
  message: string;
  status: FeedbackStatus;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOpenChange: (open: boolean) => void;
  isOpen: boolean;
  showSuccess: boolean;
  showError: boolean;
};

const HelpDeskContext = createContext<HelpDeskContextType | null>(null);

export const useHelpDesk = () => {
  const context = useContext(HelpDeskContext);
  if (!context) {
    throw new Error("useHelpDesk must be used within a HelpDesk Provider");
  }

  return context;
};

export type FeedbackStatus = "idle" | "submitting" | "success" | "error";

type HelpDeskProviderProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  status?: FeedbackStatus;
  onSubmit?: (data: { email: string; message: string }) => void | Promise<void>;
} & React.PropsWithChildren;

function HelpDeskProvider({
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  status = "idle",
  onSubmit,
}: HelpDeskProviderProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const closingAnimationRef = useRef<NodeJS.Timeout | null>(null);
  const successResetTimerRef = useRef<NodeJS.Timeout | null>(null);
  const errorResetTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Determine if the component is controlled or uncontrolled
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (closingAnimationRef.current) clearTimeout(closingAnimationRef.current);
      if (successResetTimerRef.current) clearTimeout(successResetTimerRef.current);
      if (errorResetTimerRef.current) clearTimeout(errorResetTimerRef.current);

      if (!isControlled) setUncontrolledOpen(newOpen);
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );

  // Wait for closing animation to finish
  useEffect(() => {
    if (!isOpen) {
      if (closingAnimationRef.current) clearTimeout(closingAnimationRef.current);
      if (errorResetTimerRef.current) clearTimeout(errorResetTimerRef.current);

      successResetTimerRef.current = setTimeout(() => {
        setShowSuccess(false);
        setShowError(false);
        successResetTimerRef.current = null;
      }, 300);
    }

    return () => {
      if (successResetTimerRef.current) clearTimeout(successResetTimerRef.current);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    setShowError(false);
    setShowSuccess(false);
    if (closingAnimationRef.current) clearTimeout(closingAnimationRef.current);
    if (errorResetTimerRef.current) clearTimeout(errorResetTimerRef.current);
    try {
      await onSubmit?.({ email, message });
      setShowSuccess(true);

      setEmail("");
      setMessage("");
      closingAnimationRef.current = setTimeout(() => {
        handleOpenChange(false);
        closingAnimationRef.current = null;
      }, 1500);
    } catch (err) {
      console.log("Setting showError = true");
      console.error(err);
      setShowError(true);

      errorResetTimerRef.current = setTimeout(() => {
        setShowError(false);
        errorResetTimerRef.current = null;
      }, 3000);
    }
  };
  return (
    <HelpDeskContext.Provider
      value={{
        email,
        message,
        status,
        setEmail,
        setMessage,
        handleSubmit,
        handleOpenChange,
        isOpen,
        showSuccess,
        showError,
      }}
    >
      {children}
    </HelpDeskContext.Provider>
  );
}

HelpDeskProvider.displayName = "HelpDeskProvider";

export type HelpDeskProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
} & React.ComponentProps<"div">;

function HelpDesk({
  children,
  title = "How can we help you?",
  subtitle = "Send us a message and we'll get back to you as soon as possible.",
  className,
  ...props
}: HelpDeskProps) {
  const { isOpen, showSuccess, showError, handleOpenChange } = useHelpDesk();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-300"
          onClick={() => handleOpenChange(false)}
        />
      )}

      <div
        className={cn(
          "fixed right-4 bottom-24 z-50 w-[90vw] max-w-md overflow-hidden rounded-xl bg-white shadow-2xl transition-all duration-300 dark:bg-zinc-900",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0",
          className
        )}
        {...props}
      >
        {showSuccess ? (
          <SuccessBox />
        ) : showError ? (
          <ErrorBox />
        ) : (
          <div className="relative p-6">
            <button
              onClick={() => handleOpenChange(false)}
              className="absolute top-4 right-4 rounded-full p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            >
              <X size={20} />
              <span className="sr-only">Close</span>
            </button>

            <div>
              <h2 className="mb-1 text-xl font-bold dark:text-white">{title}</h2>
              <p className="mb-6 text-zinc-500 dark:text-zinc-400">{subtitle}</p>
            </div>

            {children}
          </div>
        )}
      </div>
    </>
  );
}

HelpDesk.displayName = "HelpDesk";

export type HelpDeskFomrProps = {
  className?: string;
  btnClassName?: string;
} & React.ComponentProps<"form">;

function HelpDeskForm({ className, btnClassName, ...props }: HelpDeskFomrProps) {
  const { status, email, message, handleSubmit, setEmail, setMessage } = useHelpDesk();
  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)} {...props}>
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
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help you?"
          required
          rows={4}
          className="min-h-24 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "w-full rounded-md px-4 py-2 font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",
          status === "submitting"
            ? "cursor-not-allowed bg-zinc-400 dark:bg-zinc-600"
            : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
          btnClassName
        )}
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

HelpDeskForm.displayName = "HelpDeskForm";

type HelpDeskButtonProps = {
  className?: string;
} & React.ComponentProps<"button">;

function HelpDeskButton({ className, ...props }: HelpDeskButtonProps) {
  const { handleOpenChange, isOpen } = useHelpDesk();
  return (
    <button
      onClick={() => handleOpenChange(!isOpen)}
      className={cn(
        "fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-blue-600 active:scale-95",
        className
      )}
      {...props}
    >
      {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
    </button>
  );
}

HelpDeskButton.displayName = "HelpDeskButton";

function SuccessBox() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="checkmark"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="text-xl font-bold dark:text-white">Thanks for your feedback!</h3>
      <p className="text-zinc-500 dark:text-zinc-400">We'll get back to you soon.</p>
    </div>
  );
}

function ErrorBox() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-white">
        <X size={32} className="animate-caret-blink" />
      </div>
      <h3 className="text-xl font-bold dark:text-white">Something went wrong!</h3>
      <p className="text-zinc-500 dark:text-zinc-400">Please try again later.</p>
    </div>
  );
}

export { HelpDeskProvider, HelpDesk, HelpDeskForm, HelpDeskButton };
