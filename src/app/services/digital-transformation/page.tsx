import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Transformation Consulting Services Canada | Nanosoft Technologies',
  description: 'Strategic digital transformation consulting in Canada. Modernize your business with comprehensive digital strategy, process optimization, and cutting-edge technology implementation.',
  keywords: ['digital transformation', 'digital strategy consulting', 'business process digitization', 'technology modernization Canada', 'digital innovation'],
  openGraph: {
    title: 'Digital Transformation Consulting - Modernize Your Business',
    description: 'Comprehensive digital strategy and implementation to transform your entire business ecosystem.',
  },
};

export default function DigitalTransformation() {
  const features = [
    "Digital strategy development and roadmap creation",
    "Business process analysis and optimization",
    "Technology stack modernization and integration",
    "Data analytics and business intelligence implementation",
    "Customer experience transformation",
    "Workflow automation and process digitization",
    "Change management and employee training",
    "Continuous monitoring and optimization"
  ];

  const benefits = [
    "Increased operational efficiency and productivity",
    "Enhanced customer experiences and engagement",
    "Data-driven decision making and competitive advantage"
  ];

  const technologies = [
    "Cloud Platforms", "AI/ML", "IoT", "Blockchain", "React/Next.js",
    "Power BI", "Tableau", "Salesforce", "Microsoft 365", "Azure"
  ];

  return (
    <ServicePageLayout
      title="Digital Transformation"
      description="Comprehensive digital strategy and implementation to modernize your entire business ecosystem. We help organizations leverage cutting-edge technology to drive innovation, efficiency, and growth."
      icon="🚀"
      features={features}
      benefits={benefits}
      technologies={technologies}
    />
  );
}