import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Mix & Match",
    description: "A React Native mobile application that suggests outfit color combinations using  node.js backend and MongoDB database. Features real-time color analysis and personalized recommendations.",
    tech: ["React Native", ".Node.js", "API Integration","EXPO","MongoDB","Git"],
    github: "https://github.com/ms-2301/MixMatch",
    featured: false,
  },
  {
    title: "Voter Turnout Analysis",
    description: "Python-based data analysis project that correlates voter data with weather patterns and social media insights to identify trends and patterns.",
    tech: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
    featured: true,
  },
  {
    title: "Kafka Stream Processor",
    description: "Real-time data streaming pipeline built with Node.js and Apache Kafka for processing high-volume event streams with low latency.",
    tech: ["Node.js", "Kafka", "Stream Processing"],

    featured: true,
  },
  {
    title: "Face Recognition payment App",
    description: "A mobile application that uses facial recognition technology for secure payments, built with python and a custom backend.",
    tech: ["Python", "Face Recognition", "Payment Integration", "Stripe"],
    featured: true,
  },
  {
    title: "COVID-19 Detector Using Frontal X-ray Imaged With Deep Learn",
    description: "Developed and trained a convolutional neural network (CNN) model using Keras and TensorFlow on Google Colab to classify COVID-19 infections from chest X-ray images.",
    tech: ["Python", "Deep Learning", "Transfer Learning", "Keras", "TensorFlow"],
    featured: true,
  },
  {
    title: "Moisture detector",
    description: "Developed a device using java to detect moisture, temperature, and humidity and send notifications via SMS based on the acquired data",
    tech: ["Java", "SMS", "Notifications", "Data Analysis", "IoT"],
    featured: true,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-white">Academic and Personal Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary mb-12"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                {/* Project Image/Placeholder */}
                <div className={`relative ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden aspect-video group-hover:border-primary/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold">
                          {project.title.charAt(0)}
                        </div>
                        <p className="text-gray-400 text-sm">{project.title}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`${index % 2 === 0 ? "md:order-2 text-left md:text-right" : "md:order-1 text-left"}`}
                >
                  {project.featured ? (
                  <p className="text-primary text-sm font-medium mb-2 text-green-100">
                    Academic Project
                  </p>
                ) : (
                  <p className="text-primary text-sm font-medium mb-2 text-green-100">
                    Personal Project
                  </p>
                )}

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 mb-4">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mb-4 ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`} 
                    >
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div
                      className={`flex gap-4 ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      {project.github && project.github !== "#" && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="text-xl" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
