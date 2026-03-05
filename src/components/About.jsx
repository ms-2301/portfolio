import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const highlights = [
  {
    metric: "30%",
    text: "Boosted SPA performance using Material UI optimization, lazy loading, code splitting, and React rendering tweaks in high-traffic financial apps.",
  },
  {
    metric: "40%",
    text: "Reduced redundant API calls by centralizing state management with Redux Toolkit, improving app responsiveness and reliability.",
  },
  {
    metric: "28%",
    text: "Improved service reliability designing reusable REST APIs for policy, billing, and claims microservices processing thousands of daily transactions.",
  },
  {
    metric: "35%",
    text: "Improved data visibility for product and finance teams by building real-time analytics SPAs with Chart.js and React.",
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
            Hi, I'm <span className="text-teal-400 font-semibold">Mithila Sudheera Singireddy</span> a{" "}
            <span className="text-teal-400 font-semibold">Full-Stack Software Engineer</span> with{" "}
            <span className="text-teal-400 font-semibold">3+ years</span> of experience building cloud-based and web
            applications in financial and enterprise systems. I specialize in delivering production features end-to-end
            in Agile/Scrum teams across time zones.
          </p>

          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            On the frontend, I build fast, accessible{" "}
            <span className="text-teal-400 font-semibold">React SPAs</span> with{" "}
            <span className="text-teal-400 font-semibold">
              Material UI, Redux Toolkit, TypeScript, and Next.js
            </span>
            , with a strong focus on performance, responsive design, and WCAG 2.2 accessibility. On the backend, I
            design scalable{" "}
            <span className="text-teal-400 font-semibold">REST APIs and microservices</span> using{" "}
            <span className="text-teal-400 font-semibold">Node.js, Java, C#, and Kafka</span>, backed by SQL Server and
            MongoDB.
          </p>


          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            I hold a <span className="text-teal-400 font-semibold">Master's in Computer Science</span> from{" "}
            <span className="text-teal-400 font-semibold">Illinois Institute of Technology</span> and I'm certified as
            an <span className="text-teal-400 font-semibold">AWS Certified Machine Learning – Associate</span> with a
            Microsoft Azure Machine Learning certification as well.
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