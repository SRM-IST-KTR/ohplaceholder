import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import { Tracks } from "@/components/Tracks";
import Sponsors from "@/components/Sponsors";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Schedule />
      <Tracks />
      <Sponsors />
      <Faq />
    </>
  );
}
