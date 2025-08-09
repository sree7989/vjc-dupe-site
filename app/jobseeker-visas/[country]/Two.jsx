"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Form from "./Form";
import Uae from "./Uae";
import Norway from "./Norway";
import Sweden from "./Sweden";
import Germany from "./Germany";
import Portugal from "./Portugal";
import Austria from "./Austria";
import Link from "next/link";

const visaData = [
  { name: "Germany Jobseeker Visa", path: "/jobseeker-visas/germany", image: "/germanyjobseeker.jpg" },
  { name: "Austria Jobseeker Visa", path: "/jobseeker-visas/austria", image: "/AustriaJobseekerVisa.jpg" },
  { name: "Portugal Jobseeker Visa", path: "/jobseeker-visas/portugal", image: "/pr.png" },
  { name: "Sweden Jobseeker Visa", path: "/jobseeker-visas/sweden", image: "/sweden.jpg" },
  { name: "Norway Jobseeker Visa", path: "/jobseeker-visas/norway", image: "/norway.webp" },
  { name: "UAE Jobseeker Visa", path: "/jobseeker-visas/uae", image: "/uae.webp" },
 
];
const defaultVisa = {
  name: "job seeker",
  path: "/jobseeker-visas",
  image: "/pr1.jpg",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    if (foundVisa) {
      setSelectedVisa(foundVisa);
    } else {
      setSelectedVisa(defaultVisa);
    }
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* ===== TOP SECTION ===== */}
      <div
        className="relative w-full min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedVisa.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 w-full h-full flex items-center justify-center px-6 lg:px-12 py-8">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
            <motion.div
              className="w-full lg:w-1/2 text-white text-center lg:text-left pt-24 sm:pt-32 lg:pt-0 lg:pl-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-semibold uppercase leading-tight">
                {selectedVisa.name}
              </h1>
              <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-xl">
                Start your migration journey with the right Permanent Residency Visa option. Choose your destination and let us guide you.
              </p>
            </motion.div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-12">
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="relative z-10 w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-16">
        <div className="flex justify-center md:justify-start mb-8 ml-0 md:ml-16">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
            <span className="block md:text-left text-center">Secure Dream Job,</span>
            <span className="block text-center">Through Seeker Visa</span>
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          {/* Visa Buttons Section */}
          <div className="w-full md:w-1/3">
    

{visaData.map((visa) => (
  <div key={visa.path} className="mb-4 w-full">
    <Link href={visa.path} className="w-full block">
      <div
        className={`w-full flex items-center justify-between text-lg font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg transform hover:scale-105 ${
          selectedVisa.path === visa.path
            ? "bg-orange-500 text-white border-orange-500 shadow-orange-400"
            : "bg-transparent text-black border border-orange-500 hover:bg-orange-500 hover:text-white"
        }`}
      >
        {visa.name}
        <ArrowRight className="w-6 h-6" />
      </div>
    </Link>
  </div>
))}

          </div>

          {/* Visa Info Content Box */}
          <div
            className="w-full md:w-2/3 p-4 md:p-6 rounded-xl border border-gray-300 shadow-md relative md:-mt-32 sm:-mt-20 mt-0"
            style={{ maxHeight: "700px", minHeight: "450px", overflowY: "auto" }}
          >
            {selectedVisa.path === defaultVisa.path ? (
              <div className="text-gray-700 text-lg leading-relaxed">
                Please select a visa type from the left to view more detailed information about that particular Permanent Residency visa.
              </div>
            ) : selectedVisa.path === "/jobseeker-visas/austria" ? (
              <Austria />
            ) : selectedVisa.path === "/jobseeker-visas/sweden" ? (
              <Sweden />
            ) : selectedVisa.path === "/jobseeker-visas/norway" ? (
              <Norway />
            ) : selectedVisa.path === "/jobseeker-visas/uae" ? (
              <Uae />
            ) : selectedVisa.path === "/jobseeker-visas/germany" ? (
              <Germany />
            ) : selectedVisa.path === "/jobseeker-visas/portugal" ? (
              <Portugal />
            ) : (
              <div className="text-gray-700 text-lg leading-relaxed">
                Information about <strong>{selectedVisa.name}</strong> will be displayed here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migrate;
