"use client";
import React, { createContext, useContext, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/hooks/useClickOutside";
import { LoaderIcon } from "lucide-react";

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  customId: string;
  title: string;
  placeholder: string;
  setPlaceholder: React.Dispatch<React.SetStateAction<string>>;
  callback?: (value: string, ...args: any) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const ModalContext = createContext<ModalContextProps | null>(null);

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal components must be used within a Modal provider");
  }
  return context;
};

type ModalProps = {
  customId: string;
  title?: string;
  className?: string;
  callback?: (value: string, ...args: any) => Promise<void>;
  children: React.ReactNode;
};

function Modal({
  customId,
  title = "Feedback",
  className,
  callback,
  children,
  ...props
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    if (callback) await callback(placeholder);
    setLoading(false);
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        customId,
        title,
        placeholder,
        setPlaceholder,
        callback,
        loading,
        setLoading,
        handleSubmit,
      }}
    >
      <div className="relative">
        <motion.button
          className={cn(
            "flex h-9 items-center rounded-lg border border-zinc-950/10 bg-white px-3 text-zinc-950 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50",
            className
          )}
          layout
          layoutId={`fb-modal-button-${customId}`}
          onClick={() => setIsOpen(true)}
          {...props}
        >
          <motion.span layoutId={`fb-modal-title-${customId}`} className="text-sm">
            {title}
          </motion.span>
        </motion.button>

        {isOpen && children}
      </div>
    </ModalContext.Provider>
  );
}

type ModalContentProps = {
  textClassName?: string;
  className?: string;
  children?: React.ReactNode;
};

function ModalContent({ className, children, textClassName, ...props }: ModalContentProps) {
  const { customId, title, setIsOpen, placeholder, setPlaceholder, loading, handleSubmit } =
    useModalContext();

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        layoutId={`fb-modal-button-${customId}`}
        className={cn(
          "absolute top-1/2 left-1/2 h-[193px] w-[314px] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-zinc-950/10 bg-white px-3 text-zinc-950 md:h-[200px] md:w-[364px] dark:border-zinc-50/40 dark:bg-zinc-700 dark:text-zinc-50",
          className
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children ? (
          children
        ) : (
          <form className="h-full w-full rounded-lg" onSubmit={handleSubmit}>
            <motion.span
              layoutId={`fb-modal-title-${customId}`}
              aria-hidden="true"
              style={{
                opacity: !placeholder ? 1 : 0,
              }}
              className="absolute top-3 left-4 text-sm text-zinc-600 select-none dark:text-zinc-300"
            >
              {title}
            </motion.span>

            <textarea
              className={cn(
                "hidden h-[80%] w-full resize-none rounded-md bg-transparent px-1 py-3 text-sm text-zinc-700 outline-none md:block dark:text-zinc-200",
                textClassName
              )}
              required
              autoFocus
              onChange={(e) => setPlaceholder(e.target.value)}
              value={placeholder}
            />
            <textarea
              className={cn(
                "h-[75%] w-full resize-none rounded-md bg-transparent px-1 py-3 text-sm text-zinc-700 outline-none md:hidden dark:text-zinc-200",
                textClassName
              )}
              required
              onChange={(e) => setPlaceholder(e.target.value)}
              value={placeholder}
            />

            <button
              className="border-primary/10 bg-primary-foreground/80 hover:bg-primary-foreground-800 text-primary ml-auto flex h-7 items-center justify-center rounded-md border px-3 py-4 text-sm font-medium transition-transform duration-200 hover:scale-105 active:scale-95"
              type="submit"
              aria-label={`Submit ${title}`}
              disabled={loading}
            >
              {loading ? <LoaderIcon className="mr-1 h-5 w-5 animate-spin" /> : `Submit ${title}`}
            </button>
          </form>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

function FeedbackModal({
  customId,
  className,
  callback,
}: Omit<ModalProps, "children" | "title"> & { title?: string }) {
  return (
    <Modal customId={customId} className={className} callback={callback}>
      <ModalContent />
    </Modal>
  );
}

export { Modal, ModalContent };
export default FeedbackModal;

// DevelopedBy: AetherUI
