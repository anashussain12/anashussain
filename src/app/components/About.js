'use client'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-center font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
            I'm a passionate web developer specializing in modern web technologies like React, Next.js, Tailwind CSS, and Node.js. 
            With a strong foundation in both frontend and backend, I love building sleek, high-performance applications that solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Work Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-gray-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800">NextJS Developer – Freelancer</h3>
              <span className="text-sm text-gray-500">October 2022 – Present</span>
              <p className="mt-2 text-gray-600">
                Built responsive and optimized apps using Next.js, Tailwind. Managed full project cycles.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Education</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-gray-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800">BS Computer Science – University Of Management And Technology</h3>
              <span className="text-sm text-gray-500">2024 - 2028</span>
              <p className="mt-2 text-gray-600">
                Currently pursuing a Bachelor's degree in Computer Science.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
