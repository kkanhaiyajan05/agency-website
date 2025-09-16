import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevOps Implementation | RedBytes',
  description: 'Streamline your development workflow with automated CI/CD pipelines and infrastructure management solutions.',
};

export default function DevOpsImplementation() {
  const features = [
    "CI/CD pipeline setup and automation",
    "Infrastructure as Code (IaC) implementation",
    "Container orchestration with Docker/Kubernetes", 
    "Monitoring and alerting systems",
    "Automated testing and quality gates",
    "Security scanning and compliance",
    "Performance optimization",
    "Team training and best practices"
  ];

  const benefits = [
    "Faster deployment cycles and reduced errors",
    "Improved collaboration between development and operations",
    "Enhanced system reliability and uptime"
  ];

  const technologies = [
    "Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes",
    "Terraform", "Ansible", "Prometheus", "Grafana", "ELK Stack"
  ];

  return (
    <ServicePageLayout
      title="DevOps Implementation"
      description="Streamline your development workflow with automated CI/CD pipelines and infrastructure management. Accelerate delivery while maintaining high quality and reliability."
      icon="⚡"
      features={features}
      benefits={benefits}
      technologies={technologies}
    />
  );
}