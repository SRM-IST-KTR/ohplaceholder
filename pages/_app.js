import "@/styles/globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import Scroll from "@/components/Shared/Scroll";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-custom-gradient relative">
      <div className="fixed inset-0 w-full h-full bg-[url('../public/grid1.png')] bg-cover bg-no-repeat bg-center opacity-80"></div>
      <div className="fixed inset-0 w-full h-full bg-[url('../public/grid2.png')] bg-cover bg-no-repeat bg-center opacity-60 mix-blend-multiply"></div>
      <div className="relative z-10">
        <Navbar />
        <Component {...pageProps} />
        <Scroll />
        <Footer />
      </div>
    </div>
  );
}