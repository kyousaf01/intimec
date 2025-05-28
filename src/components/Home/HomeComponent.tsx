import Link from "next/link";
import React from "react";

export default function HomeComponent() {
  return (
    <div className="relative h-screen overflow-hidden max-md:p-4 -mt-34">
      {/* Background Video */}
      <video
        src="/images/intimtec-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        Your browser does not support the video tag.
      </video>

      {/* Content over video */}
      <div className="relative z-10 flex flex-col lg:ml-[5%] 2xl:mt-[10%] xl:mt-[5%] lg::mt-[5%] justify-center h-full text-white ">
        <h1 className="text-[40px] max-md:text-[30px] tracking-tight font-[200] animate__animated animate__fadeIn animate__slow">
          Your trusted IAM
          Security Partner
        </h1>
        <p className="text-lg">
          Bringing Clarity to Identity Complexity
        </p>
        <button className="bg-white text-black p-2 pl-4 pr-4 border text-md w-fit mt-4 rounded-lg">
          <Link href="/contact">
          Contact us
          </Link>
        </button>
      </div>

      {/* Optional: Add an overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[5]" />
    </div>
  );
}
