import React, { useEffect, useState } from "react";

export default function HomeOffers() {
  const offers = [
    {
      name: "Identity Governance Administration (IGA)",
      description: `Identity governance is crucial for managing user access rights and ensuring security. We provide expert advisory services to design and implement effective identity governance frameworks.`,
    },
    {
      name: "Access Management (AM)",
      description: `AM ensures that users, applications, and devices have the right access at the right time, maintaining security and user experience. Our AM services help organizations implement robust authentication and authorization mechanisms.`,
    },
    {
      name: "Privileged Access Management (PAM)",
      description: `Privileged accounts pose significant security risks if not managed properly. Our PAM advisory services help protect critical assets by implementing robust privileged access controls.`,
    },
    {
      name: "IAM Strategy & Roadmap Development",
      description: `A well-defined IAM strategy is crucial for organizations seeking to strengthen security, enhance operational efficiency, and meet compliance mandates. Our approach ensures a structured transformation of your IAM landscape with a focus on long-term sustainability.`,
    },
    {
      name: "Regulatory Compliance Advisory",
      description: `Ensuring regulatory compliance is a top priority for organizations across industries. Our advisory services help organizations achieve and maintain compliance with relevant regulations and industry standards.`,
    },
    {
      name: "IAM Technology Evaluation",
      description: `Selecting the right IAM solution is crucial for successful implementation. We provide depth evaluations of leading IAM solutions to help organizations make informed decisions.`,
    },

    {
      name: "Cloud IAM Strategy",
      description: `As organizations migrate to the cloud, managing identities and access in cloud environments becomes critical. We offer strategic guidance to optimize cloud identity management.`,
    },
  ];

  const [index, setIndex] = useState(0);
  const [flipKey, setFlipKey] = useState(0); // To restart animation

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
      setFlipKey((prev) => prev + 1); // retriggers animation
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex lg:justify-around mt-40">
      <div>
        <h1
          data-aos="fade-down-left"
          data-aos-duration="500"
          className="text-[70px] lg:w-1/2 font-semibold text-[#438D98]  mt-40 mb-2"
        >
          Our
        </h1>
        <h1
          data-aos="fade-down-left"
          data-aos-duration="500"
          className="text-[70px] lg:w-1/2 font-semibold text-[#438D98]"
        >
          Services
        </h1>
              

        <h1
          key={flipKey}
          className="text-[45px] lg:w-[400px] font-semibold text-[#438D98] flip-up"
        >
          {offers[index].name}
        </h1>
        
      </div>
      <div className="flex flex-col lg:w-1/2">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`w-full ${
              index === offers.length - 1 ? "lg:col-start-2" : ""
            }`}
          >
            <div className="h-full flex flex-col justify-between p-8 rounded-3xl">
              <div>
                <h3 className="text-md text-[#438D98]">{offer.name}</h3>
                <p className="whitespace-pre-line text-sm mt-4 text-gray-700">
                  {offer.description}
                </p>
              </div>
              <a className="text-[#438D98]">Learn more →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
