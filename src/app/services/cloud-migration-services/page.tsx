import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Migration Services | RedBytes',
  description: 'Seamlessly migrate your applications and infrastructure to the cloud for better scalability, performance, and cost efficiency.',
};

export default function CloudMigrationServices() {
  const features = [
    "Cloud readiness assessment",
    "Migration strategy and planning", 
    "Application and data migration",
    "Infrastructure setup and optimization",
    "Security configuration and compliance",
    "Performance monitoring and tuning",
    "Cost optimization recommendations",
    "24/7 support during migration"
  ];

  const benefits = [
    "Improved scalability and flexibility", 
    "Reduced infrastructure costs",
    "Enhanced disaster recovery capabilities"
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
    "Terraform", "Jenkins", "CloudFormation", "Ansible", "Prometheus"
  ];

  return (
    <ServicePageLayout
      title="Cloud Migration Services"
      description="Seamlessly migrate your applications and infrastructure to the cloud for better scalability, performance, and cost efficiency. Our experts ensure minimal downtime and maximum reliability."
      icon="☁️"
      features={features}
      benefits={benefits}
      technologies={technologies}
    />
  );
}