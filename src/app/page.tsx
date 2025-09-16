import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI & Cloud Solutions for Canadian Businesses",
  description: "Transform your business with Nanosoft Technologies. Expert AI integration, cloud migration, .NET modernization, and digital transformation services for Canadian startups and growing businesses.",
  keywords: [
    "AI integration Canada",
    "cloud migration Toronto", 
    ".NET modernization services",
    "digital transformation consultant",
    "Canadian software development",
    "startup technology partner",
    "custom software solutions"
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
