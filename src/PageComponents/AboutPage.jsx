import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 md:px-16">
      <div
        className="max-w-6xl w-full grid md:grid-cols-2 gap-6 "
        style={{
          margin: "1.5rem",
        }}
      >
        {/* LEFT CARD */}
        <div className="card bg-base-100/80 shadow-xl  border border-base-300">
          <div className="card-body card-manual">
            <h2 className="card-title text-3xl md:text-4xl">About Me</h2>

            <p className="text-base-content/70 text-base md:text-lg leading-relaxed">
              I'm a creative frontend developer focused on building immersive 3D
              web experiences using React, Three.js, and GSAP.
            </p>

            <p className="text-base-content/60">
              I care about performance, smooth animations, and clean UI that
              feels premium.
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="card bg-base-100/80 shadow-xl border border-base-300">
          <div className="card-body card-manual">
            <h2 className="card-title text-2xl md:text-3xl">Skills</h2>

            <div className="flex flex-wrap gap-2 mt-2 ">
              <span
                className="badge badge-accent "
                style={{ padding: "0.5rem" }}
              >
                React
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                Three.js
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                GSAP
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                Tailwind
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                JavaScript
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                Nodejs
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                Express
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                Cloudinary
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                Python
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                C
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                C++
              </span>
              <span
                className="badge badge-outline"
                style={{ padding: "0.5rem" }}
              >
                Java
              </span>
            </div>
          </div>
        </div>

        <div className="card bg-base-100/80 shadow-xl border border-base-300">
          <div className="card-body card-manual">
            <h2 className="card-title text-2xl md:text-3xl">My Approach</h2>

            <p className="text-base-content/70 text-base md:text-lg leading-relaxed">
              I focus on creating smooth, interactive, and visually engaging web
              experiences that feel modern and responsive. My goal is not just
              to build websites, but to craft digital products that users enjoy
              interacting with.
            </p>

            <p className="text-base-content/60">
              I pay close attention to performance, animations, and user
              experience, ensuring every project feels fast, polished, and
              intuitive across all devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
