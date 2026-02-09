import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Shield, Send, Building2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: User,
    title: 'Provide Beneficiary Details',
    description: 'Submit beneficiary name, bank details, IBAN/account number, SWIFT/BIC code, and payment purpose.',
  },
  {
    number: 2,
    icon: Shield,
    title: 'Compliance Screening',
    description: 'Bank performs comprehensive KYC/AML verification, sanctions screening, and risk assessment checks.',
  },
  {
    number: 3,
    icon: Send,
    title: 'Payment Release',
    description: 'Instruction is released through the appropriate payment rail (domestic, SEPA, or SWIFT network).',
  },
  {
    number: 4,
    icon: Building2,
    title: 'Intermediary Processing',
    description: 'Intermediary banks (if any) process and route the payment to the beneficiary bank securely.',
  },
  {
    number: 5,
    icon: CheckCircle2,
    title: 'Funds Credited',
    description: 'Beneficiary bank credits the account; confirmations may be available depending on corridor.',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-light py-24 md:py-32 px-4">
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
            Step by Step
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-6 text-navy-dark"
        >
          Your SWIFT Transfer Journey
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16 text-lg"
          style={{ color: 'hsl(220 9% 45%)' }}
        >
          From initiation to completion - a clear path for your international transfer
        </motion.p>
        
        <div className="relative">
          {/* Connecting line - Desktop */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 origin-left"
            style={{ 
              background: 'linear-gradient(90deg, hsl(189 100% 50%), hsl(180 100% 50%), hsl(189 100% 50%))',
              boxShadow: '0 0 20px hsla(180, 100%, 50%, 0.4)'
            }}
          />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <motion.div 
                  className="relative z-10 w-[120px] h-[120px] rounded-full flex items-center justify-center mb-6"
                  style={{ 
                    background: 'linear-gradient(135deg, #00E5FF, #00B8D4)',
                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 50px rgba(0, 217, 255, 0.7)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon size={44} className="text-navy-darkest" strokeWidth={1.8} />
                </motion.div>
                
                {/* Step number badge */}
                <motion.div 
                  className="absolute top-0 right-1/2 translate-x-12 -translate-y-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-20"
                  style={{ 
                    background: 'hsl(216 56% 12%)',
                    border: '2px solid #00E5FF',
                    color: '#00E5FF',
                    boxShadow: '0 0 15px rgba(0, 217, 255, 0.4)'
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  {step.number}
                </motion.div>
                
                <h3 className="text-lg font-display font-semibold mb-3 text-navy-dark">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(220 9% 45%)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
