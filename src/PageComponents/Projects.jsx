import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "3D Car Showcase",
      desc: "Interactive 3D car experience with scroll animations using React Three Fiber and GSAP.",
      tech: ["React", "Three.js", "GSAP"],
      img: "/images/project1.jpg",
      live: "https://armandev-five.vercel.app/",
    },
    {
      title: "Portfolio Website",
      desc: "Modern portfolio with animations, responsive UI, and smooth transitions.",
      tech: ["React", "Tailwind", "GSAP"],
      img: "/images/project2.jpg",
      live: "https://ask.great-site.net/?i=1",
    },
    {
      title: "Full Stack App",
      desc: "A full-stack web application with authentication and cloud storage.",
      tech: ["Node.js", "Express", "MongoDB"],
      img: "https://ppp-print.vercel.app/favicon.ico",
      live: "https://ppp-print.vercel.app/",
    },
  ];

  return (
    <div className="w-full h-full px-6 md:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold  text-center ">
          Projects
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="card bg-base-100/80 shadow-xl border border-base-300 hover:scale-[1.03] transition duration-300"
              style={{ padding: "1.5rem", margin: "1.5rem" }}
            >
              {/* IMAGE */}
              <figure>
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />
              </figure>

              {/* CONTENT */}
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>

                <p className="text-base-content/70 text-sm">{project.desc}</p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="badge badge-outline"
                      style={{ padding: "0.9rem" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="card-actions justify-between mt-4">
                  <a
                    href={project.live}
                    className="btn btn-error btn-sm"
                    style={{ padding: "5px" }}
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
