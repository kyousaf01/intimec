import React from "react";
import Footer from "@/components/Shared/Footer";
import IgaComponent from "@/components/IgaComponent/IgaComponent";
import Head from "next/head";
import HeaderHome from '@/components/Home/HeaderHome';

export default function iga() {
  return (
    <div>
      <Head>
        <title>Intimec | Identity Governance Administration (IGA)</title>
        <meta
          name="description"
          content="Intimec | Identity Governance Administration puts disciplined controls around who can access what, when, and why. We design policy‑driven processes and deploy leading IGA platforms to orchestrate the entire identity lifecycle—from onboarding to de‑provisioning—while maintaining audit‑ready records."
        />
      </Head>
      <HeaderHome />
      <IgaComponent />
      <Footer />
    </div>
  );
}
