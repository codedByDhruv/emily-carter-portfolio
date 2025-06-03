
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Emily's design work transformed our brand completely. Her attention to detail and creative vision exceeded all our expectations.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, Creative Co",
      content: "Working with Emily was an absolute pleasure. She understood our vision perfectly and delivered designs that truly capture our brand essence.",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Rodriguez",
      role: "Founder, Bloom Studio",
      content: "Emily's creativity knows no bounds. She brought fresh ideas and innovative solutions to every project. Our sales increased by 40%!",
      avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Product Manager, InnovateLab",
      content: "The level of professionalism and creativity Emily brings is unmatched. She delivered beyond our expectations and on time.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amanda Foster",
      role: "Brand Director, StyleCorp",
      content: "Emily's designs perfectly captured our brand identity. Her work has significantly improved our market presence and customer engagement.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Robert Martinez",
      role: "Startup Founder, NextGen",
      content: "Incredible attention to detail and innovative design solutions. Emily helped us stand out in a competitive market with her unique approach.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  // Auto-slide every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2)); // -2 because we show 3 cards
    }, 1000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-purple-50 to-orange-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it - hear from some of the amazing clients I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="relative">
          {/* Cards Grid */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentSlide}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 h-full flex flex-col"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-purple-200 dark:ring-purple-400/30"
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic flex-grow text-center"
                >
                  "{testimonial.content}"
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">
                    {testimonial.role}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 dark:border-gray-700/20 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 dark:border-gray-700/20 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
