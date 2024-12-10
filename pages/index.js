import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import About from "@/components/About";
import Footer from "@/components/Shared/Footer/Footer";
import Grid1 from "../public/grid1.png";
import Grid2 from "../public/grid2.png";


export default function Home() {
  return (
    <>
      <Hero />
      <Schedule />
      <About />
      <Sponsors />
    </>
  );
}
