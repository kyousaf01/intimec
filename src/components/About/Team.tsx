import Image from "next/image";
import React from "react";

export default function Team() {
  const teams = [
    {
      img: "/images/person.jpg",
      name: "Jhon Doe",
      job: "At vero eos et accusamus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/images/person.jpg",
      name: "Jhon Doe",
      job: "At vero eos et accusamus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/images/person.jpg",
      name: "Jhon Doe",
      job: "At vero eos et accusamus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="px-20 py-16">
      <h1 className="text-4xl font-bold text-center text-[#438D98] mb-12">
        Meet Our Team
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teams.map((member, index) => (
          <div
            key={index}
            className="bg-sky-50 rounded-2xl p-6  hover:shadow-xs transition duration-300"
          >
            <Image
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
              width={100}
              height={100}
              priority
            />
            <h2 className="text-4xl text-center text-[#438D98]">
              {member.name}
            </h2>
            <p className="text-center text-2xl text-gray-500 mt-4 mb-4">{member.job}</p>
            <p className="mt-4 text-gray-600 text-lg ">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
