"use client"

import { Github, Linkedin, Mail, FileDown, ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

function Header() {
  return (
    <motion.header
      className="text-center mb-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/images/foto2.jpg"
        alt="Miguel Pinto"
        width={150}
        height={150}
        className="mx-auto rounded-full border-4 border-red-500 shadow-lg"
      />
      <h1 className="mt-4 text-4xl font-bold">Miguel Pinto</h1>
      <p className="mt-2 text-xl text-gray-400">Engenheiro de Software</p>
      <motion.button
        className="mt-6 bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-red-700 transition duration-300 flex items-center justify-center mx-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open("/CV.pdf", "_blank")}
      >
        <FileDown className="w-5 h-5 mr-2" />
        Download CV
      </motion.button>
    </motion.header>
  )
}

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

function Skills() {
  const skills = ["JavaScript","Node.js",".NET", "HTML", "C#", "C++", "C", "Python", "SQL", "Git"]

  return (
    <motion.section
      className="mb-12 bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-red-500">Competencias</h2>
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
    {
      title: "A procura de emprego",
      company: "",
      period: "2025 - Presente",
      description: "",
    },
    
  ]

  return (
    <motion.section
      className="mb-12 bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-red-500">Experiencia</h2>
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

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB.",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Developed a real-time task management application using React and Firebase.",
      link: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created an interactive dashboard for visualizing complex datasets using D3.js and React.",
      link: "#",
    },
  ]

  return (
    <motion.section
      className="mb-12 bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-red-500">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-gray-700 p-6 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-100">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-red-400 hover:text-red-300 transition duration-300 flex items-center"
            >
              Learn more
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function Contact() {
  return (
    <motion.section
      className="bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-red-500">Contacto</h2>
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

