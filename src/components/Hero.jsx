import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
  <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative overflow-visible pb-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse"></div>
      
      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-primary text-lg md:text-xl mb-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm
        </motion.p>
        
        <motion.h1
          className="text-5xl md:text-7xl lg:text-7xl font-bold mb-12 leading-[1.15] pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-light to-secondary-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Mithila Sudheera Singireddy.
        </motion.h1>
        
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I'm a full-stack developer passionate about crafting beautiful, user-friendly interfaces 
          and scalable backend systems. Recently graduated with a Master's in Computer Science from Illinois Institute of Technology and
          currently working with Uday Ram Partners LLC. as <span className="text-primary font-semibold">Full-stack developer</span>.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
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
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href="https://github.com/ms-2301"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mithila-sudheera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:mithila12320@gmail.com"
            className="text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
      >
        <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
          <HiArrowDown className="text-3xl" />
        </a>
      </motion.div>
    </section>
  );
}
