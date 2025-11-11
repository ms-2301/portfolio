import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-white" >About Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary mb-12"></div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
          Hello! I’m Mithila Sudheera Singireddy, a passionate Full-Stack Developer with a  
            <span className="text-teal-500 font-semibold"> Master's in Computer Science</span> at 
            Illinois Institute of Technology, currently working at Uday Ram Partners LLC.
          </p>
          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            Over the years, I’ve had the opportunity to work on a diverse range of projects, from enterprise-scale systems to personal innovation initiatives, building robust, scalable, and user-centric applications. 
            My professional journey includes an internship at
            <span className="text-teal-500 font-semibold"> Jayam Solutions</span>,  where I contributed to backend and frontend development as well as database management in a dynamic, fast-paced environment, Prior to that, I worked at
            <span className="text-teal-500 font-semibold"> ValueMomentum</span> as an Automation Engineer and Guidewire Tester,
            gaining hands-on experience across  
            <span className="text-teal-500 font-semibold"> Software Development Life Cycle (SDLC)</span>, 
            from requirement analysis and design to development, testing, and deployment.
             These experiences have strengthened my technical foundation, adaptability, and problem-solving skills. 
          </p>

          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
           I’m passionate about crafting digital experiences that are 
            <span className="text-teal-500 font-semibold"> intuitive, engaging, and impactful</span>. 
            I thrive on transforming complex ideas into seamless, high performing interfaces, developing applications that are not only visually compelling but also address real-world challenges.
             Constantly curious and growth-oriented, I’m driven to explore modern frameworks, embrace emerging technologies, and push the boundaries of innovation in web development.
          </p>
          <p className="text-gray-100 text-xl md:text-2xl font-semibold mt-8 mb-4">
            At <span className="text-indigo-400 font-bold">Uday Ram Partners LLC</span>, I am currently engaged in projects leveraging the following technologies and frameworks:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-200">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "AWS",
              "Tailwind CSS",
              "SQL",
              "MongoDB",
              "POSTMAN",
              "GitLab",
              "HTML & CSS",
            ].map((tech, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2 text-base"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <span className="text-primary">▹</span> {tech}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="/resume.pdf"
            download="Mithila_Sudheera_Singireddy_Resume.pdf"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-primary/50 hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
