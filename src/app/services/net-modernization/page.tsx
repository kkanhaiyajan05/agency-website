import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '.NET Application Modernization Services Canada | Nanosoft Technologies',
  description: 'Professional .NET modernization services in Canada. Upgrade legacy .NET Framework applications with modern architecture, microservices, and cloud-native patterns for improved performance.',
  keywords: ['.NET modernization', '.NET Core upgrade', 'legacy application modernization', 'microservices architecture', '.NET consulting Canada'],
  openGraph: {
    title: '.NET Modernization Services - Upgrade Your Applications',
    description: 'Transform your legacy .NET applications with modern frameworks and cloud-native architecture patterns.',
  },
};

export default function NetModernization() {
  const features = [
    "Legacy .NET Framework assessment and analysis",
    "Modern architecture design and planning",
    "Microservices and API-first architecture implementation",
    "Cloud-native patterns and containerization",
    "Performance optimization and scalability improvements",
    "Security enhancements and compliance updates",
    "Modern UI/UX with latest front-end frameworks",
    "Comprehensive testing and quality assurance"
  ];

  const benefits = [
    "Improved application performance and scalability",
    "Enhanced security and compliance capabilities",
    "Reduced maintenance costs and technical debt"
  ];

  const technologies = [
    ".NET 8", ".NET Core", "ASP.NET Core", "Entity Framework Core",
    "Docker", "Kubernetes", "Azure", "React", "Angular", "Blazor"
  ];

  return (
    <ServicePageLayout
      title=".NET Modernization"
      description="Upgrade your .NET applications with modern frameworks, architecture patterns, and cloud-native approaches. Transform legacy applications into scalable, maintainable, and high-performance solutions."
      icon="🔧"
      features={features}
      benefits={benefits}
      technologies={technologies}
    />
  );
}