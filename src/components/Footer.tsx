
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-gray-900 to-purple-900 dark:from-gray-950 dark:to-purple-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h3 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Emily Carter
          </motion.h3>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate graphic designer creating beautiful, meaningful designs that connect and inspire.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="mailto:emily@example.com"
              className="flex items-center space-x-2 text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Mail size={20} />
              <span>emily@example.com</span>
            </motion.a>
          </div>

          <motion.div
            className="border-t border-gray-700 dark:border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 dark:text-gray-500">
              © 2024 Emily Carter. All rights reserved. Made with ❤️ and lots of coffee.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
