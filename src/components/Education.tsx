import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      period: '2020 - 2024',
      gpa: '8.5/10',
      type: 'Bachelor\'s Degree',
      description: 'Specialized in Computer Science and Engineering with focus on software development, data structures, algorithms, and web technologies. Completed comprehensive coursework in programming, database systems, and software engineering principles.',
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Development',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems',
        'Object-Oriented Programming',
        'System Design'
      ],
      achievements: [
        'Maintained consistent academic performance',
        'Participated in coding competitions',
        'Completed multiple web development projects',
        'Active member of Computer Science Society'
      ],
      projects: [
        'Built multiple MERN stack applications',
        'Developed e-commerce platform as capstone project',
        'Created task management system with real-time features',
        'Implemented various algorithms and data structures'
      ],
    },
    {
      degree: 'Full Stack Web Development',
      institution: 'Online Courses & Certifications',
      location: 'Online',
      period: '2022 - 2023',
      gpa: 'Completed',
      type: 'Professional Development',
      description: 'Comprehensive training in modern web development technologies including MERN stack, focusing on practical, industry-relevant skills and best practices for full-stack development.',
      courses: [
        'Advanced JavaScript & ES6+',
        'React.js & Redux',
        'Node.js & Express.js',
        'MongoDB & Database Design',
        'RESTful API Development',
        'Git & Version Control'
      ],
      achievements: [
        'Completed multiple certification courses',
        'Built portfolio of real-world projects',
        'Gained hands-on experience with modern tools',
        'Developed strong problem-solving skills'
      ],
      projects: [
        'E-commerce web application',
        'Social media dashboard',
        'Real-time chat application',
        'Weather forecast application'
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
                {/* Header */}
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
                  
                  <div className="text-right">
                    <div className="flex items-center justify-end lg:justify-start text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                      <Star size={24} className="mr-2" />
                      {edu.gpa}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.type === 'Bachelor\'s Degree' ? 'CGPA' : 'Status'}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  {edu.description}
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Courses */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                      <BookOpen size={20} className="mr-2 text-blue-500" />
                      Key Courses
                    </h4>
                    <ul className="space-y-2">
                      {edu.courses.map((course, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                      <Award size={20} className="mr-2 text-emerald-500" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                      <GraduationCap size={20} className="mr-2 text-purple-500" />
                      Key Projects
                    </h4>
                    <ul className="space-y-2">
                      {edu.projects.map((project, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
            Additional Skills & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'JavaScript Fundamentals',
              'React Development',
              'Node.js Backend',
              'MongoDB Database',
            ].map((cert, index) => (
              <motion.div
                key={cert}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white text-center">
                  {cert}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;