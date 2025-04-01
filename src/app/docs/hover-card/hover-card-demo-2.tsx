import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HoverArea, HoverCard } from "@/content/hover-card";
import { Rocket, Server, Trophy, Users, Lock } from "lucide-react";
import Image from "next/image";
import React from "react";

const HoverCardDemo2 = () => {
  return (
    <HoverArea className="my-6">
      <HoverCard className="rounded-xl" color="orange">
        <div className="h-[400px] w-[300px] rounded-xl bg-slate-100 p-4 shadow-lg dark:bg-zinc-900/90">
          <Image
            className="rounded-t-xl object-cover"
            src="https://loremflickr.com/320/240"
            alt="Card image"
            height={150}
            width={300}
          />

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Hey Kitty</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Kitty is so chill, because she uses Aether UI. Are you using it?
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                April 2, 2025
              </span>
              <button className="rounded-lg bg-orange-500 px-3.5 py-1.5 text-sm text-white dark:bg-orange-700 dark:hover:bg-orange-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </HoverCard>
    </HoverArea>
  );
};

export default HoverCardDemo2;
