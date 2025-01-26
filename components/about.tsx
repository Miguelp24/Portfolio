"use client"

import { motion } from "framer-motion"

function About() {
    return (
      <motion.section
        className="mb-12 bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-red-500">Sobre mim</h2>
        <p className="text-gray-300">
          Estou no terceiro ano da licenciatura em Engenharia Informática e
          gosto muito da área onde estou integrado, apesar de ainda não ter
          nenhuma experiência profissional tenho vontade de aprender e a
          capacidade de adaptar rapidamente a novas tecnologias.
  
        </p>
      </motion.section>
    )
  }

    export default About;