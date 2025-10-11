import { TiltedCarousel } from "@/content/tilted-carousel";

function TiltedCarouselDemo2() {
  const images = [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1756894256833-934a85a42df9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1755090281929-2f027ee94c98?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <TiltedCarousel images={images} pauseOnHover preset="dramatic" className="bg-cyan-200" />
        <div className="absolute inset-0 z-10 bg-black/50 shadow-[inset_0_0_100px_40px_rgba(0,0,0,0.6)]" />
      </div>

      <div className="relative z-20 flex h-full w-full items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-2xl rounded-xl bg-black/30 p-8 shadow-xl backdrop-blur-md md:p-12">
          <h1 className="font-bricolage-grotesque mb-4 text-4xl text-white drop-shadow-md md:text-5xl">
            Aether/<span className="text-gradient">ui</span>
          </h1>
          <p className="text-lg font-light text-white/90 md:text-xl">
            Stunning hero section powered by{" "}
            <span className="font-bricolage-grotesque font-medium text-white">TiltedCarousel</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TiltedCarouselDemo2;
