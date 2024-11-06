import "@/styles/globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import Scroll from "@/components/Shared/Scroll";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <div className="z-500">
        <Scroll />
      </div>
      <Footer />
    </>
  );
}
