import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development | RedBytes',
  description: 'Build tailored software solutions that perfectly fit your business needs and workflows with our expert custom development team.',
};

export default function CustomSoftwareDevelopment() {
  const features = [
    "Requirements analysis and technical specification",
    "Custom web and mobile application development",
    "Database design and optimization",
    "API development and integration",
    "User interface and experience design",
    "Quality assurance and testing",
    "Deployment and go-live support",
    "Post-launch maintenance and updates"
  ];

  const benefits = [
    "Perfect fit for your unique business processes",
    "Scalable architecture that grows with your business", 
    "Complete ownership of your software solution"
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "Python", "TypeScript", 
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes"
  ];

  return (
    <ServicePageLayout
      title="Custom Software Development"
      description="Build tailored software solutions that perfectly fit your business needs and workflows. Our expert team creates scalable, maintainable applications designed specifically for your requirements."
      icon="💻"
      features={features}
      benefits={benefits}
      technologies={technologies}
    />
  );
}