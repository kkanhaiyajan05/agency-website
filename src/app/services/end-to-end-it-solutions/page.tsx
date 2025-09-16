import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'End-to-End IT Solutions | RedBytes',
  description: 'Complete technology consulting and implementation from planning to deployment and ongoing support.',
};

export default function EndToEndITSolutions() {
  const features = [
    "Technology strategy and roadmap development",
    "System architecture design and planning",
    "Full-stack development and implementation",
    "Third-party integrations and APIs",
    "Quality assurance and testing",
    "Deployment and infrastructure setup",
    "User training and documentation",
    "Ongoing support and maintenance"
  ];

  const benefits = [
    "Single point of contact for all IT needs",
    "Cohesive technology ecosystem",
    "Long-term partnership and support"
  ];

  const technologies = [
    "React", "Next.js", "Node.js", ".NET", "Python", "Java",
    "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "Kubernetes"
  ];

  return (
    <ServicePageLayout
      title="End-to-End IT Solutions"
      description="Complete technology consulting and implementation from planning to deployment. We serve as your comprehensive IT partner, handling every aspect of your technology needs."
      icon="🔧"
      features={features}
      benefits={benefits}
      technologies={technologies}
    />
  );
}