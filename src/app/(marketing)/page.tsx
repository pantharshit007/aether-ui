import Hero from "@/components/landing/Hero";
import LandingHeader from "@/components/landing/header";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="relative">
      <LandingHeader />
      <Hero />
      <Footer />
    </div>
  );
}
