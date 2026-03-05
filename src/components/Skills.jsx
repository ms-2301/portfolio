import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaLock,
  FaCogs,
  FaCodeBranch,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiApachekafka,
  SiKubernetes,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiGraphql,
  SiGithubactions,
  SiGitlab,
  SiSpringboot,
  SiOpensearch,
} from "react-icons/si";
import GuidewireIcon from "./icons/GuidewireIcon";

// Cleaned + updated to match latest resume (AI + Cloud + Platforms).
// Removed duplicates, fixed icons (Next.js/TS/Java), and grouped to keep UI readable.

const skillGroups = [

  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-200" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-300" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Redux Toolkit", icon: FaCogs, color: "text-purple-300" },
      { name: "WCAG Accessibility", icon: FaLock, color: "text-emerald-300" },
      { name: "Secure UI Architecture", icon: FaLock, color: "text-teal-300" },
    ],
  },
  {
    title: "Backend & Distributed Systems",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
      { name: "Express.js", icon: FaNodeJs, color: "text-green-300" },
      { name: "REST APIs", icon: FaCogs, color: "text-amber-300" },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-400" },
      { name: "Microservices", icon: FaCogs, color: "text-indigo-300" },
      { name: "Kafka", icon: SiApachekafka, color: "text-red-400" },
      { name: "Event-Driven Systems", icon: FaCogs, color: "text-orange-300" },
      { name: "JWT Auth", icon: FaLock, color: "text-emerald-400" },
      { name: "Rate Limiting", icon: FaLock, color: "text-teal-400" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS (Bedrock, SageMaker, EC2, S3, IAM)", icon: FaAws, color: "text-orange-400" },
      { name: "Docker", icon: SiDocker, color: "text-sky-400" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
      { name: "CI/CD", icon: FaCodeBranch, color: "text-emerald-300" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-200" },
      { name: "GitLab CI/CD", icon: SiGitlab, color: "text-orange-400" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "Observability & Logging", icon: FaCogs, color: "text-cyan-300" },
    ],
  },
  {
    title: "Databases & Tooling",
    items: [
      { name: "MongoDB (Index Optimization)", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      { name: "System Design", icon: FaCogs, color: "text-indigo-300" },
      { name: "Code Reviews", icon: FaCodeBranch, color: "text-purple-300" },
      { name: "Agile / SCRUM", icon: FaCogs, color: "text-violet-300" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Java", icon: FaCogs, color: "text-red-400" },
      { name: "C#", icon: FaCogs, color: "text-purple-400" },
      { name: "Shell Scripting", icon: FaNodeJs, color: "text-green-400" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    ],
  },
    {
    title: "AI & ML Platforms",
    items: [
      { name: "RAG Architecture", icon: FaCogs, color: "text-teal-300" },
      { name: "Amazon Bedrock", icon: FaAws, color: "text-orange-400" },
      { name: "AWS SageMaker", icon: FaAws, color: "text-amber-400" },
      { name: "LangGraph", icon: FaCogs, color: "text-emerald-300" },
      { name: "LLM Orchestration", icon: FaCogs, color: "text-cyan-300" },
      { name: "Prompt Engineering", icon: FaCodeBranch, color: "text-sky-300" },
      { name: "Vector Databases", icon: FaDatabase, color: "text-indigo-300" },
      { name: "OpenSearch", icon: SiOpensearch, color: "text-blue-300" },
      { name: "MCP", icon: FaCogs, color: "text-violet-300" },
      { name: "A2A", icon: FaCogs, color: "text-fuchsia-300" },
    ],
  },
  {
    title: "Industry Tools",
    items: [{ name: "Guidewire", icon: GuidewireIcon, color: "text-indigo-400" }],
  },
];

function SectionHeader({ title }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-white text-lg md:text-xl font-semibold">{title}</h3>
      <div className="h-px flex-1 ml-4 bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-900/30 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-white">Skills & Technologies</span>
          </h2>
          <div className="h-1 w-20 mb-12 mx-auto bg-primary rounded-full" />
        </motion.div>

        {/* Groups */}
        <div className="space-y-10">
          {skillGroups.map((group, gIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: gIndex * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm"
            >
              <SectionHeader title={group.title} />

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={`${group.title}-${skill.name}`}
                      className="group relative"
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 + index * 0.03, duration: 0.45 }}
                    >
                      <div className="h-full bg-gray-800/50 border border-gray-700/60 rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col items-center justify-center gap-2 cursor-pointer">
                        <div className="relative">
                          <Icon
                            className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                          />
                          <div
                            className={`absolute inset-0 ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                          />
                        </div>

                        <span className="text-gray-300 text-xs sm:text-sm font-medium group-hover:text-white transition-colors text-center leading-snug">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400 text-lg">
            Continuously improving my craft across AI platforms, distributed systems, and modern web engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
