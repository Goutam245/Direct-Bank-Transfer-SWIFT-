import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe2, FileText, Radar, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'International payments via SWIFT to beneficiary accounts across 200+ countries and territories with established correspondent banking networks.',
  },
  {
    icon: FileText,
    title: 'Structured References',
    description: 'Clear payment purpose codes and reference fields enable seamless business reconciliation and audit trail documentation.',
  },
  {
    icon: Radar,
    title: 'Enhanced Tracking',
    description: 'Optional end-to-end visibility through SWIFT gpi corridors with real-time status updates and UETR tracking references.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security',
    description: 'Multi-layer compliance screening including KYC/AML, sanctions filters, and risk-based transaction monitoring for maximum security.',
  },
];

const KeyBenefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  return (
    <section ref={ref} className="bg-marble-dark py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-primary/8 blur-[150px] rounded-full" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span 
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: 'hsl(180 100% 60%)' }}
          >
            Key Benefits
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-6"
          style={{ 
            color: '#00E5FF',
            textShadow: '0 0 30px hsla(180, 100%, 50%, 0.4)'
          }}
        >
          Why Choose SWIFT Transfers
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16 text-lg max-w-2xl mx-auto"
          style={{ color: 'hsl(0 0% 65%)' }}
        >
          Experience the advantages of premium international banking with Prominence Bank
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group rounded-xl p-8 transition-all duration-300 cursor-default"
              style={{ 
                background: 'hsla(216 42% 13% / 0.8)',
                border: '1px solid hsla(180 100% 50% / 0.15)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              <motion.div 
                className="mb-6 relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'hsla(180, 100%, 50%, 0.3)' }}
                />
                <benefit.icon 
                  size={52} 
                  className="text-cyan-primary relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(0,217,255,0.7)]"
                  strokeWidth={1.3}
                />
              </motion.div>
              
              <h3 
                className="text-xl font-display font-semibold mb-4"
                style={{ color: '#00E5FF' }}
              >
                {benefit.title}
              </h3>
              
              <p 
                className="text-sm leading-relaxed"
                style={{ color: 'hsl(0 0% 60%)' }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyBenefits;
