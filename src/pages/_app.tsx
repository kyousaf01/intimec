import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HeaderHome from "@/components/Home/HeaderHome";
import "animate.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 800, // animation duration in ms
      offset: 120,
    });
  }, []);
  return (
    <>
    
      <Component {...pageProps} />
    </>
  );
}
