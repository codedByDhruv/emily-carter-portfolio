
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-purple-50 to-orange-50 dark:from-gray-800 dark:to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={textVariants}>
            <motion.h2 
              className="text-5xl font-bold text-gray-800 dark:text-white mb-8 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent"
              variants={textVariants}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              variants={textVariants}
            >
              Hi there! I'm Emily, a passionate graphic designer with over 5 years of experience 
              creating visual stories that resonate with audiences. My journey began with a love 
              for art and has evolved into a career dedicated to helping brands find their unique voice.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              variants={textVariants}
            >
              I specialize in brand identity, digital design, and illustration. When I'm not designing, 
              you can find me exploring nature, sketching in coffee shops, or experimenting with new 
              creative techniques.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={textVariants}
            >
              {['Brand Identity', 'Digital Design', 'Illustration', 'UI/UX Design'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-sm border border-white/20 dark:border-gray-700/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="relative"
          >
            <motion.div 
              className="w-full h-96 bg-gradient-to-br from-orange-200 via-purple-200 to-teal-200 dark:from-orange-300/30 dark:via-purple-300/30 dark:to-teal-300/30 rounded-2xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Emily Carter working"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-teal-400 to-purple-400 dark:from-teal-400/30 dark:to-purple-400/30 rounded-full opacity-20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
