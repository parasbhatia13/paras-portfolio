import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Freelance',
      description: [
        'Developed and maintained multiple full-stack web applications using MERN stack technologies',
        'Collaborated with clients to understand requirements and deliver custom solutions',
        'Implemented responsive designs and optimized application performance for better user experience',
        'Integrated third-party APIs and payment gateways for enhanced functionality',
        'Provided ongoing maintenance and support for deployed applications'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML/CSS'],
      achievements: [
        'Successfully delivered 15+ projects',
        'Maintained 100% client satisfaction rate',
        'Reduced application load times by 40%'
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Tech Solutions Inc.',
      location: 'Mumbai, India',
      period: '2022 - 2023',
      type: 'Internship',
      description: [
        'Assisted in developing responsive web applications using modern JavaScript frameworks',
        'Collaborated with senior developers on various client projects',
        'Participated in code reviews and learned best practices for clean code development',
        'Gained hands-on experience with version control systems and agile development methodologies',
        'Contributed to testing and debugging of web applications'
      ],
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'Bootstrap'],
      achievements: [
        'Completed 10+ feature implementations',
        'Reduced bug reports by 25%',
        'Received positive feedback from mentors'
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey in web development and the impact I've made
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              variants={itemVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 pl-16 md:pl-0' : 'md:pl-16 pl-16'}`}>
                <motion.div
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                        {experience.type}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {experience.period}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      <Briefcase size={18} className="mr-2" />
                      {experience.company}
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      {experience.location}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                          <ChevronRight size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {experience.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-emerald-700 dark:text-emerald-400"
                        >
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together?
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;