import Link from 'next/link';

const services = [
  {
    title: "Custom Software Development",
    description: "Build tailored software solutions that perfectly fit your business needs and workflows.",
    icon: "💻",
    slug: "custom-software-development"
  },
  {
    title: "Legacy System Modernization", 
    description: "Transform outdated systems into modern, maintainable, and scalable solutions.",
    icon: "🔄",
    slug: "legacy-system-modernization"
  },
  {
    title: "Cloud Migration Services",
    description: "Seamlessly migrate your applications and infrastructure to the cloud for better scalability.",
    icon: "☁️", 
    slug: "cloud-migration-services"
  },
  {
    title: ".NET Modernization",
    description: "Upgrade your .NET applications with modern frameworks, architecture patterns, and cloud-native approaches.",
    icon: "🔧",
    slug: "net-modernization"
  },
  {
    title: ".NET Migration",
    description: "Migrate your legacy .NET Framework applications to .NET Core/.NET 5+ for improved performance.",
    icon: "📦",
    slug: "net-migration"
  },
  {
    title: "Digital Transformation",
    description: "Comprehensive digital strategy and implementation to modernize your entire business ecosystem.",
    icon: "🚀",
    slug: "digital-transformation"
  },
  {
    title: "DevOps Implementation",
    description: "Streamline your development workflow with automated CI/CD pipelines and infrastructure.",
    icon: "⚡",
    slug: "devops-implementation"
  },
  {
    title: "AI Integration Solutions",
    description: "Leverage artificial intelligence to automate processes and enhance user experiences.",
    icon: "🤖",
    slug: "ai-integration-solutions"
  },
  {
    title: "End-to-End IT Solutions",
    description: "Complete technology consulting and implementation from planning to deployment.",
    icon: "🔧",
    slug: "end-to-end-it-solutions"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive software solutions tailored for startups and growing businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}