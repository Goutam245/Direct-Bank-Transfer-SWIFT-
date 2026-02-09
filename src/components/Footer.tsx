import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import ProminenceLogo from './ProminenceLogo';

const Footer = () => {
  const services = [
    'Direct Bank Transfer (SWIFT)',
    'Cheque Payment',
    'IP2IP Transfer',
    'Card Services',
    'Investment Services',
    'View All Services',
  ];

  const company = [
    'About Us',
    'Leadership Team',
    'Careers',
    'Press & Media',
    'Sustainability',
  ];

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Compliance',
    'Anti-Fraud Notice',
    'Regulatory Information',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer 
      className="relative pt-20 pb-8 px-4 overflow-hidden"
      style={{ background: 'hsl(216 56% 8%)' }}
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-cyan-primary/5 blur-[100px] rounded-full" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Column 1 - Logo & About */}
          <div className="lg:col-span-2">
            <ProminenceLogo size="sm" />
            <p 
              className="mt-6 text-sm leading-relaxed max-w-sm"
              style={{ color: 'hsl(0 0% 55%)' }}
            >
              Prominence Bank delivers premium private banking services to discerning 
              clients worldwide. Experience exceptional service, global reach, and 
              unwavering commitment to your financial goals.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-primary" />
                <span className="text-sm" style={{ color: 'hsl(0 0% 60%)' }}>
                  contact@prominencebank.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-primary" />
                <span className="text-sm" style={{ color: 'hsl(0 0% 60%)' }}>
                  +1 (800) 555-0199
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan-primary" />
                <span className="text-sm" style={{ color: 'hsl(0 0% 60%)' }}>
                  London • New York • Singapore
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: 'hsla(180, 100%, 50%, 0.1)',
                    border: '1px solid hsla(180, 100%, 50%, 0.2)'
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-cyan-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ color: 'hsl(189 100% 50%)' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-cyan-primary"
                    style={{ color: 'hsl(0 0% 55%)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ color: 'hsl(189 100% 50%)' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-cyan-primary"
                    style={{ color: 'hsl(0 0% 55%)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h4 
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ color: 'hsl(189 100% 50%)' }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-cyan-primary"
                    style={{ color: 'hsl(0 0% 55%)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px w-full mb-8"
          style={{ background: 'hsla(180, 100%, 50%, 0.15)' }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'hsl(0 0% 45%)' }}>
            © {new Date().getFullYear()} Prominence Bank. All rights reserved. 
            Prominence Bank is a registered trademark. Member FDIC.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#" 
              className="text-xs transition-colors hover:text-cyan-primary"
              style={{ color: 'hsl(0 0% 45%)' }}
            >
              Sitemap
            </a>
            <a 
              href="#" 
              className="text-xs transition-colors hover:text-cyan-primary"
              style={{ color: 'hsl(0 0% 45%)' }}
            >
              Accessibility
            </a>
            <a 
              href="#" 
              className="text-xs transition-colors hover:text-cyan-primary"
              style={{ color: 'hsl(0 0% 45%)' }}
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
