import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiApachekafka } from "react-icons/si";
import GuidewireIcon from "./icons/GuidewireIcon";

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
  { name: ".Next.js", icon: FaReact, color: "text-purple-400" },
  { name: "Python", icon: FaPython, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "SQL", icon: FaDatabase, color: "text-blue-300" },
  { name: "Kafka", icon: SiApachekafka, color: "text-red-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Guidewire", icon: GuidewireIcon, color: "text-indigo-400" },
  { name: "GitLab", icon: FaGitAlt, color: "text-red-600" },
  { name: "Express.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "MongoDB", icon: FaDatabase, color: "text-green-500" },
  { name: "POSTMAN", icon: FaNodeJs, color: "text-red-500" },
  { name: "Docker", icon: FaNodeJs, color: "text-blue-500" },
  { name: "HTML5", icon: SiJavascript, color: "text-orange-600" },
  { name: "CSS3", icon: SiTailwindcss, color: "text-blue-600" },
  { name: "TypeScript", icon: SiJavascript, color: "text-blue-400" },
  { name: "EXPO", icon: FaReact, color: "text-purple-400" },

];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-900/30 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">

            <span className="text-white">Skills & Technologies</span>
          </h2>
          <div className="h-1 w-20 bg-primary mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full flex flex-col items-center justify-center gap-3 cursor-pointer">
                  <div className="relative">
                    <Icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`absolute inset-0 ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  </div>
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-lg">
            Always learning and exploring new technologies to build better solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
