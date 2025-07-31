import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "50px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        overflow: "hidden",
        marginTop: "-7%",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <h3 className="text-2xl font-semibold text-black text-center">
          <Link href="https://vjcoverseas.com/migrate/germany/student-visa">
            <b>Germany Student Visa</b>
          </Link>{" "}
          -{" "}
          <Link href="https://vjcoverseas.com/">
            <span style={{ color: "#f97316" }}>
              <b>VJC Overseas</b>
            </span>
          </Link>
        </h3>
      </div>

      <p style={{ marginBottom: "20px" }}>
        Are you dreaming of studying in Germany, one of the most prestigious
        countries for higher education worldwide? With its world-class
        universities, innovative research, and diverse culture, Germany is an
        excellent destination for international students. Whether you are
        applying for free or paid education,{" "}
        <Link href="https://vjcoverseas.com/">
          <span style={{ color: "#f97316" }}>
            <b>VJC Overseas</b>
          </span>
        </Link>{" "}
        is here to guide you through the entire process, making your journey
        smooth and hassle-free.
      </p>

      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/gsvisaimage.jpg"
            alt="Image description"
            width={500}
            height={300}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
          />
        </div>

        <div className="px-4 lg:px-0">
          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
            <Link href="https://vjcoverseas.com/study-abroad/germany">
              <b>Study In Germany</b>
            </Link>
            : New Changes, Free and Paid Education Eligibility
          </h3>
          <p className="mb-4 text-sm sm:text-base">
            Germany has made a few changes to its study visa regulations for
            international students in 2024. These changes are designed to make
            the process more streamlined and accessible, ensuring that students
            can easily navigate the system and pursue their academic goals.
          </p>
        </div>
      </div>

      {/* remaining content continues unchanged... */}

      <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
        Why Choose{" "}
        <Link href="https://vjcoverseas.com/">
          <span style={{ color: "#f97316" }}>
            <b>VJC Overseas</b>
          </span>
        </Link>
        ?
      </h3>
      <p>
        At{" "}
        <Link href="https://vjcoverseas.com/">
          <span style={{ color: "#f97316" }}>
            <b>VJC Overseas</b>
          </span>
        </Link>
        , we specialize in helping Indian students navigate the entire process
        of studying in Germany. From selecting the right university to visa
        processing, and finding accommodation, we provide complete support and
        ensure you have the best experience. Our team is dedicated to making
        your dream of studying in Germany a reality.
      </p>
      <h4>
        For more information on the study visa process, eligibility, and support
        for studying in Germany, contact{" "}
        <Link href="https://vjcoverseas.com/">
          <span style={{ color: "#f97316" }}>
            <b>VJC Overseas</b>
          </span>
        </Link>{" "}
        today!
      </h4>

      <h3 className="text-black font-bold mb-4 text-lg sm:text-xl mt-10">
        What Happens After Your Studies?
      </h3>
      <p>
        After graduation, you may become eligible to apply for the{" "}
        <Link href="https://vjcoverseas.com/work-abroad/germany-work-permit/work-permit-visa">
          <b>Germany Skilled Worker Visa</b>
        </Link>
        , which allows you to remain in Germany and gain employment relevant to
        your qualifications. With enough work experience and integration, you
        can further progress and eventually apply for the{" "}
        <Link href="https://vjcoverseas.com/pr-visas/germany-blue-card">
          <b>Germany PR Visa</b>
        </Link>
        , allowing permanent residency and broader career mobility.
      </p>

      <h3 className="text-black font-bold mb-4 text-lg sm:text-xl mt-10">
        Why We're Among the{" "}
        <Link href="https://vjcoverseas.com/">
          <b>Best Visa Immigration Consultants</b>
        </Link>
      </h3>
      <p>
        Our team of experts at{" "}
        <Link href="https://vjcoverseas.com/">
          <span style={{ color: "#f97316" }}>
            <b>VJC Overseas</b>
          </span>
        </Link>{" "}
        offers unmatched support, detailed documentation assistance, and
        step-by-step mentorship, ensuring a successful and smooth transition for
        your education and career abroad.
      </p>
    </div>
  );
};

export default Content;