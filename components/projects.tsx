"use client"

import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

function Projects() {
    const projects = [
      {
        title: "Portfólio Website",
        description: "Portfólio website feito em Next.js e Tailwind CSS.",
        link: "https://github.com/Miguelp24/Portfolio",
      },
      {
        title: "Biblioteca Online",
        description: "Biblioteca online com recursos de getão de livros e de emprestimos, feita em .NET e SQL Server",
        link: "https://github.com/Miguelp24/Trab_Biblioteca",
      },
      {
        title: "To do List",
        description: "Aplicaçaõ de gestão de tarefas feita em C#",
        link: "https://github.com/Miguelp24/TrabLab-ToDoList",
      },
      {
        title: "Caixeiro Viajante",
        description: "Solução criada no âmbito do concurso realizado na UTAD, Hackathon Code&Conqueer",
        link: "https://github.com/Miguelp24/Hackthon",
      },
      {
        title: "Gestor financeiro para jovens",
        description: "Aplicação mobile completa criada para o projeto final de curso, feita em React Native e PostegreSQL",
        link: "https://github.com/Miguelp24/Gestor-Financeiro",
      },
    ]
  
    return (
      <motion.section
        id="projects"
        className="mb-12 bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2 className="text-3xl font-mono font-bold mb-4 text-red-500">Projetos</h2>
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
                target="_blank"
                className="text-red-400 hover:text-red-300 transition duration-300 flex items-center"
              >
                Ver código
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    )
  }

  export default Projects;