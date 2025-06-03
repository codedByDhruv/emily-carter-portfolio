
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-teal-50 to-orange-50 dark:from-gray-900 dark:to-orange-900/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'd love to hear about your project and discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 dark:border-gray-700/20"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div variants={inputVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.3 }}>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Your Name"
                />
                <motion.label
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    formData.name 
                      ? 'top-2 text-xs text-purple-600 dark:text-purple-400 font-medium' 
                      : 'top-1/2 transform -translate-y-1/2 text-transparent'
                  }`}
                >
                  Name
                </motion.label>
              </div>
            </motion.div>

            <motion.div variants={inputVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.4 }}>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Your Email"
                />
                <motion.label
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    formData.email 
                      ? 'top-2 text-xs text-purple-600 dark:text-purple-400 font-medium' 
                      : 'top-1/2 transform -translate-y-1/2 text-transparent'
                  }`}
                >
                  Email
                </motion.label>
              </div>
            </motion.div>

            <motion.div variants={inputVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delay: 0.5 }}>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
                <motion.label
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    formData.message 
                      ? 'top-2 text-xs text-purple-600 dark:text-purple-400 font-medium' 
                      : 'top-6 text-transparent'
                  }`}
                >
                  Message
                </motion.label>
              </div>
            </motion.div>

            <motion.div
              variants={inputVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <motion.button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center"
                  >
                    ✨ Message Sent! ✨
                  </motion.span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.div>
          </form>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl text-center"
            >
              <p className="text-green-700 dark:text-green-300 font-medium">
                Thanks for reaching out! I'll get back to you soon. 🎉
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
