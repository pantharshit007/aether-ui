import {
  AnimatedSlider as SmoothSlider,
  AnimatedCard,
  CardContent,
  OnHover,
  DefaultView,
} from "@/content/smooth-slider";
import { animeData } from "@/lib/data";
import React from "react";

const SmoothSliderDemo2 = () => {
  return (
    <div className="w-full p-4">
      <SmoothSlider title="Custom Cards">
        {animeData
          .reverse()
          .slice(0, 5)
          .map((anime) => (
            <AnimatedCard key={anime.id} defaultWidth="220px" expandedWidth="400px" height="300px">
              <CardContent defaultAspectRatio="aspect-square" expandedAspectRatio="aspect-[21/9]">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="h-full w-full object-cover"
                  style={{ transition: "all 0.4s ease" }}
                />

                <OnHover className="bg-gradient-to-t from-cyan-700/90 via-cyan-100/10 to-transparent">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">{anime.title}</h3>
                    <p className="text-sm text-gray-200">
                      {anime.year} · {anime.seasons} · {anime.platform}
                    </p>

                    <button className="mt-3 flex items-center gap-1 rounded bg-cyan-500/30 px-3 py-1 text-sm text-white backdrop-blur-sm transition-colors hover:bg-cyan-500/50">
                      Watch now
                    </button>
                  </div>
                </OnHover>

                <DefaultView className="bg-gradient-to-t from-cyan-900/90 to-transparent p-4">
                  {anime.title}
                </DefaultView>
              </CardContent>
            </AnimatedCard>
          ))}
      </SmoothSlider>
    </div>
  );
};

export default SmoothSliderDemo2;
