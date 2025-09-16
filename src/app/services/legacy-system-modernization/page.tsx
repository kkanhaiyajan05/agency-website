import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legacy System Modernization | RedBytes',
  description: 'Transform outdated systems into modern, maintainable, and scalable solutions that drive business growth.',
};

export default function LegacySystemModernization() {
  const features = [
    "Legacy system audit and assessment",
    "Modernization strategy and roadmap",
    "Data migration and preservation",
    "API modernization and integration",
    "User interface redesign and improvement",
    "Performance optimization",
    "Security enhancements",
    "Staff training and documentation"
  ];

  const benefits = [
    "Improved performance and reliability",
    "Enhanced security and compliance",
    "Reduced maintenance costs and technical debt"
  ];

  const technologies = [
    ".NET Core", "React", "Angular", "Node.js", "Python",
    "PostgreSQL", "SQL Server", "Azure", "AWS", "Docker"
  ];

  return (
    <ServicePageLayout
      title="Legacy System Modernization"
      description="Transform outdated systems into modern, maintainable, and scalable solutions. We help businesses upgrade their legacy applications while preserving critical data and functionality."
      icon="🔄"
      features={features}
      benefits={benefits}
      technologies={technologies}
    />
  );
}