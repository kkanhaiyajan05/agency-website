import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Transforming Business
          <span className="block text-blue-200">with AI & Cloud Solutions</span>
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          We help startups and growing businesses build scalable, modern software solutions 
          that drive growth and innovation.
        </p>
        <Link
          href="/#contact"
          className="inline-block bg-white text-blue-600 text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition transform hover:scale-105 font-semibold"
        >
          Schedule Free Consultation
        </Link>
      </div>
    </section>
  );
}