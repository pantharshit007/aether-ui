"use client";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hook/useClickOutside";

type Card = {
  id: number;
  thumbnail: string;
  heading?: string;
  description?: string;
};

type BentoGridProps = {
  cards: Card[];
  className?: string;
  customId: string;
  isClickable?: boolean;
};

const BentoGrid = ({
  cards,
  className,
  customId,
  isClickable = false,
  ...props
}: BentoGridProps) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const totalNumbersOfCard = cards.length;

  const handleClick = (card: Card) => {
    if (!isClickable) return;
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    if (!isClickable) return;
    setLastSelected(selected);
    setSelected(null);
  };

  useClickOutside(ref, () => handleOutsideClick());

  const giveClssaNameToChild: { [key: number]: { [key: number]: string } } = {
    3: {
      0: "col-span-3 md:col-span-1 md:row-span-2",
      1: "col-span-2 md:col-span-1",
      2: "col-span-5 md:col-span-1",
    },
    4: {
      0: "row-span-2",
      3: "col-span-2",
    },
    5: {
      1: "md:row-span-2",
      2: "col-span-2 md:col-span-1",
    },
    6: {
      0: "row-span-2",
      1: "md:col-span-2",
      3: "col-span-2 md:col-span-1",
      4: "md:col-span-2",
    },
    7: {
      0: "md:row-span-2 md:col-span-2",
      1: "row-span-2 md:row-span-1 md:col-span-2",
      3: "col-span-2 md:col-span-1",
      4: "row-span-2 md:row-span-1 md:col-span-2",
      5: "md:col-span-2",
      6: "md:col-span-3",
    },
  };

  const giveClssaNameToParent: { [key: number]: string } = {
    3: "gap-2 grid-cols-5 md:grid-cols-2",
    4: "gap-2 grid-cols-2 md:grid-rows-2 grid-rows-3 md:grid-cols-3",
    5: "gap-2 grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-3",
    6: "gap-2 grid-cols-2 grid-rows-4 md:grid-rows-2 md:grid-cols-3",
    7: "gap-2 grid-cols-2 grid-rows-5 md:grid-rows-3 md:grid-cols-5",
  };

  const parentGridClassName = giveClssaNameToParent[totalNumbersOfCard];

  return (
    <div
      ref={ref}
      className={cn(
        "group relative mx-auto grid aspect-square max-h-[600px] w-full max-w-[800px]",
        parentGridClassName,
        className
      )}
      {...props}
    >
      {cards.map((card, index) => {
        const className = giveClssaNameToChild[totalNumbersOfCard]?.[index] || "";
        return (
          <div key={index} className={cn(className, "")}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                className,
                "relative overflow-hidden",
                selected?.id === card.id
                  ? "absolute inset-0 z-50 m-auto flex h-1/2 w-[90%] cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2"
                  : lastSelected?.id === card.id
                    ? "z-10 h-full w-full rounded-xl bg-white"
                    : "h-full w-full rounded-xl bg-white"
              )}
              layoutId={`card-${customId}-${card.id}`}
            >
              {selected?.id === card.id && <SelectedCard selected={selected} customId={customId} />}
              <ImageComponent card={card} customId={customId} />
            </motion.div>
          </div>
        );
      })}

      <div
        onClick={handleOutsideClick}
        className={cn(
          "bg-primary-foreground absolute top-0 left-0 z-10 h-full w-full opacity-0 transition-opacity duration-200",
          selected?.id ? "pointer-events-auto" : "pointer-events-none",
          selected?.id ? "opacity-30" : "opacity-0"
        )}
      />
    </div>
  );
};

export const ImageComponent = ({ card, customId }: { card: Card; customId: string }) => {
  return (
    <motion.img
      layoutId={`image-${customId}-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "group-hover:grey and absolute mt-[0px] h-full w-full rounded-md object-cover object-top transition duration-300 ease-in group-hover:brightness-80 hover:scale-105 hover:brightness-100"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected, customId }: { selected: Card | null; customId: string }) => {
  const selectedCardContent = SelectedCardContentElement(selected!);
  return (
    <div className="relative z-[15] mt-[-31px] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 z-10 h-full w-full rounded-md bg-black/40 opacity-60"
      />
      <AnimatePresence>
        <motion.div
          layoutId={`content-${customId}-${selected?.id}`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative z-10 px-2"
        >
          {selectedCardContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const SelectedCardContentElement = (data: Card) => {
  const { heading, description } = data;
  return (
    <div className="-mb-1.5 rounded-lg">
      <p className="font-mono text-xl font-bold tracking-wide text-white uppercase md:text-2xl">
        {heading}
      </p>
      <p className="max-w-lg font-mono text-base font-normal text-neutral-200 capitalize">
        {description}
      </p>
    </div>
  );
};

export default BentoGrid;

// DevelopedBy: AetherUI
