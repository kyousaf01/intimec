import AboutComponent from "@/components/About/AboutComponent";
import Footer from "@/components/Shared/Footer";
import Head from "next/head";
import  ContactComponent  from '@/components/Contact/ContactComponent';
import Header from "@/components/Shared/Header";

export default function about() {
  return (
    <>
      <Head>
        <title>Intimec | About</title>
        <meta name="description" content="At Intimec, we specialize in Identity and Access Management (IAM) consulting and system integration, empowering businesses with secure, scalable, and compliance-driven identity solutions. Backed by industry experts with extensive experience, we help organizations navigate the complexities of IAM strategy, technology implementation, and regulatory compliance to safeguard their digital ecosystem." />
      </Head>
      <div>
        <Header />
        <AboutComponent/>
        <ContactComponent/>
      </div>
      <Footer />    
    </>
  );
}
