import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Users, Building, Landmark } from 'lucide-react';

const useCases = [
  {
    icon: Briefcase,
    title: 'International Business Payments',
    description: 'Pay international suppliers and invoices with structured references for seamless reconciliation.',
  },
  {
    icon: Users,
    title: 'Family Remittances',
    description: 'Send funds to family members abroad securely through verified banking channels.',
  },
  {
    icon: Building,
    title: 'Corporate Treasury Operations',
    description: 'Move corporate funds between group entities and jurisdictions for liquidity management.',
  },
  {
    icon: Landmark,
    title: 'High-Value Settlements',
    description: 'High-value one-time payments such as escrow, tuition, or professional services with full audit trail.',
  },
];

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-4" style={{ background: '#F9FAFB' }}>
      <div className="container max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span 
            className="text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full"
            style={{ 
              color: 'hsl(189 100% 40%)',
              background: 'hsla(189, 100%, 50%, 0.1)',
              border: '1px solid hsla(189, 100%, 50%, 0.2)'
            }}
          >
            Use Cases
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-6 text-navy-dark"
        >
          Common Use Cases for SWIFT Transfers
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16 text-lg max-w-2xl mx-auto"
          style={{ color: 'hsl(220 9% 45%)' }}
        >
          Discover how our clients leverage SWIFT transfers for their financial needs
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
              }}
              className="bg-white rounded-xl p-7 transition-all duration-300 cursor-default group"
              style={{ 
                borderLeft: '4px solid hsl(189 100% 50%)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
            >
              <motion.div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{ background: 'hsla(189, 100%, 50%, 0.1)' }}
                whileHover={{ scale: 1.1 }}
              >
                <useCase.icon 
                  size={28} 
                  className="text-cyan-primary group-hover:drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]"
                  strokeWidth={1.5}
                />
              </motion.div>
              
              <h3 className="text-xl font-display font-semibold mb-3 text-navy-dark">
                {useCase.title}
              </h3>
              
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(220 9% 45%)' }}>
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
