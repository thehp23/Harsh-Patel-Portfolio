import { Code2, Lightbulb, Rocket, Users, Search, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
  {
    icon: Search,
    title: "Problem Solving",
    description:
      "Approaching complex challenges with analytical thinking and creative solutions.",
  },
  {
    icon: Zap,
    title: "Freelance Ready",
    description:
      "Available for freelance projects, delivering high-quality solutions on time.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate Full Stack Developer with a keen eye for detail and a relentless drive for innovation. Specializing in modern web technologies, I build scalable, user-centric applications that deliver exceptional experiences. On the frontend, I excel with React.js, Next.js, Redux, TypeScript, and Tailwind CSS to create responsive, accessible interfaces.
              </p>
              <p>
                My backend expertise includes Node.js, Express.js, TypeORM, Prisma, MongoDB, Mongoose, and MySQL, enabling me to develop robust, secure systems. I have hands-on experience with real-time applications using Socket.IO, crafting secure REST APIs, and integrating payment solutions like Stripe and Razorpay to power seamless transactions.
              </p>
              <p>
                Proficient with essential tools such as Git, GitHub, Git Actions, Postman, and AI-assisted development tools, I ensure efficient development workflows and reliable deployments to Vercel and Netlify. As a dedicated freelancer, I have collaborated with diverse clients on Upwork, delivering tailored solutions that align with their business goals. Embracing Agile Methodologies and System Design principles, I focus on writing clean, maintainable code that not only meets requirements but exceeds expectations, fostering collaboration and driving impactful results.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group glass p-6 rounded-2xl animate-fade-in border border-transparent hover:border-primary/50 hover:shadow-[0_0_25px_rgba(32,178,166,0.3)] transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
