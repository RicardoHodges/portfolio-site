import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-6 items-start">
        <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl sm:text-5xl font-extrabold">
          João Silva
        </motion.h1>
        <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-xl text-gray-300">
          Full-Stack Developer & Security-Oriented Engineer — construindo produtos confiáveis que escalam.
        </motion.h2>

        <p className="text-gray-400 max-w-2xl">
          Foco em reduzir riscos de produção e entregar features com tempo de mercado competitivo. Se você precisa de software que funcione e seja seguro, podemos conversar.
        </p>

        <div className="flex gap-3 mt-4">
          <Link href="#projects" className="bg-primary px-4 py-2 rounded text-white hover:opacity-90">Ver projetos</Link>
          <a href="#contact" className="border border-gray-700 px-4 py-2 rounded text-gray-200">Contato</a>
        </div>
      </div>
    </section>
  )
}
