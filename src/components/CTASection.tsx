"use client";
import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Schedule a free consultation with our experts and discover how we can help 
          accelerate your digital transformation journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#contact-form"
            className="bg-white text-blue-600 text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition transform hover:scale-105 font-semibold"
          >
            Schedule Free Consultation
          </Link>
          <Link
            href="tel:+1-226-978-9401"
            className="border-2 border-white text-white text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Call Now: (226) 978-9401
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-blue-100">krishjan05@gmail.com</p>
          </div>
          <div className="text-white">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-blue-100">(226) 978-9401</p>
          </div>
          <div className="text-white">
            <div className="text-3xl mb-2">📍</div>
            <h3 className="font-semibold mb-1">Visit Us</h3>
            <p className="text-blue-100">Toronto, ON, Canada</p>
          </div>
        </div>
      </div>
    </section>
  );
}