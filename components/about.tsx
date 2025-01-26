"use client"

import { motion } from "framer-motion"

function About() {
    return (
      <motion.section
        id="about"
        className="mb-12 bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-mono font-bold mb-4 text-red-500">Sobre mim</h2>
        <p className="text-gray-300">
          Estou no terceiro ano da licenciatura em Engenharia Informática e gosto muito da área onde estou integrado. 
          Embora ainda não tenha experiência 
          profissional, sou dedicado, tenho uma grande vontade de aprender e adapto-me 
          com facilidade a novas tecnologias. Procuro constantemente 
          melhorar e contribuir de forma positiva, enquanto adquiro experiência e desenvolvo as minhas competências.
  
        </p>
      </motion.section>
    )
  }

    export default About;