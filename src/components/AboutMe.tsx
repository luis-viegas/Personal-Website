'use client'

import { BrainCircuit, Code, Database, Server, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutMe() {
  const skills = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-yellow-500" />,
      title: 'AI Systems',
      description: 'RAG Pipelines, LLMs, LangChain',
    },
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: 'Frontend',
      description: 'React, Next.js, TailwindCSS',
    },
    {
      icon: <Server className="h-8 w-8 text-green-500" />,
      title: 'Backend',
      description: 'Node.js, Python, FastAPI',
    },
    {
      icon: <Database className="h-8 w-8 text-purple-500" />,
      title: 'Database',
      description: 'SQL, NoSQL, Vectorial',
    },
  ]

  return (
    <section id="about">
      <motion.h2
        className="mb-8 text-center text-4xl font-bold dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <motion.div
          className="mb-8 md:mb-0 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            As a Full-Stack Developer and AI Engineer, I build intelligent web
            systems using modern stacks like React, Next.js, and Node.js. With
            expertise in Python, LangChain, and RAG pipelines, I design
            solutions that bridge machine learning models with scalable
            applications for enhanced information retrieval and automation.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            My work extends to distributed systems and LLM-powered tools,
            leveraging frameworks like FastAPI and SQL databases. Passionate
            about merging cutting-edge AI with clean architecture, I focus on
            delivering maintainable systems that solve real-world problems for
            financial institutions and beyond.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 gap-6 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-800"
            >
              {skill.icon}
              <h3 className="mt-4 mb-2 text-xl font-semibold dark:text-white">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
