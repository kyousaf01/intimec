import Image from "next/image";
import React from "react";

export default function IgaComponent() {
  const cards = [
    {
      title: "Value Proposition",
      content:
        "Automated policy enforcement and data‑driven insights shrink review cycles by up to 80 %, reduce insider risk, and deliver provable compliance with regulations such as SOX, GDPR, and ISO 27001.",
    },
    {
      title: "Practical Use Case",
      content:
        "A multinational manufacturer reduced quarterly access review effort from 3 weeks to 4 days by implementing automated recertification and fine‑grained segregation‑of‑duty (SoD) policies, enabling internal audit to validate controls in hours instead of days.",
    },
    {
      title: "Why Choose Us",
      content: [
        "Vendor‑agnostic architects with 100+ successful IGA rollouts",
        "Proprietary SoD rule libraries tailored to 12+ industries",
        "Accelerated deployment blueprints that cut time‑to‑value by 40 %",
      ],
    },
  ];

  return (
    <div>
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/backgroundIga.png"
          alt="IGA"
          fill
          className="object-cover -mt-44" // or object-contain if you don't want any cropping
          priority
        />
      </div>
      <h1
        className="text-5xl text-[#438D98] -mt-24 font-bold text-center max-sm:text-3xl"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        Identity Governance Administration <br /> (IGA)
      </h1>

      <h1 className="text-3xl text-[#438D98] mt-12 font-semibold text-center">
        Service Overview
      </h1>
      <div className="text-xl text-center max-md:p-8 mt-8 flex items-center justify-center">
        <p className="lg:w-[60%]">
          Identity Governance Administration puts disciplined controls around
          who can access what, when, and why. We design policy‑driven processes
          and deploy leading IGA platforms to orchestrate the entire identity
          lifecycle—from onboarding to de‑provisioning—while maintaining
          audit‑ready records.
        </p>
      </div>

      <h1 className="text-3xl text-[#438D98] ml-18 2xl:ml-16 mt-12 font-semibold flex items-center justify-center lg:w-[60%]" >
        Key Challenges Addressed
      </h1>

      <div className="text-xl mt-8 flex items-center justify-center ">
        <ul className="list-disc text-left pl-6 lg:w-[60%]">
          <li>Access creep and entitlement sprawl</li>
          <li>Orphaned or duplicate accounts after role or HR changes</li>
          <li>Heavy, spreadsheet‑driven access certification cycles</li>
          <li>
            Limited visibility into high‑risk or toxic permission combinations
          </li>
          <li>Strained audit resources and compliance gaps</li>
        </ul>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-sky-50 p-6 rounded-2xl hover:shadow-xs"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-semibold text-[#438D98] text-center mb-4">
              {card.title}
            </h2>
            {Array.isArray(card.content) ? (
              <ul className="list-disc pl-5 text-left space-y-2">
                {card.content.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-base text-center text-gray-700">
                {card.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
