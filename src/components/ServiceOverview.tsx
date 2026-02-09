import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-light py-24 md:py-32 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span 
            className="text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full"
            style={{ 
              color: 'hsl(189 100% 40%)',
              background: 'hsla(189, 100%, 50%, 0.1)',
              border: '1px solid hsla(189, 100%, 50%, 0.2)'
            }}
          >
            What is Direct Bank Transfer
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 text-navy-dark"
        >
          Understanding SWIFT Payments
        </motion.h2>
        
        {/* Main paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed mb-6"
          style={{ color: 'hsl(220 9% 35%)' }}
        >
          Direct Bank Transfer is the standard way to move funds between bank accounts domestically 
          and internationally. International wires are transmitted through the SWIFT messaging network, 
          enabling payments to beneficiary accounts worldwide.
        </motion.p>

        {/* Secondary paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg leading-relaxed"
          style={{ color: 'hsl(220 9% 45%)' }}
        >
          This secure, established method ensures your funds reach their destination through 
          verified banking channels with full transparency and regulatory compliance at every step. 
          Trusted by financial institutions worldwide, SWIFT provides the backbone for secure 
          international financial transactions.
        </motion.p>

        {/* Decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 mx-auto w-24 h-1 rounded-full"
          style={{ background: 'linear-gradient(90deg, hsl(189 100% 50%), hsl(180 100% 50%))' }}
        />
      </div>
    </section>
  );
};

export default ServiceOverview;
