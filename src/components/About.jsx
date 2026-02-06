import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const skills = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "C#"] },
  {
    label: "AI & ML",
    items: [
      "RAG Architecture",
      "Amazon Bedrock",
      "AWS SageMaker",
      "LangGraph",
      "LLM Orchestration",
      "Prompt Engineering",
      "Vector Databases",
      "OpenSearch",
      "MCP",
      "A2A",
    ],
  },
  { label: "Frontend", items: ["React", "Next.js", "Redux Toolkit", "WCAG Accessibility", "Secure UI Architecture"] },
  {
    label: "Backend & Systems",
    items: ["REST APIs", "GraphQL", "Microservices", "Kafka", "JWT", "Rate Limiting", "Event-Driven Systems"],
  },
  { label: "Cloud & DevOps", items: ["AWS (Bedrock, SageMaker, EC2, Lambda, S3, IAM)", "Docker", "Kubernetes", "GitLab CI/CD", "GitHub Actions", "Azure"] },
  { label: "Databases", items: ["MongoDB (Index Optimization)", "MySQL"] },
];

const highlights = [
  {
    metric: "42%",
    text: "Improved contextual retrieval accuracy by architecting a production RAG platform with Bedrock + LangGraph + vector DBs.",
  },
  {
    metric: "30%",
    text: "Reduced model latency by deploying real-time inference endpoints on AWS SageMaker.",
  },
  {
    metric: "40%",
    text: "Increased backend throughput by removing distributed bottlenecks using Kafka and containerized microservices.",
  },
  {
    metric: "25%",
    text: "Reduced production incidents by strengthening IAM controls, JWT auth, rate limiting, logging, and CI/CD governance.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-white">About Me</span>
          </h2>
          <div className="h-1 w-20 mb-12 mx-auto bg-primary rounded-full" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            Hi, I’m <span className="text-teal-400 font-semibold">Mithila Sudheera Singireddy</span> an{" "}
            <span className="text-teal-400 font-semibold">Associate Software Engineer</span> with{" "}
            <span className="text-teal-400 font-semibold">3+ years</span> of experience building scalable, AI driven,
            cloud-native platforms using <span className="text-teal-400 font-semibold">Python, Java, React</span>, and
            distributed system design principles.
          </p>

          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            I specialize in <span className="text-teal-400 font-semibold">RAG-based LLM systems</span> and modern AI
            platform engineering including Amazon Bedrock,{" "}
            AWS SageMaker, vector databases, and Kubernetes based
            microservices. I enjoy designing secure, high-performance architectures that align technical decisions with
            real business outcomes.
          </p>

          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            Currently at <span className="text-indigo-300 font-semibold">Uday Ram Partners LLC</span>, I build
            production-grade AI systems, orchestrate multi-agent workflows, and harden platforms with security and CI/CD
            governance. Previously, I worked at{" "}
            <span className="text-teal-400 font-semibold">Jayam Solutions</span> (React + distributed backends with Kafka)
            and <span className="text-teal-400 font-semibold">ValueMomentum</span> (React modernization + Spring Boot
            services), strengthening my end-to-end engineering skills across the SDLC.
          </p>

          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            I hold a <span className="text-teal-400 font-semibold">Master’s in Computer Science</span> from{" "}
            <span className="text-teal-400 font-semibold">Illinois Institute of Technology</span> and I’m certified as an{" "}
            <span className="text-teal-400 font-semibold">AWS Certified Machine Learning – Associate</span> (with Microsoft
            Azure Machine Learning certification as well).
          </p>

          {/* Highlights */}
          <div className="mt-10">
            <p className="text-gray-100 text-xl md:text-2xl font-semibold mb-4">
              Recent impact highlights
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((h, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.08 }}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-teal-400">{h.metric}</span>
                    <span className="text-gray-200 text-sm md:text-base leading-relaxed">{h.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
        </motion.div>

        {/* Download */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="/Mithila Sudheera.pdf"
            download="Mithila Sudheera.pdf"
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
