import React from "react";

const LandingPage = () => {
  return (
    <div
      className="
        absolute z-20
        top-[18%] left-1/2 -translate-x-1/2
        w-[90%] max-w-xl
        md:left-[8%] md:translate-x-0
        backdrop-blur-md bg-base-100/10
        p-5 md:p-7
        rounded-2xl shadow-lg
      "
      style={{ padding: "1.5rem" }}
    >
      <h1
        className="
          text-[clamp(2rem,8vw,6rem)]
          font-bold leading-[1.1] tracking-tight text-black
        "
      >
        Hey, I am Arman
        <br />
        <span className="text-gray-600">We Make</span> <br />
        <span className="text-red-600 font-extrabold">Things Like This</span>
      </h1>

      {/* ✅ SUBTEXT (now inside card) */}
      <p className="mt-4 text-base md:text-lg text-gray-600 max-w-md">
        I design and build immersive 3D web experiences using React, Three.js,
        and GSAP.
      </p>
    </div>
  );
};

export default LandingPage;
