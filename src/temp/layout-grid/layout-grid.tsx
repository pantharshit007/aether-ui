"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Card = {
  id: number;
  thumbnail: string;
  heading: string;
  description: string;
  index: number;
};

const GridLayout = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="group relative mx-auto grid aspect-square h-full max-h-[600px] w-full max-w-[800px] grid-cols-1 grid-rows-4 gap-2 p-10 md:grid-cols-5 md:grid-rows-2 md:gap-4 lg:grid-cols-3">
      {cards.map((card, i) => {
        const className = giveClssaName(card.index);
        return (
          <div key={i} className={cn(className, "")}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                className,
                "relative overflow-hidden",
                selected?.id === card.id
                  ? "absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2"
                  : lastSelected?.id === card.id
                    ? "z-10 h-full w-full rounded-xl bg-white"
                    : "h-full w-full rounded-xl bg-white"
              )}
              layoutId={`card-${card.id}`}
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <ImageComponent card={card} />
            </motion.div>
          </div>
        );
      })}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute top-0 left-0 z-10 h-full w-full bg-black opacity-0",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};
export const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "group-hover:grey and absolute mt-[0px] h-full w-full rounded-md object-cover object-top transition duration-500 ease-in group-hover:brightness-80 hover:scale-105 hover:brightness-100"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  const selectedCardContent = SelectedCardContentElement(selected!);
  return (
    <div
      className={
        "relative z-[60] mt-[-31px] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl"
      }
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 z-10 h-full w-full rounded-md bg-black opacity-60"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative z-[70] px-8 pb-4"
      >
        {selectedCardContent}
      </motion.div>
    </div>
  );
};

const SelectedCardContentElement = (data: Card) => {
  const { heading, description } = data;
  return (
    <div className="rounded-lg">
      <p className="text-xl font-bold text-white md:text-4xl">{heading}</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">{description}</p>
    </div>
  );
};

function giveClssaName(index: number) {
  let className = "col-span-1  md:col-span-3 lg:col-span-1 lg:row-span-2";

  if (index === 1 || index === 2) {
    className = "col-span-1  md:col-span-2 lg:row-span-1 lg:col-span-1";
  } else if (index === 3) {
    className = "col-span-1 md:col-span-3 lg:col-span-2";
  }
  return className;
}

export default GridLayout;
