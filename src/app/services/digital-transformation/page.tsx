import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Transformation | Nanosoft Technologies',
  description: 'Comprehensive digital strategy and implementation to modernize your entire business ecosystem with cutting-edge technology solutions.',
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