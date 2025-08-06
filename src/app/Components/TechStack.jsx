"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const icons = [
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  {
    src: "https://www.svgrepo.com/show/374118/tailwind.svg",
    alt: "Tailwind CSS",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    alt: "Next.js",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },

  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
    alt: "Firebase",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    alt: "Express",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    alt: "GitHub",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    alt: "Vscode",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    alt: "C++",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    alt: "Bootstrap",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col justify-center items-center text-center px-4 -mb-24">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        I'm a Full Stack Developer
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Building modern websites and applications with clean, scalable, and fast
        code.
      </motion.p>

      <motion.div
        className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-7 sm:gap-10 md:gap-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className=" w-16 h-16 md:w-20 md:h-20 flex justify-center items-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={80}
              height={80}
              className=" object-contain hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
