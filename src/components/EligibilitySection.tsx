import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Info, AlertTriangle, Check, UserCheck, FileSearch, Shield, Wallet, Activity, BadgeCheck } from 'lucide-react';

const eligibilityItems = [
  { icon: UserCheck, text: 'Account Holder Status' },
  { icon: FileSearch, text: 'KYC/AML Verification' },
  { icon: Shield, text: 'Sanctions Screening' },
  { icon: Wallet, text: 'Source of Funds Check' },
  { icon: Activity, text: 'Transaction Monitoring' },
  { icon: BadgeCheck, text: 'Final Bank Approval' },
];

const EligibilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32 px-4"
      style={{ background: '#F0F9FF' }}
    >
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span 
            className="text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full inline-block mb-4"
            style={{ 
              color: 'hsl(189 100% 40%)',
              background: 'hsla(189, 100%, 50%, 0.15)',
              border: '1px solid hsla(189, 100%, 50%, 0.3)'
            }}
          >
            Compliance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-dark">
            Eligibility & Compliance
          </h2>
        </motion.div>
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column - Eligibility Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8 text-navy-dark">
              Eligibility Requirements
            </h3>
            
            <div className="space-y-4">
              {eligibilityItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsla(189, 100%, 50%, 0.1)' }}
                  >
                    <item.icon size={20} className="text-cyan-primary" />
                  </div>
                  <span className="font-medium text-navy-dark">{item.text}</span>
                  <Check size={18} className="ml-auto text-emerald-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Important Notice */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Main eligibility notice */}
            <div 
              className="bg-white rounded-2xl p-8 shadow-md"
              style={{ borderLeft: '4px solid hsl(189 100% 50%)' }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsla(189, 100%, 50%, 0.1)' }}
                >
                  <Info className="text-cyan-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-navy-dark">Important Information</h4>
                  <p className="text-base leading-relaxed" style={{ color: 'hsl(220 9% 35%)' }}>
                    Available to Prominence Bank account holders only. All transfers are subject to eligibility, 
                    KYC/AML, sanctions screening, source of funds/wealth validation where required, 
                    transaction monitoring, corridor/counterparty acceptance, and final bank approval.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Disclaimer box */}
            <div 
              className="rounded-2xl p-8"
              style={{ 
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid hsl(220 9% 85%)'
              }}
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="flex-shrink-0 mt-0.5" size={22} style={{ color: 'hsl(45 90% 45%)' }} />
                <div>
                  <h4 className="font-semibold text-base mb-2 text-navy-dark">Disclaimer</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(220 9% 45%)' }}>
                    Information is provided for general guidance only and does not constitute an offer, 
                    commitment, guarantee, or promise to execute any transaction. Fees, timelines, and 
                    availability depend on corridor, counterparty, and compliance outcome.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
