import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HoverArea, HoverCard } from "@/components/content/hover-card";
import { Rocket, Server, Trophy, Users, Lock } from "lucide-react";
import React from "react";

const HoverCardDemo = () => {
  return (
    <HoverArea className="my-6">
      <HoverCard className="rounded-xl" color="red">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Free plan</CardTitle>
            <CardDescription className="max-w-sm">
              2 Monthly free games, trials and perks for you to enjoy.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Server className="text-foreground" size={20} />
                <span>Dedicated Low-Latency Gaming Servers</span>
              </li>
              <li className="flex items-center space-x-3">
                <Users className="text-foreground" size={20} />
                <span>Monthly Multiplayer Tournament Entry</span>
              </li>
              <li className="flex items-center space-x-3">
                <Trophy className="text-foreground" size={20} />
                <span>Exclusive In-Game Rewards & Cosmetics</span>
              </li>
              <li className="flex items-center space-x-3">
                <Rocket className="text-foreground" size={20} />
                <span>Early Access to New Game Releases</span>
              </li>
              <li className="flex items-center space-x-3">
                <Lock className="text-foreground" size={20} />
                <span>Ad-Free Gaming Experience</span>
              </li>{" "}
            </ul>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="w-full">Subscribe</Button>
          </CardFooter>
        </Card>
      </HoverCard>
    </HoverArea>
  );
};

export default HoverCardDemo;
