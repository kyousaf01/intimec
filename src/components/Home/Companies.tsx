import Image from "next/image";
import React from "react";

export default function Companies() {
  const companies = [{ imgSrc: "/images/microsoft.png" }];

  return (
    <div>
      <h1
        data-aos="fade-up"
        data-aos-duration="500"
        className="text-3xl text-center text-[70px] font-semibold text-[#438D98]  mt-40 mb-20"
      >
        Our Partners
      </h1>
      <div className="flex m-auto lg:w-[35%] md:w-80 pl-20 pr-20">
        {companies?.map((company, index) => (
          <Image
            key={index}
            src={company.imgSrc}
            alt={`Company logo ${index}`}
            width={140}
            height={140}
            priority
            className="w-full "
          />
        ))}
      </div>
    </div>
  );
}
