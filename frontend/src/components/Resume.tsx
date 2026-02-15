import {  GraduationCap, Award, Calendar, Eye } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollFloat from "./ScrollFloat";


export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // const workExperience = [
  //   {
  //     title: "Senior Full Stack Developer",
  //     company: "Tech Innovations Inc.",
  //     period: "2022 - Present",
  //     location: "San Francisco, CA",
  //     description:
  //       "Leading development of cloud-based SaaS platform serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
  //     achievements: [
  //       "Increased system performance by 40%",
  //       "Led team of 5 developers",
  //       "Implemented CI/CD pipeline",
  //     ],
  //   },
  //   {
  //     title: "Full Stack Developer",
  //     company: "Digital Solutions Co.",
  //     period: "2020 - 2022",
  //     location: "Remote",
  //     description:
  //       "Developed responsive web applications using React and Node.js. Collaborated with cross-functional teams to deliver client projects.",
  //     achievements: [
  //       "Delivered 15+ client projects",
  //       "Reduced load time by 60%",
  //       "Integrated payment systems",
  //     ],
  //   },
  //   {
  //     title: "Junior Developer",
  //     company: "StartUp Ventures",
  //     period: "2018 - 2020",
  //     location: "San Francisco, CA",
  //     description:
  //       "Built and maintained features for e-commerce platform. Worked closely with designers to implement pixel-perfect UIs.",
  //     achievements: [
  //       "Contributed to 3 product launches",
  //       "Improved code quality with testing",
  //       "Collaborated with design team",
  //     ],
  //   },
  // ];

  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Mahatma Gandi University",
      period: "2024 - 2026",
      location: "Tiruvalla, Pathanamthitta",
      description: "Specialized in developing",
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Mahtma Gandi University",
      period: "2020 - 2023",
      location: "Tiruvalla, Pathanamthitta",
      description: "Graduated with Honors, CGPA: 7.03",
    },
  ];

  const certifications = [
    "Full-stack Web Development:MERN Stack",
    "Python Web Development",
    
  ];

  return (
    <section ref={ref} id="resume" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <ScrollFloat> Resume & Experience</ScrollFloat>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional journey, education, and accomplishments.
          </p>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Eye size={20} />
           View Resume
          </motion.a>
          {/* <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            Download Resume
          </motion.a> */}
        </motion.div>

        {/* Work Experience */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl">
              <Briefcase size={28} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Work Experience
            </h3>
          </div> */}

          {/* <div className="space-y-6">
            {workExperience.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                whileHover={{ x: 10 }}
                className="relative"
              > */}
                {/* Timeline Line */}
                {/* {idx !== workExperience.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 -mb-6"></div>
                )} */}

                {/* <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all border-l-4 border-blue-600">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {job.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {job.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {job.period}
                        </span>
                        <span>📍 {job.location}</span>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.5,
                      }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                    >
                      {workExperience.length - idx}
                    </motion.div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {job.description}
                  </p>

                  <div className="space-y-2">
                    {job.achievements.map((achievement, achievementIdx) => (
                      <motion.div
                        key={achievementIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 + achievementIdx * 0.05 }}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span> */}
                        {/* <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Education & Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                    <span className="mx-2">•</span>
                    <span>📍 {edu.location}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-xl">
                <Award size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-xl p-5 border-2 border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded-lg">
                      <Award size={20} />
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {cert}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-6"
            >
              <h4 className="text-xl font-bold mb-4">Professional Summary</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-3xl font-bold mb-1"
                  >
                    5+
                  </motion.p>
                  <p className="text-sm opacity-90">Years Experience</p>
                </div>
                <div className="text-center">
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="text-3xl font-bold mb-1"
                  >
                    4
                  </motion.p>
                  <p className="text-sm opacity-90">Certifications</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
