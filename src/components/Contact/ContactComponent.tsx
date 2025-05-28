import React from "react";
import TextField from "@mui/material/TextField";

export default function ContactComponent() {
  return (
    <div>
      <hr className="w-full border-t border-gray-300 my-8" />

      <div className="pl-20 pr-20 pt-8 pb-8 flex justify-between max-sm:flex-col">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-semibold text-[#438D98]">
            Talk to an <br /> Engineer
          </h1>
          <p className="text-xl font-[100] mt-8">
            Let us know where you are in your digital transformation journey and
            we'll help you reach your destination.
          </p>
        </div>
        <div className="lg:w-1/2 bg-sky-50 p-12 rounded-3xl max-sm:mt-12">
          <div className="flex justify-between mb-8">
            <div className="flex flex-col w-[48%]">
              <p className="mb-2 text-xl">First Name</p>
              <TextField placeholder="First Name" className="h-12" />
            </div>
            <div className="flex flex-col w-[48%]">
              <p className="mb-2 text-xl">Last Name</p>
              <TextField placeholder="Last Name " className="h-12" />
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div className="flex flex-col w-[48%]">
              <p className="mb-2 text-xl">Email adress</p>
              <TextField placeholder="Email adress" className="h-12" />
            </div>
            <div className="flex flex-col w-[48%]">
              <p className="mb-2 text-xl">Company</p>
              <TextField placeholder="Company" className="h-12" />
            </div>
          </div>
          <p className="mb-2 text-xl">Message</p>
          <TextField multiline rows={6} className="w-full" />

          <button className="bg-[#438D98] text-white mt-8 text-xl rounded-lg p-2 cursor-pointer hover:opacity-85 w-fit mx-auto">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}
