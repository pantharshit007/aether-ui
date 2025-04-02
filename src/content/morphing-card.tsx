"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Trash } from "lucide-react";
import { cn } from "@/lib/utils";

type MorphingCardProps = {
  children: React.ReactNode;
  className?: string;
};

function MorphingCard({ children, className }: MorphingCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-20 h-screen w-screen bg-black/20 backdrop-blur-xl"
          />

          <div className="fixed z-30 translate-x-[-50%] translate-y-[-50%]">
            <motion.div
              layoutId="morphing-card"
              className="bg-card text-card-foreground flex h-[200px] w-[300px] flex-col items-center justify-center gap-6 gap-y-5.5 rounded-xl border py-6 shadow-sm"
            >
              <motion.span layoutId="delete-icon" className="w-[20%] place-items-center">
                <Trash className="h-10 w-10 rounded-full p-2 text-red-500 ring-1 ring-red-500" />
              </motion.span>
              <motion.p layoutId="content" className="text-lg font-normal">
                Think again, is this a good idea?
              </motion.p>

              <div className="flex w-full justify-center gap-x-5 px-2.5">
                <motion.button
                  layoutId="cancel"
                  className="rounded-md bg-zinc-200 px-2 py-1 text-zinc-800 hover:bg-zinc-300"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </motion.button>
                <motion.button
                  layoutId="delete"
                  className="cursor-pointer rounded-md bg-rose-600 px-2 py-1 text-white hover:bg-rose-700"
                  onClick={() => setOpen(false)}
                >
                  {" "}
                  Delete
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}

      <motion.div
        layoutId="morphing-card"
        className="bg-card text-card-foreground flex h-[150px] w-[300px] flex-col gap-6 rounded-xl border py-6 shadow-sm"
      >
        <div className="flex items-center gap-x-2">
          <motion.span layoutId="delete-icon" className="w-[20%] place-items-center">
            <Trash className="h-6 w-6 text-red-500" />
          </motion.span>
          <motion.div layoutId="content" className={cn("w-[70%]", className)}>
            {children}
          </motion.div>
        </div>

        <div className="flex w-full justify-end gap-x-5 px-2.5">
          <motion.button
            layoutId="cancel"
            className="rounded-md bg-zinc-200 px-2 py-1 text-zinc-800 hover:bg-zinc-300"
          >
            Cancel
          </motion.button>
          <motion.button
            layoutId="delete"
            className="cursor-pointer rounded-md bg-rose-600 px-2 py-1 text-white hover:bg-rose-700"
            onClick={() => setOpen(true)}
          >
            {" "}
            Delete
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

export default MorphingCard;
MorphingCard.displayName = "MorphingCard";
