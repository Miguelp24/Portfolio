"use client"

import { motion } from "framer-motion"


function Skills() {
    const skills = ["JavaScript", "TypeScript", "CSS", "React", "Node.js", ".NET", "HTML", "C#", "C++", "C", "Python", "SQL", "Git"]

    return (
      <motion.section
        className="mb-12 bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-3xl font-mono font-bold mb-4 text-red-500">Competências</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>
    )
  }

  export default Skills;