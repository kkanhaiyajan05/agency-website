import ServicePageLayout from '@/components/ServicePageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Integration Solutions | RedBytes',
  description: 'Leverage artificial intelligence to automate processes and enhance user experiences with our AI integration expertise.',
};

export default function AIIntegrationSolutions() {
  const features = [
    "AI strategy consultation and planning",
    "Machine learning model development",
    "Natural language processing integration",
    "Computer vision and image recognition",
    "Chatbot and virtual assistant development",
    "Predictive analytics implementation",
    "AI-powered automation workflows",
    "Model deployment and monitoring"
  ];

  const benefits = [
    "Automated processes and reduced manual work",
    "Enhanced user experiences and engagement",
    "Data-driven insights and decision making"
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "OpenAI GPT", "Hugging Face", "Python",
    "scikit-learn", "FastAPI", "LangChain", "Pinecone", "AWS SageMaker"
  ];

  return (
    <ServicePageLayout
      title="AI Integration Solutions"
      description="Leverage artificial intelligence to automate processes and enhance user experiences. From chatbots to predictive analytics, we help businesses harness the power of AI."
      icon="🤖"
      features={features}
      benefits={benefits}
      technologies={technologies}
    />
  );
}