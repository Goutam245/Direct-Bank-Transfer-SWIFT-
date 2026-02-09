import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import ProminenceLogo from './ProminenceLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      label: 'Services', 
      hasDropdown: true,
      items: [
        'Direct Bank Transfer (SWIFT)',
        'Cheque Payment',
        'IP2IP Transfer',
        'Card Services',
      ]
    },
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Account Login', href: '#' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-darkest/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid hsla(180, 100%, 50%, 0.15)' : 'none'
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <ProminenceLogo size="sm" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button 
                      className="flex items-center gap-1 text-sm font-medium transition-colors"
                      style={{ color: 'hsl(0 0% 85%)' }}
                    >
                      {item.label}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 rounded-xl overflow-hidden"
                        style={{
                          background: 'hsl(216 56% 12%)',
                          border: '1px solid hsla(180, 100%, 50%, 0.2)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
                        }}
                      >
                        {item.items?.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-4 py-3 text-sm transition-all hover:bg-primary/10"
                            style={{ 
                              color: 'hsl(0 0% 80%)',
                              borderBottom: subIndex < (item.items?.length || 0) - 1 
                                ? '1px solid hsla(180, 100%, 50%, 0.1)' 
                                : 'none'
                            }}
                          >
                            {subItem}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-cyan-primary"
                    style={{ color: 'hsl(0 0% 85%)' }}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              className="p-2 rounded-lg transition-colors hover:bg-white/5"
              style={{ color: 'hsl(0 0% 70%)' }}
            >
              <Search size={20} />
            </button>
            <button className="btn-primary-glow !py-3 !px-6 text-sm">
              Open an Account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: 'hsl(189 100% 50%)' }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-6"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href || '#'}
                  className="px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-white/5"
                  style={{ color: 'hsl(0 0% 85%)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 px-4">
                <button className="btn-primary-glow w-full !py-3 text-sm">
                  Open an Account
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
