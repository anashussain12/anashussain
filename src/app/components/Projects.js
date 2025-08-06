'use client'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'MR.BARBER UNISEX SALON',
    role: 'Full Stack Developer',
    description: 'Developed a Full Stack Barber website with admin dashboard which handles orders. ',
    tech: ['Next.js', 'Authentication', 'Firebase', 'Admin Dashboard'],
    link: 'https://www.mistrbarber.com'
  },
  {
    title: 'Aitoolcity',
    role: 'Full Stack Developer',
    description: 'Developed a categorized directory of AI tools using Next.js, Tailwind CSS, and Firebase. Includes search, filtering features.',
    tech: ['Next.js', 'Firebase', 'Admin Dashboard'],
    link: 'https://aitoolcity.com'
  },
  {
    title: 'Videograpger Portfolio',
    role: 'Front-End Developer',
    description: 'Designed and developed a modern portfolio for a professional photographer client, featuring image galleries and smooth transitions.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://asfarkhan.vercel.app/'
  },
]

const ProfessionalProjects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Professional Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-1 italic">{project.role}</p>
                <p className="text-gray-700 text-sm mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-right">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:underline inline-flex items-center gap-1">
                  View Project <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfessionalProjects
