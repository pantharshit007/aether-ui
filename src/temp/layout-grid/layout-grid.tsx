"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Card = {
  id: number;
  thumbnail: string;
  heading: string;
  description: string;
};

const GridLayout = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const totalNumbersOfCard = cards.length;

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  const parentGridClassName = giveClssaNameToParent(totalNumbersOfCard);

  return (
    <div
      className={cn(
        "group relative mx-auto grid aspect-square h-full max-h-[600px] w-full max-w-[800px]",
        parentGridClassName
      )}
    >
      {cards.map((card, index) => {
        const className = giveClssaNameToChild(index, totalNumbersOfCard);
        return (
          <div key={index} className={cn(className, "")}>
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

// this function will return class according to its childIndex
function giveClssaNameToChild(childIndex: number, numberOfChilds: number) {
  let className = "";

  if (numberOfChilds === 3) {
    if (childIndex === 0) {
      className = "md:row-span-2";
    } else if (childIndex === 2) {
      className = "col-span-2 md:col-span-1";
    }
  } else if (numberOfChilds === 4) {
    if (childIndex === 0) {
      className = "row-span-2";
    } else if (childIndex === 3) {
      className = "col-span-2";
    }
  } else if (numberOfChilds === 5) {
    if (childIndex === 1) {
      className = "md:row-span-2";
    } else if (childIndex === 2) {
      className = "col-span-2 md:col-span-1";
    }
  } else if (numberOfChilds === 6) {
    if (childIndex === 0) {
      className = "md:row-span-2";
    } else if (childIndex === 1) {
      className = "md:col-span-2";
    } else if (childIndex === 2) {
      className = "col-span-2 md:col-span-1";
    } else if (childIndex === 3) {
      className = "row-span-2 md:row-span-1";
    } else if (childIndex === 4) {
      className = "md:col-span-2";
    }
  } else if (numberOfChilds === 7) {
    if (childIndex === 0) {
      className = "md:row-span-2 md:col-span-2";
    } else if (childIndex === 1) {
      className = "row-span-2 md:row-span-1 md:col-span-2";
    } else if (childIndex === 3) {
      className = "col-span-2 md:col-span-1";
    } else if (childIndex === 4) {
      className = "row-span-2 md:row-span-1 md:col-span-2";
    } else if (childIndex === 5) {
      className = "md:col-span-2";
    } else if (childIndex === 6) {
      className = "md:col-span-3";
    }
  }

  return className;
}

// this function will return class (gird-cols-[x]) according to numbers of data provided by the user
function giveClssaNameToParent(numberOfChilds: number) {
  let className = "";
  if (numberOfChilds === 3) {
    className = " grid-cols-2";
  } else if (numberOfChilds === 4) {
    className = " grid-cols-2 grid-rows-3 md:grid-cols-3";
  } else if (numberOfChilds === 5) {
    className = " grid-cols-2 grid-rows-3 md:grid-cols-3";
  } else if (numberOfChilds === 6) {
    className = " grid-cols-2 grid-rows-4 md:grid-cols-3";
  } else if (numberOfChilds === 7) {
    className = " grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-3 ";
  }
  return className + "gap-2";
}

export default GridLayout;
