import About from "@/components/About";
import Grid1 from "../public/grid1.png";
import Grid2 from "../public/grid2.png";


export default function Home() {
  return (
    <div className="h-screen">
      <div className="absolute inset-0 bg-custom-gradient -z-50"></div>
      <div className="absolute inset-0 bg-[url('../public/grid1.png')] bg-cover bg-center opacity-80"></div>
      <div className="absolute inset-0 bg-[url('../public/grid2.png')] bg-cover bg-center opacity-60 mix-blend-multiply"></div>
      <div className="relative">
        <About />
      </div>
    </div>
  );
}