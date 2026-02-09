import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a SWIFT transfer?",
    answer: "A SWIFT transfer is an international bank-to-bank wire where payment instructions are transmitted securely through the SWIFT network to deliver funds to a beneficiary account.",
    tags: "SWIFT transfer, international wire, bank-to-bank transfer, cross-border payment, SWIFT BIC"
  },
  {
    question: "Who can use SWIFT transfers at Prominence Bank?",
    answer: "SWIFT transfers are available to Prominence Bank account holders only, subject to eligibility, KYC/AML, sanctions screening, transaction risk review, and final bank approval.",
    tags: "account holders, KYC AML, sanctions screening, eligibility, compliance"
  },
  {
    question: "What information is required to send a SWIFT transfer?",
    answer: "Beneficiary name, beneficiary bank name, IBAN/account number, SWIFT/BIC, currency, amount, and a clear payment purpose/reference. Additional fields may be required depending on corridor.",
    tags: "SWIFT details, IBAN, BIC, beneficiary information, payment reference"
  },
  {
    question: "How long does a SWIFT transfer take?",
    answer: "Timelines vary by corridor and intermediaries; most international wires complete within 1-3 business days. Certain corridors may offer faster delivery and tracking where supported.",
    tags: "SWIFT transfer time, settlement, business days, corridor, tracking"
  },
  {
    question: "Can I track my SWIFT payment?",
    answer: "Where supported, tracking references can be provided and status checks can be performed via official channels. Enhanced end-to-end visibility may be available in SWIFT gpi corridors.",
    tags: "SWIFT tracking, payment status, UETR, confirmation, gpi"
  },
  {
    question: "Can a SWIFT transfer be cancelled or recalled?",
    answer: "Once released, cancellation is not guaranteed. A recall may be attempted, but success depends on the beneficiary bank and whether funds have already been credited.",
    tags: "recall, cancellation, reversibility, beneficiary bank, SWIFT message"
  },
  {
    question: "Why might a SWIFT transfer be delayed or rejected?",
    answer: "Common reasons include incorrect beneficiary details, intermediary checks, missing purpose/supporting documents, sanctions filters, or local regulatory requirements.",
    tags: "transfer delay, rejected wire, compliance review, sanctions, incorrect details"
  },
  {
    question: "What fees apply to SWIFT transfers?",
    answer: "Fees depend on corridor, transfer type, and any intermediary charges. Fee structures are disclosed through official Prominence Bank channels before execution.",
    tags: "wire fees, intermediary fees, SWIFT charges, fee disclosure, banking fees"
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-marble-dark py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-primary/6 blur-[120px] rounded-full" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-bright/5 blur-[100px] rounded-full" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
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
            FAQ
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
          Frequently Asked Questions
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-14 text-lg"
          style={{ color: 'hsl(0 0% 65%)' }}
        >
          Everything you need to know about SWIFT transfers
        </motion.p>
        
        <Accordion type="single" collapsible className="space-y-4 faq-accordion">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{ 
                  background: 'hsla(216 42% 13% / 0.7)',
                  border: '1px solid hsla(180 100% 50% / 0.12)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <AccordionTrigger 
                  className="px-6 py-5 text-left hover:no-underline transition-all group"
                >
                  <span 
                    className="text-lg font-display font-medium transition-all group-hover:text-glow-cyan"
                    style={{ color: '#00E5FF' }}
                  >
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="mb-4 leading-relaxed text-base" style={{ color: 'hsl(0 0% 72%)' }}>
                    {faq.answer}
                  </p>
                  <div 
                    className="flex flex-wrap gap-2 pt-4"
                    style={{ borderTop: '1px solid hsla(180 100% 50% / 0.1)' }}
                  >
                    {faq.tags.split(', ').map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-3 py-1.5 rounded-full transition-colors hover:bg-cyan-primary/20"
                        style={{ 
                          background: 'hsla(180 100% 50% / 0.1)',
                          color: 'hsl(180 100% 60%)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
