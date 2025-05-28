import React from "react";
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';

export default function AboutComponent() {
  const values = [
    {
      name : "Expertise",
      description : "Our engineers are recognized industry veterans with 15+ years experience in the field",
      icon : <LibraryAddCheckOutlinedIcon sx={{ fontSize: 60, color: "#438D98" }}/>
    },
        {
      name : "Agility",
      description : "Our professional services and R&D teams work closely to ensure on-time project delivery",
      icon : <AdsClickOutlinedIcon sx={{ fontSize: 60, color: "#438D98" }}/>
    },
        {
      name : "Innovation",
      description : "Atricore's strong Open Source DNA drives our people to discover new ways of doing things",
      icon : <MemoryOutlinedIcon sx={{ fontSize: 60, color: "#438D98" }}/>
    }
  ]
  return (
    <>
      <div className="pl-20 pr-20 pt-8 pb-8 ">
        <h1 className="text-5xl font-semibold text-[#438D98]">
          An Identity-Enabled World
        </h1>
        <p className="text-xl font-[100] mt-8">
          We envision a world where the creation and consumption of identity and
          access management solutions is a dynamic and fully automated
          experience, so that businesses of all types and sizes can become more
          connected without sacrificing security.
        </p>
      </div>
      <div className="bg-sky-50 rounded-3xl">
        <div className="pl-20 pr-20 pt-8 pb-8 flex flex-col">
            <h1 className="text-4xl font-semibold text-[#438D98] text-center mb-12">
              Our core values
            </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6  hover:shadow-xs² transition duration-300">
              <div className="flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h2 className="text-2xl font-bold text-center text-[#438D98] mb-2">
                {value.name}
              </h2>
              <p className="text-center text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
