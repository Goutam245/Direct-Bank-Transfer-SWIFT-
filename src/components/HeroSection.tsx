import { motion } from 'framer-motion';
import { Globe, ChevronRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-marble-dark overflow-hidden px-4 pt-28 pb-20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-bright/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-primary/6 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-cyan-primary/5 blur-[150px]" />
      </div>
      
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 mb-8"
      >
        <div className="flex items-center gap-2 text-sm">
          <a href="/" className="transition-colors hover:text-cyan-primary" style={{ color: 'hsl(0 0% 60%)' }}>
            Home
          </a>
          <ChevronRight size={14} style={{ color: 'hsl(0 0% 40%)' }} />
          <a href="#" className="transition-colors hover:text-cyan-primary" style={{ color: 'hsl(0 0% 60%)' }}>
            Services
          </a>
          <ChevronRight size={14} style={{ color: 'hsl(0 0% 40%)' }} />
          <span className="text-cyan-primary font-medium">SWIFT Transfer</span>
        </div>
      </motion.nav>
      
      {/* SWIFT Globe Icon */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 mb-10"
      >
        <div className="relative">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, hsla(180, 100%, 50%, 0.3) 0%, transparent 70%)',
              transform: 'scale(2)',
            }}
            animate={{
              scale: [2, 2.3, 2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Globe 
              size={100} 
              className="text-cyan-primary drop-shadow-[0_0_30px_rgba(0,217,255,0.7)]"
              strokeWidth={1.2}
            />
          </motion.div>
          
          {/* Orbital rings */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-cyan-primary/40"
            style={{ transform: 'rotateX(70deg) scale(1.4)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-0 rounded-full border border-cyan-bright/20"
            style={{ transform: 'rotateX(70deg) rotateZ(60deg) scale(1.6)' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
      
      {/* Main Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center mb-6"
        style={{ 
          color: '#00E5FF',
          textShadow: '0 0 40px hsla(180, 100%, 50%, 0.5)'
        }}
      >
        Direct Bank Transfer
      </motion.h1>
      
      {/* Subheading */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-10 text-lg sm:text-xl md:text-2xl text-center max-w-2xl mb-12"
        style={{ color: 'hsl(0 0% 80%)' }}
      >
        Secure cross-border and domestic bank transfers with global reach
      </motion.p>
      
      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary-glow min-w-[200px] text-lg"
        >
          Open an Account
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-outline-cyan min-w-[200px] text-lg"
        >
          Contact Us
        </motion.button>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: 'hsl(0 0% 50%)' }}>
          Scroll to explore
        </span>
        <motion.div 
          className="w-8 h-12 rounded-full border-2 flex items-start justify-center p-2"
          style={{ borderColor: 'hsla(180, 100%, 50%, 0.4)' }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-cyan-primary"
            animate={{ 
              y: [0, 8, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
