import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black text-white mt-12">
      <div className="pr-12 pl-12 pt-4 pb-4">
        <Image
          src="/images/logo.png"
          alt="Intimec team working on technology solutions"
          width={150}
          height={150}
          priority
        />
        <hr className="border-t border-gray-300 mt-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pt-6 pb-6">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">About</h1>
            <p className="text-lg">
Intimec specializes in Identity and Access Management (IAM), empowering businesses with secure, seamless, and scalable solutions.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">Services</h1>
            <p className="text-lg">IGA</p>
            <p className="text-lg">AM</p>
            <p className="text-lg">PAM</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">Keep in touch</h1>
            <Link href="" className="text-lg mb-4">
              Book a call
            </Link>
            <Link href="/contact" className="text-lg">
              
            </Link>
            <a href="tel:+60374936790" className="hover:underline">
              +60 3 7493 6790
            </a>
            <a href="mailto:info@intimec.com" className="hover:underline">
              info@intimec.com
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">About</h1>
            <Link href="/about" className="text-lg">
              Who we are
            </Link>
            <Link href="/casestudies" className="text-lg">
              Case studies
            </Link>
          </div>
        </div>
        <p className="text-lg mt-4">
          intimec.com&copy;{new Date().getFullYear()} | All rights reserved |
        </p>
      </div>
    </div>
  );
}
