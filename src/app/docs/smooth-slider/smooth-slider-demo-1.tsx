import {
  AnimatedSlider,
  AnimatedCard,
  CardContent,
  OnHover,
  DefaultView,
} from "@/content/smooth-slider";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import { animeData } from "@/lib/data";
import React from "react";

const SmoothSliderDemo1 = () => {
  return (
    <div className="w-full p-4">
      <AnimatedSlider title="Popular Anime">
        {animeData.map((anime) => (
          <AnimatedCard key={anime.id}>
            <CardContent>
              <img
                src={anime.image}
                alt={anime.title}
                className="h-full w-full object-cover"
                style={{ transition: "all 0.4s ease" }}
              />
              <div className="absolute top-2 right-2 z-10">
                <button className="text-white transition-colors hover:text-gray-200">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
              <OnHover fadeInDuration="0.5s">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">{anime.title}</h3>
                  <p className="text-sm text-gray-200">
                    {anime.year} · {anime.seasons} · {anime.platform}
                  </p>
                  <button className="mt-3 flex items-center gap-1 rounded bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/30">
                    Watch options
                  </button>
                </div>
              </OnHover>
              <DefaultView>{anime.title}</DefaultView>
            </CardContent>
          </AnimatedCard>
        ))}
      </AnimatedSlider>
    </div>
  );
};

export default SmoothSliderDemo1;
