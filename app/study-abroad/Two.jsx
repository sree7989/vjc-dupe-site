"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Form from "./Form"; // Adjust path if needed

const visaData = [
  { name: "Study in USA", path: "/study-abroad/usa", image: "/usa1.jpg" },
  { name: "Study in Uk", path: "/study-abroad/uk", image: "/uk1.webp" },
  { name: "Study in Canada", path: "/study-abroad/canada", image: "/canada1.jpg" },
  { name: "Study in Australia", path: "/study-abroad/australia", image: "/study-in-australia-flag.jpg" },
  { name: "Study in Germany", path: "/study-abroad/germany", image: "/germany.jpg" },
  { name: "Study in Italy", path: "/study-abroad/italy", image: "/itlay.jpg" },
  { name: "Study in France", path: "/study-abroad/france", image: "/france.jpg" },
  { name: "Study in Singapore", path: "/study-abroad/singapore", image: "/singapore.jpg" },
  { name: "Study in Malaysia", path: "/study-abroad/malaysia", image: "/m.jpg" },
  { name: "Study in South Africa", path: "/study-abroad/southafrica", image: "/sa.webp" },
  { name: "Study in New Zealand", path: "/study-abroad/newzealand", image: "/nz.webp" },
  { name: "Study in Philippines", path: "/study-abroad/philippines", image: "/p.jpg" },
  { name: "Study in Poland", path: "/study-abroad/poland", image: "/pol.webp" },
  { name: "Study in Ireland", path: "/study-abroad/ireland", image: "/ir.jpg" },
  { name: "Study in Spain", path: "/study-abroad/spain", image: "/spa.avif" },
  { name: "Study in Netherlands", path: "/study-abroad/netherlands", image: "/net.webp" },
  { name: "Study in Switzerland", path: "/study-abroad/switzerland", image: "/sw.webp" },
  { name: "Study in Denmark", path: "/study-abroad/denmark", image: "/de.jpg" },
  { name: "Study in Dubai", path: "/study-abroad/dubai", image: "/du.webp" },
  { name: "Study in Luxembourg", path: "/study-abroad/luxembourg", image: "/lux.jpg" },
  { name: "Study in Hongkong", path: "/study-abroad/hongkong", image: "/study-in-hongkong-flag.jpg" },
  { name: "Study in UAE", path: "/study-abroad/uae", image: "/ua.jpg" },
  { name: "Study in Norway", path: "/study-abroad/norway", image: "/norwaystudy.avif" },
  { name: "Study in Sweden", path: "/study-abroad/sweden", image: "/swedenstudy.jpg" },
];

const defaultVisa = {
  name: "Study Abroad",
  path: "/study-abroad",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <div className="relative pt-10 w-full min-h-screen">
      {/* Background Animated GIF with Next.js Image */}
     <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/jobseeker.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
</div>

        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      

      {/* Page Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
          {/* Swiper Section */}
          <div className="w-full lg:w-[55%] mt-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
              Study Abroad
            </h2>
            <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop={true}
  spaceBetween={0}
  slidesPerView={1.6}
  centeredSlides={true}
  grabCursor={true}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
>
  {visaData.map((visa, index) => {
    const isActive = index === activeIndex;
    return (
      <SwiperSlide key={visa.path}>
        <Link href={visa.path}>
          <div
            className={`relative w-full h-[420px] md:h-[440px] lg:h-[460px] transform transition-all duration-700 overflow-hidden shadow-xl border-4 cursor-pointer ${
              isActive ? "scale-105 opacity-100 z-30" : "scale-90 opacity-80 z-10"
            }`}
          >
            <Image
              src={visa.image}
              alt={visa.name}
              fill
              className="object-cover object-center"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white font-bold text-2xl sm:text-3xl text-center p-6">
              {visa.name}
            </div>
          </div>
        </Link>
      </SwiperSlide>
    );
  })}
</Swiper>

          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[40%] -mt-6 lg:mt-0">
            <Form />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gradient-to-r from-white/50 to-white/50 p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-black mb-4">
            Study Abroad with <span className="text-orange-500">VJC Overseas:</span> Your Global Education Partner
          </h3>
          <p className="text-black text-lg max-w-4xl mx-auto mb-4">
            At VJC Overseas, we believe that education is not just about textbooks — it's about experiencing the world, broadening your horizons, and preparing for a global future.
          </p>
          <p className="text-black text-lg max-w-4xl mx-auto mb-4">
            Our Study Abroad services are designed to guide students through every step of their international education journey, ensuring a seamless and enriching experience.
          </p>
          <p className="text-black text-lg max-w-4xl mx-auto mb-6">
            We collaborate with top universities and educational institutions across the world, offering you access to a wide range of undergraduate, postgraduate, and diploma programs in:
          </p>

          {/* 20 Countries List */}
          <div className="grid grid-cols-2 bg-white sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-6 text-lg text-left list-disc list-inside">
            {visaData.map((visa) => (
              <li key={visa.path}>
                <Link
                  href={visa.path}
                  className="text-blue-500 hover:underline hover:text-black transition duration-300"
                >
                  {visa.name.replace("Study in ", "")}
                </Link>
              </li>
            ))}
          </div>

          <p className="text-black text-lg max-w-4xl mx-auto mb-6">
            Our team of experienced counsellors provides personalized guidance throughout the process. From choosing the right course and university to visa
            applications and pre-departure orientations, we are with you every step of the way. Our goal is to make your transition to studying abroad as smooth as possible, so you can focus on your studies and make the most of your time overseas.
          </p>
          <p className="text-black text-lg max-w-4xl mx-auto mb-6">
            Beyond academics, we also understand the importance of cultural integration. We help you connect with student communities, providing support 
            with accommodation, travel, and local resources, ensuring you feel at home no matter where you go.
          </p>
          <p className="text-black text-lg max-w-4xl mx-auto mb-6">
            Studying abroad is an investment in your future, and with VJC Overseas, you’re not just applying for a course—you’re embarking on a life-changing adventure. Let us help you take the first step 
            towards a world-class education and an exciting new chapter in your life.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Start your global education journey with VJC Overseas today!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Migrate;
