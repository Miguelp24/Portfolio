"use client"

import { motion } from "framer-motion"

function Experience() {
    const experiences = [
        {
            title: "Licenciatura em Engenharia Informática",
            company: "UTAD",
            period: "2022 - Presente",
            description: "",
        },
        {
            title: "Colaborador do Nucleo de estudantes de Engenharia Informática",
            company: "NEEI",
            period: "2022 - Presente",
            description: "Departamento pedagógico",
        },
        {
            title: "Colaborador da Associação Académica Trás-os-Montes e Alto Douro",
            company: "AAUTAD",
            period: "2023 - Presente",
            description: "Departamento de apoio as tecnologias",
        },
      
    ]
  
    return (
      <motion.section
        className="mb-12 bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
      <h2 className="text-3xl font-mono font-bold mb-6 text-red-500">Experiência</h2>
      <div className="relative border-l-2 border-red-500">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-8 ml-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.3 }}
          >
            <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -left-1.5 border border-gray-900" />
            <div className="flex flex-wrap items-center mb-1">
              <h3 className="text-lg font-semibold text-gray-100 mr-2">{exp.title}</h3>
              <span className="text-sm text-gray-400">| {exp.company}</span>
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">{exp.period}</time>
            <p className="text-base font-normal text-gray-400">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>

    )
      
}

export default Experience;

