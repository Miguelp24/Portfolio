"use client"

import { FileDown } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

function Header() {
    return (
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/aautad_foto2.jpg"
          alt="Miguel Pinto"
          width={200}
          height={200}
          className="mx-auto rounded-full border-4 border-red-500 shadow-lg"
        />
        <h1 className="mt-4 text-5xl font-mono font-bold">Miguel Pinto</h1>
        <p className="mt-2 text-2xl font-mono text-gray-400">Engenheiro Informático</p>
        <motion.button
          className="mt-6 bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-red-700 transition duration-300 flex items-center justify-center mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("/MiguelPintoCV.pdf", "_blank")}
        >
          <FileDown className="w-5 h-5 mr-2" />
          Download CV
        </motion.button>
      </motion.header>
    )
}

export default Header;