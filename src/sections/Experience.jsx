const experiences = [
  {
    period: "April to till 2026",
    role: "Full Stack Developer",
    company: "Truvixoo",
    description:
      "During this time, I also developed real-world projects, applying my skills to build scalable and user-friendly applications while continuously improving through hands-on practice. I used AI-assisted development tools to enhance my coding efficiency and problem-solving capabilities, allowing me to deliver high-quality solutions and stay ahead in the rapidly evolving tech landscape.",
    technologies: ["Next.js", "React.js", "Node.js", "Express.js", "TypeORM", "Prisma", "MongoDB", "MySQL", "TypeScript", "Tailwind CSS","Vercel", 'Netlify', "Redux", "Socket.io", "REST APIs", "Git", "GitHub", "Github Actions", "Stripe", "Razorpay", "Postman"],
    current: false,
  },
  {
    period: "2025 - Present",
    role: "Freelance Full Stack Developer",
    company: "Upwork & Remote",
    description:
      "Successfully delivering high-quality web solutions to global clients, specializing in full-stack development. I focus on understanding client requirements, designing scalable architectures, and implementing clean, maintainable code using modern full-stack technologies and Next.js.",
    technologies: ["Next.js", "React.js", "Node.js", "Express.js", "TypeORM", "Prisma", "MongoDB", "MySQL", "TypeScript", "Tailwind CSS","Vercel", 'Netlify', "Redux", "Socket.io", "REST APIs", "Git", "GitHub", "Github Actions", "Stripe", "Razorpay", "Postman"],
    current: true,
  },
  {
    period: "January to May 2025",
    role: "MERN STACK Developer",
    company: "Royal Technosoft pvt ltd",
    description:
      "Where I gained in-depth practical knowledge, worked on real-time projects, and strengthened my problem-solving skills by addressing development challenges.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB","REST APIs"],
    current: false,
  },
  {
    period: "July to August 2024",
    role: "Frontend Intern",
    company: "Qspiders",
    description:
      "Where I gained foundational knowledge of Frontend and practical exposure to full-stack web development concepts.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
    current: true,
  },
  
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my growth as a developer, from a curious beginner to a motivated fresher building real-world projects and strengthening my full-stack development skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
