import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Places } from "@/components/site/Places";
import { Culture } from "@/components/site/Culture";
import { Food } from "@/components/site/Food";
import { Gallery } from "@/components/site/Gallery";
import { MapSection } from "@/components/site/MapSection";
import { Visit } from "@/components/site/Visit";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";
import { Loader } from "@/components/site/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore Panauti — Where History Still Lives" },
      {
        name: "description",
        content:
          "A cinematic journey into Panauti, Nepal — ancient Newari town of pagoda temples, sacred rivers, festivals, and living heritage.",
      },
      { property: "og:title", content: "Explore Panauti — Where History Still Lives" },
      {
        property: "og:description",
        content:
          "Discover Panauti, Nepal: 1000-year-old Newari heritage, Indreshwar Mahadev temple, Makar Mela, traditional food, and travel guide.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Places />
      <Culture />
      <Food />
      <Gallery />
      <MapSection />
      <Visit />
      <Testimonials />
      <Footer />
    </main>
  );
}
