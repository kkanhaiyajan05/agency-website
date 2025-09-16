import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '.NET Framework to .NET Core Migration Services | Nanosoft Technologies',
  description: 'Expert .NET Framework to .NET Core migration services in Canada. Migrate legacy applications to modern .NET platforms for better performance, cross-platform support, and long-term maintainability.',
  keywords: ['.NET Framework migration', '.NET Core migration', '.NET 8 upgrade', 'legacy .NET modernization', '.NET migration consulting'],
  openGraph: {
    title: '.NET Migration Services - Framework to Core/5+ Migration',
    description: 'Seamlessly migrate your .NET Framework applications to modern .NET Core/.NET 5+ platforms.',
  },
};

export default function NetMigration() {
  const features = [
    "Comprehensive .NET Framework application audit",
    "Migration roadmap and strategy development",
    "Code analysis and compatibility assessment",
    "Step-by-step migration process with minimal downtime",
    "Database and data layer migration",
    "Third-party dependency evaluation and updates",
    "Performance testing and optimization",
    "Post-migration support and maintenance"
  ];

  const benefits = [
    "Cross-platform deployment capabilities",
    "Significant performance improvements and reduced memory usage",
    "Access to latest .NET features and long-term support"
  ];

  const technologies = [
    ".NET 8", ".NET Core", "ASP.NET Core", "Entity Framework Core",
    "SQL Server", "PostgreSQL", "Docker", "Azure", "Visual Studio"
  ];

  return (
    <ServicePageLayout
      title=".NET Migration"
      description="Migrate your legacy .NET Framework applications to .NET Core/.NET 5+ for improved performance, cross-platform compatibility, and access to the latest features and long-term support."
      icon="📦"
      features={features}
      benefits={benefits}
      technologies={technologies}
    />
  );
}