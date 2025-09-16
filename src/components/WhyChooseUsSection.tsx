export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Canada-Based Excellence",
      description: "Local expertise with deep understanding of Canadian business regulations and market needs.",
      icon: "🍁"
    },
    {
      title: "Startup-Friendly Approach", 
      description: "Flexible pricing and agile methodologies designed specifically for growing businesses.",
      icon: "🚀"
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered 100+ projects for Canadian startups and scale-ups.",
      icon: "✅"
    },
    {
      title: "End-to-End Support",
      description: "From initial consultation to ongoing maintenance, we're your long-term technology partner.",
      icon: "🤝"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Nanosoft Technologies?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We understand the unique challenges of Canadian startups and provide tailored solutions that grow with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}