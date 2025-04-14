"use client";

import React, { useEffect, useState } from "react";
import { useNavigationLinks } from "@/data/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const PrevNextBtn = ({ current }: { current: string }) => {
  const [prev, setPrev] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(null);

  const navList = useNavigationLinks();
  useEffect(() => {
    const idx = navList.findIndex((item) => item.name === current);

    if (idx === 0) setPrev(null);
    else setPrev(navList[idx - 1].name);

    if (idx === navList.length - 1) setNext(null);
    else setNext(navList[idx + 1].name);
  }, [navList, current]);

  return (
    <div className="my-4 flex items-center justify-between">
      {prev && (
        <Button className="flex items-center gap-2" disabled={!prev} variant={"ghost"}>
          <ChevronLeft className="h-5 w-5" />
          <Link
            href={`/docs/${prev}`}
            className="text-zinc-500 capitalize no-underline dark:text-zinc-400"
          >
            {prev.split("-").join(" ")}
          </Link>
        </Button>
      )}

      {next && (
        <Button className="flex items-center gap-2" disabled={!next} variant={"ghost"}>
          <ChevronRight className="h-5 w-5" />
          <Link
            href={`/docs/${next}`}
            className="text-zinc-500 capitalize no-underline dark:text-zinc-400"
          >
            {next.split("-").join(" ")}
          </Link>
        </Button>
      )}
    </div>
  );
};

export default PrevNextBtn;
