import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollFloat from "./ScrollFloat";


export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Bootstrap", level: 95 },
        { name: "Rest APIs", level: 90 },
        { name: "HTML & CSS", level: 95 },


      ],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 95 },
        { name: "Django", level: 90 },
        { name: "MySQL", level: 90 },
        { name: "SQLite", level: 90 },
        { name: "MongoDB", level: 85 },
      ],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      category: "Design & Tools",
      skills: [
        { name: "Figma", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Git & Github", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Responsive UI Design", level: 85 },
        { name: "Sublime", level: 85 },


      ],
      gradient: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section ref={ref} id="skills" className="py-20 px-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

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
            className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4"
          >
            My Expertise
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <ScrollFloat> Skills & Expertise </ScrollFloat>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technical skills honed through years of
            hands-on experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.gradient} text-white rounded-lg mb-6 font-semibold shadow-lg`}>
                {category.category}
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">{skill.name}</span>
                      <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent font-bold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: idx * 0.1 + skillIdx * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full shadow-lg`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4 font-semibold">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JWT",
              "Canvas",
              "Redux",
              "Angular",
              "AWS",
              "CI/CD",
              "Agile",
              "UI/UX Design",
            ].map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default shadow-sm hover:shadow-md"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}