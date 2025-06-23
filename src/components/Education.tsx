import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Kalinga University',
      location: 'Raipur, Chhattisgarh',
      period: '2018 - 2021',
      type: 'Bachelor\'s Degree',
      description: 'Completed Bachelor\'s degree in Computer Applications with focus on programming fundamentals, software development, and computer science basics.'
    },
    {
      degree: 'Polytechnic',
      institution: 'Govt Polytechnic',
      location: 'Sirsa, Haryana',
      period: 'Equivalent to +2',
      type: 'Diploma'
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic background and continuous learning journey in technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start lg:items-center space-x-4 mb-4 lg:mb-0">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        {edu.type === 'Bachelor\'s Degree' ? (
                          <GraduationCap size={32} className="text-white" />
                        ) : (
                          <BookOpen size={32} className="text-white" />
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-2">
                        {edu.type}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Show description only for Bachelor's degree */}
                {edu.type === 'Bachelor\'s Degree' && (
                  <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Education;