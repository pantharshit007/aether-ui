"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { PencilLine, PlusCircle, Trash } from "lucide-react";
import { cn } from "@/lib/utils";

type MorphingCardProps = {
  customId: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
  iconClassname?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  cancelButtonText?: string;
  confirmButtonText?: string;
  dialogTitle?: React.ReactNode;
  dialogDescription?: React.ReactNode;
  dialogCancelText?: string;
  dialogConfirmText?: string;
  onConfirm?: () => void;
  variant?: "positive" | "negative" | "neutral";
};

function MorphingCard({
  customId,
  children,
  className,
  icon: Icon = PencilLine,
  iconClassname = "text-blue-500",
  title,
  description,
  cancelButtonText = "Cancel",
  confirmButtonText = "Create",
  dialogTitle = "Confirm Action",
  dialogDescription = "Are you sure you want to proceed?",
  dialogCancelText = "Cancel",
  dialogConfirmText = "Confirm",
  onConfirm,
  variant = "neutral",
  ...props
}: MorphingCardProps) {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    setOpen(false);
  };

  // Set colors based on variant
  const getButtonStyles = () => {
    switch (variant) {
      case "positive":
        return "bg-emerald-600 hover:bg-emerald-700 text-white";
      case "negative":
        return "bg-rose-600 hover:bg-rose-700 text-white";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";
    }
  };

  const getIconColor = () => {
    if (iconClassname) return iconClassname;

    switch (variant) {
      case "positive":
        return "text-emerald-500";
      case "negative":
        return "text-rose-500";
      default:
        return "text-blue-500";
    }
  };

  return (
    <>
      {open && (
        <MorphingDialog
          customId={customId}
          setOpen={setOpen}
          Icon={Icon}
          iconClassname={getIconColor()}
          title={dialogTitle}
          description={dialogDescription}
          cancelText={dialogCancelText}
          confirmText={dialogConfirmText}
          onConfirm={handleConfirm}
          variant={variant}
        />
      )}

      <motion.div
        layoutId={`morphing-card-${customId}`}
        className="bg-card text-card-foreground flex h-auto min-h-[150px] w-[300px] flex-col gap-6 rounded-xl border p-6 shadow-sm"
        {...props}
      >
        <div className="flex items-center justify-around gap-x-4">
          {Icon && (
            <motion.span layoutId={`card-icon-${customId}`} className="shrink-0">
              <Icon className={`h-6 w-6 ${getIconColor()}`} />
            </motion.span>
          )}
          <motion.div layoutId={`card-content-${customId}`} className={cn("flex-1", className)}>
            {title && <h3 className="text-lg font-medium">{title}</h3>}
            {description && <p className="text-muted-foreground mt-1 text-sm">{description}</p>}
            {children}
          </motion.div>
        </div>

        <div className="flex w-full justify-end gap-x-3 pt-2">
          <motion.button
            layoutId={`cancel-button-${customId}`}
            className="rounded-md bg-zinc-200 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-300"
          >
            {cancelButtonText}
          </motion.button>
          <motion.button
            layoutId={`confirm-button-${customId}`}
            className={`cursor-pointer rounded-md px-3 py-1.5 text-sm ${getButtonStyles()}`}
            onClick={() => setOpen(true)}
          >
            {confirmButtonText}
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

MorphingCard.displayName = "MorphingCard";

type MorphingDialogProps = {
  customId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  Icon: React.ComponentType<{ className?: string }>;
  iconClassname?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
  variant?: "positive" | "negative" | "neutral";
};

function MorphingDialog({
  customId,
  setOpen,
  Icon,
  iconClassname,
  title,
  description,
  cancelText,
  confirmText,
  onConfirm,
  variant = "neutral",
}: MorphingDialogProps) {
  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    setOpen(false);
  };

  // Set colors based on variant
  const getButtonStyles = () => {
    switch (variant) {
      case "positive":
        return "bg-emerald-600 hover:bg-emerald-700 text-white";
      case "negative":
        return "bg-rose-600 hover:bg-rose-700 text-white";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";
    }
  };

  const getRingColor = () => {
    switch (variant) {
      case "positive":
        return "ring-emerald-500";
      case "negative":
        return "ring-rose-500";
      default:
        return "ring-blue-500";
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-20 h-screen w-screen bg-black/20 backdrop-blur-sm"
        onClick={handleCancel}
      />

      <div className="fixed top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          layoutId={`morphing-card-${customId}`}
          className="bg-card text-card-foreground flex h-auto min-h-[200px] w-[300px] flex-col items-center justify-center gap-6 rounded-xl border p-6 shadow-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.span layoutId={`card-icon-${customId}`} className="flex justify-center">
            <Icon
              className={`h-12 w-12 rounded-full p-2 ${iconClassname} ring-1 ${getRingColor()}`}
            />
          </motion.span>

          <div className="flex flex-col items-center text-center">
            {title && <motion.h3 className="text-lg font-medium">{title}</motion.h3>}
            <motion.p
              layoutId={`card-content-${customId}`}
              className="text-muted-foreground mt-2 text-sm"
            >
              {description}
            </motion.p>
          </div>

          <div className="flex w-full justify-center gap-x-3 pt-2">
            <motion.button
              layoutId={`cancel-button-${customId}`}
              className="rounded-md bg-zinc-200 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-300"
              onClick={handleCancel}
            >
              {cancelText}
            </motion.button>
            <motion.button
              layoutId={`confirm-button-${customId}`}
              className={`cursor-pointer rounded-md px-3 py-1.5 text-sm ${getButtonStyles()}`}
              onClick={handleConfirm}
            >
              {confirmText}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export { MorphingCard };
