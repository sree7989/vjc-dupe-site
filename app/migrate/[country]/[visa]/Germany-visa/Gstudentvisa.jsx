import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        overflow: "hidden",
        marginTop: "-7%",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <h3 className="text-2xl font-semibold text-black text-center">
          <a
            href="https://vjcoverseas.com/migrate/germany/student-visa"
            style={{ textDecoration: "none", color: "black" }}
          >
            <strong>Germany Student Visa</strong>
          </a>{" "}
          -{" "}
          <span style={{ color: "orange" }}>
            <a href="https://vjcoverseas.com/" style={{ color: "orange" }}>
              VJC Overseas
            </a>
          </span>
        </h3>
      </div>

      <p style={{ marginBottom: "20px" }}>
        Are you dreaming of studying in{" "}
        <a href="https://vjcoverseas.com/study-abroad/germany">
          <strong>Study in Germany</strong>
        </a>
        , one of the most prestigious countries for higher education worldwide?
        With its world-class universities, innovative research, and diverse
        culture, Germany is an excellent destination for international students.
        Whether you are applying for free or paid education,{" "}
        <span style={{ color: "orange" }}>
          <a href="https://vjcoverseas.com/" style={{ color: "orange" }}>
            VJC Overseas
          </a>
        </span>{" "}
        is here to guide you through the entire process, making your journey
        smooth and hassle-free.
      </p>

      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
        {/* Image Section */}
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/gsvisaimage.jpg"
            alt="Image description"
            width={500}
            height={300}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
            priority
            unoptimized
          />
        </div>

        {/* Text Section */}
        <div className="px-4 lg:px-0">
          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
            <strong>Study in Germany</strong>: New Changes, Free and Paid
            Education Eligibility
          </h3>
          <p className="mb-4 text-sm sm:text-base">
            Germany has made a few changes to its study visa regulations for
            international students in 2024. These changes are designed to make
            the process more streamlined and accessible, ensuring that students
            can easily navigate the system and pursue their academic goals.
          </p>
        </div>
      </div>

      <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
        Why Choose{" "}
        <span style={{ color: "orange" }}>
          <a href="https://vjcoverseas.com/" style={{ color: "orange" }}>
            VJC Overseas
          </a>
        </span>
        ?
      </h3>
      <p>
        At{" "}
        <span style={{ color: "orange" }}>
          <a href="https://vjcoverseas.com/" style={{ color: "orange" }}>
            VJC Overseas
          </a>
        </span>
        , we specialize in helping Indian students navigate the entire process
        of studying in Germany. From selecting the right university to visa
        processing, and finding accommodation, we provide complete support and
        ensure you have the best experience. Our team is dedicated to making
        your dream of studying in Germany a reality.
      </p>

      <h4>
        For more information on the study visa process, eligibility, and support
        for studying in Germany, contact{" "}
        <span style={{ color: "orange" }}>
          <a href="https://vjcoverseas.com/" style={{ color: "orange" }}>
            VJC Overseas
          </a>
        </span>{" "}
        today!
      </h4>

      {/* Inserted keyword: Germany Skilled Worker Visa */}
      <p style={{ marginTop: "20px" }}>
        Planning to work in Germany after graduation? Explore your options
        through the{" "}
        <a href="https://vjcoverseas.com/work-abroad/germany-work-permit/work-permit-visa">
          <strong>Germany Skilled Worker Visa</strong>
        </a>{" "}
        to establish your professional career abroad.
      </p>

      {/* Inserted keyword: Germany PR Visa */}
      <p style={{ marginTop: "20px" }}>
        Many international graduates aim to settle in Germany permanently. Learn
        how the <strong>Germany PR Visa</strong> can help you achieve that.
      </p>

      {/* Inserted keyword: Best Visa Immigration Consultants */}
      <p style={{ marginTop: "20px" }}>
        Get the right guidance from the{" "}
        <a href="https://vjcoverseas.com/">
          <strong>Best Visa Immigration Consultants</strong>
        </a>{" "}
        and make your overseas journey stress-free and successful.
      </p>
    </div>
  );
};

export default Content;
