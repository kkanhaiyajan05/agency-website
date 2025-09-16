export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your business needs, technical requirements, and goals to create a comprehensive project roadmap."
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Our team designs user-friendly interfaces and scalable system architecture tailored to your specific requirements."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Using agile methodology, we build your solution with rigorous testing to ensure quality and performance."
    },
    {
      step: "04",
      title: "Launch & Support", 
      description: "We deploy your solution and provide ongoing support, maintenance, and optimization as your business grows."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to deployment, we follow a proven process that ensures your project&apos;s success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-3/4 w-1/2 h-0.5 bg-blue-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}