"use client"

import { Github, Linkedin, Mail} from "lucide-react"
import { motion } from "framer-motion"

function Contact() {
    return (
      <motion.section
        className="bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-red-500">Contactos</h2>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/Miguelp24"
            className="text-gray-400 hover:text-red-500 transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/miguel-pinto-594603258/"
            className="text-gray-400 hover:text-red-500 transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="mailto:mcpinto2004@gmail.com"
            className="text-gray-400 hover:text-red-500 transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-8 h-8" />
          </motion.a>
        </div>
      </motion.section>
    )
  }

  export default Contact;