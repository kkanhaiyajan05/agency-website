import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '.NET Migration | Nanosoft Technologies',
  description: 'Migrate your legacy .NET Framework applications to .NET Core/.NET 5+ for improved performance, cross-platform compatibility, and modern features.',
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