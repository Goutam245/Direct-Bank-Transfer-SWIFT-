import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProminenceLogo from './ProminenceLogo';

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="relative bg-marble-dark py-24 md:py-32 px-4 overflow-hidden"
    >
      {/* Enhanced background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full bg-cyan-primary/12 blur-[150px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-bright/6 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-primary/8 blur-[100px]" />
      </div>
      
      <div className="container max-w-4xl mx-auto relative z-10 text-center">
        {/* Mini logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <ProminenceLogo size="sm" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
          style={{ 
            color: '#FFFFFF',
            textShadow: '0 0 30px hsla(180, 100%, 50%, 0.3)'
          }}
        >
          Become an account holder to access this service
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          style={{ color: 'hsl(0 0% 70%)' }}
        >
          Join Prominence Bank and unlock global payment capabilities with premium private banking services
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary-glow min-w-[220px] text-lg"
          >
            Open an Account
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline-cyan min-w-[220px] text-lg"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {['256-bit Encryption', 'SWIFT Certified', 'FDIC Insured', '24/7 Support'].map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-sm"
              style={{ color: 'hsl(0 0% 55%)' }}
            >
              <div className="w-2 h-2 rounded-full bg-cyan-primary" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
