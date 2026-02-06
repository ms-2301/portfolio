import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative overflow-visible pb-8">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15" />

      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-primary text-lg md:text-xl mb-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-[1.12] pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-light to-secondary-light"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          Mithila Sudheera Singireddy.
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-6 text-gray-200"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          AI Engineer building reliable, production-ready systems.
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          I build AI-powered applications end-to-end  from retrieval and model workflows to scalable backend services.
          I care about security, performance and clean engineering that turns ideas into products.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <motion.a
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>

          <motion.a
            href="#projects"
            className="border-2 border-gray-600 hover:border-primary text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-gray-800/50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          <motion.a
            href="https://github.com/ms-2301"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.18, y: -3 }}
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/mithila-sudheera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.18, y: -3 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:mithila12320@gmail.com"
            className="text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.18, y: -3 }}
            aria-label="Email"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        <motion.p
          className="text-gray-500 text-sm md:text-base mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          Master&apos;s in Computer Science • Illinois Institute of Technology • Uday Ram Partners LLC
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
      >
        <a href="#about" className="text-gray-400 hover:text-primary transition-colors" aria-label="Scroll to About">
          <HiArrowDown className="text-3xl" />
        </a>
      </motion.div>
    </section>
  );
}
