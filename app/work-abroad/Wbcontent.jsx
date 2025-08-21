"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const points = [
  {title: "1. Tailored Career Pathways",
description: (
  <>
    We recognize that every candidate has unique strengths and goals. As one of the{" "}
    <a
      href="https://www.vjcoverseas.com"
      className="text-orange-500 font-semibold"
    >
      Best Visa Immigration Consultants
    </a>
    , we take time to evaluate your profile, qualifications, and aspirations before recommending the right career pathway. From engineering and IT roles to healthcare and skilled trades, our guidance ensures that your move abroad is meaningful and sustainable. Our team provides detailed advice on resume preparation, interview techniques, and matching your skillset with international opportunities. With personalized support, we help you make informed decisions and embark on a successful global career journey.
  </>
),
showImage: true,

  },
  {
    title: "2. Global Network of Employers",
    description:
      "Our global employer network is one of our greatest strengths. With opportunities spanning Europe, Australia, Canada, and the Middle East, we ensure access to premium job markets. If you are seeking a Germany Work Permit, for instance, we help you understand eligibility, documentation, and connect you with top employers hiring skilled workers in Germany.",
    showImage: false,
  },
  {
    title: "3. Hassle-Free Immigration and Relocation Support",
    description:
      "Relocating abroad is more than securing a job – it involves visas, paperwork, and a smooth transition. Our experts provide comprehensive support, including guidance on visa categories like the UK Skilled Worker Visa, relocation planning, and pre-departure counseling, so you are fully prepared before your journey.",
    showImage: false,
  },
  {
    title: "4. Long-Term Success",
    description:
      "At VJC Overseas, we are committed to your success beyond just job placement. Our team continues to support you even after you move abroad, ensuring that you adapt comfortably to your workplace, understand cultural nuances, and build a successful career in your chosen destination.",
    showImage: false,
  },
];

const WbContent = () => {
  return (
    <div className="w-full bg-white py-12 px-6 lg:px-20">
      {/* OUTSIDE Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-900"
      >
        Work Abroad with <span className="text-orange-500">VJC Overseas</span>
        <br />
        <span className="text-xl font-medium">Unlock Global Career Opportunities</span>
      </motion.h3>

      {/* Box */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="relative z-10 max-w-7xl mx-auto text-gray-900 border-4 border-orange-500 rounded-3xl p-8"
      >
        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-base lg:text-lg mb-6 text-center"
        >
          Explore Opportunities to Work Abroad. Discover exciting job opportunities worldwide and kickstart your international career with trusted guidance. Our team at{" "}
          <a
            href="https://www.vjcoverseas.com"
            className="text-orange-500 font-semibold"
          >
            VJC Overseas
          </a>{" "}
          is dedicated to helping skilled professionals like you navigate every step of the process – from identifying the right job, applying for a visa, to settling comfortably in your new home country.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-base lg:text-lg mb-6 text-center"
        >
          Many ambitious professionals aspire to{" "}
          <a
            href="https://www.vjcoverseas.com/work-abroad"
            className="text-orange-500 font-semibold"
          >
            Work Abroad Opportunities
          </a>{" "}
          that allow them to grow in their careers, gain international exposure, and experience new lifestyles. Whether you are looking to improve your skills, enjoy better financial prospects, or embrace cultural diversity, we are here to connect you with the right employers and destinations.
        </motion.p>

        {/* Why Choose Title */}
        <motion.h4
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          Why Choose <span className="text-orange-500">VJC Overseas</span>?
        </motion.h4>

        {/* Points */}
        <div className="space-y-12">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col lg:flex-row items-start gap-6"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div>
                    <h5 className="text-lg font-semibold">{point.title}</h5>
                    <p className="text-gray-700 mt-2">{point.description}</p>
                  </div>
                </div>

                {point.showImage && (
                  <div className="w-full lg:flex-1">
                    <Image
                      src="/Work-Abroad-for-a-Year.png"
                      alt="Work Abroad"
                      width={400}
                      height={300}
                      className="w-full h-auto max-w-md mx-auto rounded object-cover"
                      unoptimized
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Final Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-12 text-center text-base lg:text-lg"
        >
          Start your global career journey today with{" "}
          <a
            href="https://www.vjcoverseas.com/work-abroad/germany-work-permit"
            className="text-orange-500 font-semibold"
          >
            Germany Work Permit
          </a>
          , explore endless opportunities, enhance your professional skills, and embrace new horizons with us. Our experts will also guide you through the{" "}
          <a
            href="https://www.vjcoverseas.com/work-abroad/united-kingdom-work-permit/uk-skilled-worker-visa"
            className="text-orange-500 font-semibold"
          >
            UK Skilled Worker Visa
          </a>{" "}
          process to ensure a smooth and hassle-free transition.
        </motion.p>

        {/* Bold Keywords Anywhere on the Page (without links) */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 1 }}
          className="mt-6 text-center text-base lg:text-lg"
        >
          
        </motion.p>
      </motion.div>
    </div>
  );
};

export default WbContent;
