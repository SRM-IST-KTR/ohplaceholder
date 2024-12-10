import "@/styles/globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import Scroll from "@/components/Shared/Scroll";

export default function App({ Component, pageProps }) {
  return (
    <div className=" bg-custom-gradient">
      {/* <div className="absolute inset-0 bg-[url('../public/grid1.png')] bg-cover bg-center opacity-80"></div>
      <div className="absolute inset-0 bg-[url('../public/grid2.png')] bg-cover bg-center opacity-60 mix-blend-multiply"></div> */}
      <div className="z-500">
        <Navbar />
      </div>
      <Component {...pageProps} />
      <div className="z-500">
        <Scroll />
      </div>
      <Footer />
    </div>
  );
}
