import Hero from "@/components/landing/Hero";
import LandingHeader from "@/components/landing/header";
import Footer from "@/components/landing/Footer";
import { metaConfig, siteConfig } from "@/config/site";

export const metadata = metaConfig({
  title: "Aether/UI - Beautifully designed, animated components for your next product.",
  description:
    "Aether/ui is a collection of beautiful, animated components for your next product, built with Motion and Tailwind CSS.",
  isRoot: true,
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: {
    "@type": "Person",
    name: "pantharhsit007",
    url: "https://hrshit.in",
  },
};

export default function Home() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingHeader />
      <Hero />
      <Footer />
    </div>
  );
}
