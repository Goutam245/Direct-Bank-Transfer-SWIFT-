import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceOverview from '@/components/ServiceOverview';
import KeyBenefits from '@/components/KeyBenefits';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import EligibilitySection from '@/components/EligibilitySection';
import FAQSection from '@/components/FAQSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update meta tags for SEO
    document.title = 'SWIFT Transfer Services | Direct Bank Transfer | Prominence Bank';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Send secure international wire transfers through SWIFT network. Global reach, bank-grade verification, and enhanced tracking. Available to Prominence Bank account holders.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Send secure international wire transfers through SWIFT network. Global reach, bank-grade verification, and enhanced tracking. Available to Prominence Bank account holders.';
      document.head.appendChild(meta);
    }
    
    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'international wire transfer, SWIFT payment, bank wire, cross-border transfer, SEPA transfer, SWIFT BIC, IBAN, send money internationally');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'international wire transfer, SWIFT payment, bank wire, cross-border transfer, SEPA transfer, SWIFT BIC, IBAN, send money internationally';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServiceOverview />
      <KeyBenefits />
      <HowItWorks />
      <UseCases />
      <EligibilitySection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  );
};

export default Index;
