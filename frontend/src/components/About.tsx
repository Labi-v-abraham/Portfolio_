import { Code2, Palette, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollFloat from './ScrollFloat';


export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices and modern standards.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Palette size={32} />,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces with attention to detail and user experience.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Rocket size={32} />,
      title: "Fast Delivery",
      description: "Delivering high-quality projects on time with agile methodologies and efficient workflows.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4"
          >
            Get To Know Me
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
           <ScrollFloat >About Me</ScrollFloat> 
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full-stack developer passionate about building practical ans scalable web application.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-16"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a full-stack developer and MCA student focused on building modern, scalable web applications using Django and React. I enjoy turning real-world problems into practical digital solutions while continuously improving through hands-on projects and collaborative development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             I am actively seeking opportunities where I can contribute to impactful projects, collaborate with experienced teams, and grow as a developer while delivering reliable and efficient software solutions. I am committed to continuous learning and adapting to new technologies to build products that create real value for users and organizations.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg"
              >
                <p className="text-4xl font-bold mb-2">10+</p>
                <p className="text-sm opacity-90">Projects Completed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-xl shadow-lg"
              >
                <p className="text-4xl font-bold mb-2">2+</p>
                <p className="text-sm opacity-90">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-block p-3 bg-gradient-to-br ${feature.gradient} text-white rounded-xl mb-4 shadow-lg`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}