import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";

const projects = [
  {
    title: "Uber Clone",
    description:
      "A full-featured ride-booking platform enabling real-time tracking, seamless user experience, and efficient trip management.",
    images: [
      "/projects/ubpage-1.png",
      "/projects/ubpage-2.png",
      "/projects/ubpage-3.png",
      "/projects/ubpage-4.png",
      "/projects/ubpage-5.png",
      "/projects/ubpage-6.png",
      "/projects/ubpage-7.png",
      "/projects/ubpage-8.png",
      "/projects/ubpage-9.png",
      "/projects/ubpage-10.png",
      "/projects/ubpage-11.png"
    ],
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Socket.IO",
      "REST APIs",
      "JWT Authentication",
      "Git",
      "Postman",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Appraisal Tracker",
    description:
      "A comprehensive employee appraisal tracking system with performance evaluation, progress monitoring, and insightful reporting dashboard.",
    images: [
      "/projects/atpage-1.png",
      "/projects/atpage-2.png",
      "/projects/atpage-3.png",
      "/projects/atpage-4.png",
      "/projects/atpage-5.png",
      "/projects/atpage-6.png",
      "/projects/atpage-7.png",
      "/projects/atpage-8.png",
      "/projects/atpage-9.png",
      "/projects/atpage-10.png",
      "/projects/atpage-11.png"
    ],
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Postman",
      "REST APIs",
      "CSS",
    ],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  const [indexes, setIndexes] = useState(projects.map(() => 0));

  const prevSlide = (projectIndex) => {
    setIndexes((prev) =>
      prev.map((val, i) =>
        i === projectIndex
          ? val === 0
            ? projects[i].images.length - 1
            : val - 1
          : val
      )
    );
  };

  const nextSlide = (projectIndex) => {
    setIndexes((prev) =>
      prev.map((val, i) =>
        i === projectIndex
          ? val === projects[i].images.length - 1
            ? 0
            : val + 1
          : val
      )
    );
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Slider */}
              <div className="relative overflow-hidden aspect-video">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={project.title}
                    className={`absolute w-full h-full object-cover transition-all duration-500 ${
                      i === indexes[idx] ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Overlay FIXED */}
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60 pointer-events-none" />

                {/* Left Button FIXED */}
                <button
                  onClick={() => prevSlide(idx)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-primary/20 z-20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Button FIXED */}
                <button
                  onClick={() => nextSlide(idx)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-primary/20 z-20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Hover Links FIXED */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};