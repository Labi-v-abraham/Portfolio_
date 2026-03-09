import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./failImage/ImageWithFallback";
import ScrollFloat from "./ScrollFloat";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  git: string;
  link: string | null;
  tag: string[];
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [

    {
      id: 6,
      title: "Charity Organization Website",
      description:
        "A modern responsive charity website currently under development to support donations, volunteer registration, and awareness campaigns.",
      image: "/images/charity.png",
      git: "",
      link: null,
      tag: ["Wordpress", "Page builder", "Elemntor"],
    },
    {
      id: 1,
      title: "MacFiesta",
      description:
        "A college fest management platform where students can explore events, view schedules, and register online.",
      image: "/images/macfiesta.png",
      git: "https://github.com/yourusername/macfiesta",
      link: "https://macfiesta.macfast.org/",
      tag: ["React", "Django", "MySQL"],
    },

    {
      id: 3,
      title: "ERP System",
      description:
        "A web-based ERP platform for managing institutional operations including student data, administration, and academic records.",
      image: "/images/erp.png",
      git: "https://github.com/yourusername/erp-system",
      link: null,
      tag: ["PHP", "MySQL", "Bootstrap"],
    },

    {
      id: 2,
      title: "Connect Campus",
      description:
        "A full-stack college communication platform where students and faculty can share academic materials, announcements, and collaborate efficiently.",
      image: "/images/connect.jpg",
      git: "https://github.com/Labi-v-abraham/Connect-Campus.git",
      link: null,
      tag: ["React", "Django", "REST API", "PostgreSQL"],
    },


    
    {
      id: 4,
      title: "Event Management System",
      description:
        "A full-stack event platform allowing users to browse events, register online, and manage bookings.",
      image: "/images/event.jpg",
      git: "https://github.com/yourusername/event-management",
      link: null,
      tag: ["Django",  "Python","SQLite", "REST API"],
    },

    {
      id: 5,
      title: "TourTrackr",
      description:
        "A travel booking platform where users can search destinations, book hotels and flights, and manage travel plans.",
      image: "/images/tour.png",
      git: "https://github.com/Labi-v-abraham/TourTrackr_.git",
      link: null,
      tag: ["Django",  "Python","HTML", "CSS"],
    },
    {
      id: 7,
      title: "Lost and Found",
      description:
        "A Mens ware sell site focused on oversize t-shirt, shoes and shirts.",
      image: "/images/lost.png",
      git: "https://github.com/Labi-v-abraham/LostandFound.git",
      link: null,
      tag: ["Django", "Python","HTML", "CSS"],
    },
    
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <ScrollFloat>Featured Projects</ScrollFloat>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my full-stack development projects built using
            React, Django, and modern web technologies.
          </p>

        </motion.div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visibleProjects.map((project, idx) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >

              {/* Image */}

              <div className="relative overflow-hidden aspect-video">

                <motion.div whileHover={{ scale: 1.1 }}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Hover Buttons */}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"
                >

                  <div className="flex gap-3">

                    {project.link && (
                      <a
                        href={project.link}
                        className="p-2 bg-white text-gray-900 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.git && (
                      <a
                        href={project.git}
                        className="p-2 bg-white text-gray-900 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}

                  </div>

                </motion.div>

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}

                <div className="flex flex-wrap gap-2">

                  {project.tag.map((tag, tagIdx) => (

                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* View All Button */}

        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
}