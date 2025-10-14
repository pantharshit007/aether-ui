import {
  AnimatedSlider as SmoothSlider,
  AnimatedCard,
  CardContent,
  OnHover,
  DefaultView,
} from "@/components/content/smooth-slider";
import React from "react";

const animeData = [
  {
    id: "1",
    title: "Solo Leveling",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000",
    year: "2024",
    seasons: "1 season",
    platform: "Crunchyroll",
  },
  {
    id: "2",
    title: "Ishura",
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=1000",
    year: "2024",
    seasons: "1 season",
    platform: "Crunchyroll",
  },
  {
    id: "3",
    title: "The Apothecary Diaries",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1000",
    year: "2023",
    seasons: "2 seasons",
    platform: "Crunchyroll",
  },
  {
    id: "4",
    title: "Zenshu",
    image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=1000",
    year: "2023",
    seasons: "1 season",
    platform: "Netflix",
  },
  {
    id: "5",
    title: "Sakamoto Days",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000",
    year: "2024",
    seasons: "1 season",
    platform: "Crunchyroll",
  },
  {
    id: "6",
    title: "Dr. Stone",
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1000",
    year: "2019",
    seasons: "3 seasons",
    platform: "Crunchyroll",
  },
  {
    id: "7",
    title: "Unnamed Memory",
    image: "https://images.unsplash.com/photo-1705831156575-a5294d295a31?q=80&w=1000",
    year: "2024",
    seasons: "1 season",
    platform: "Crunchyroll",
  },
  {
    id: "8",
    title: "I Got Married to the Male Lead",
    image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=1000",
    year: "2024",
    seasons: "1 season",
    platform: "Crunchyroll",
  },
];

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
