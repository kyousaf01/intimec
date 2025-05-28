import ContactComponent from "@/components/Contact/ContactComponent";
import Footer from "@/components/Shared/Footer";
import Head from "next/head";
import Header from "@/components/Shared/Header";

export default function contact() {
  return (
    <>
      <Head>
        <title>Intimec | Contact us</title>
        <meta
          name="description"
          content="Intimec | Contact us"
        />
      </Head>
      <div>
        <Header/>
        <ContactComponent/>
      </div>
      <Footer />    
    </>
  );
}

