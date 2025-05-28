import Blog from "@/components/Home/Blog";
import Companies from "@/components/Home/Companies";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeComponent from "@/components/Home/HomeComponent";
import HomeOffers from "@/components/Home/HomeOffers";
import Footer from "@/components/Shared/Footer";
import Head from "next/head";
import  HeaderHome  from '@/components/Home/HeaderHome';

export default function Home() {
  return (
    <>
      <Head>
        <title>Intimec | (IAM) consulting and system integration</title>
        <meta name="description" content="At Intimec, we specialize in Identity and Access Management (IAM) consulting and system integration, empowering businesses with secure, scalable, and compliance-driven identity solutions" />
      </Head>
      <div>
        <HeaderHome />
        <HomeComponent />
        <HomeAbout/>
        <HomeOffers/>
        <Companies/>
        <Blog/>
        <Footer />    
      </div>
    </>
  );
}
