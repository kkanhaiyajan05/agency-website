import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Nanosoft Technologies</h3>
            <p className="text-gray-300 mb-4">
              Custom software solutions for growing Canadian businesses. 
              Transforming ideas into powerful digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services/custom-software-development" className="hover:text-blue-400 transition">Custom Software Development</Link></li>
              <li><Link href="/services/net-modernization" className="hover:text-blue-400 transition">.NET Modernization</Link></li>
              <li><Link href="/services/net-migration" className="hover:text-blue-400 transition">.NET Migration</Link></li>
              <li><Link href="/services/digital-transformation" className="hover:text-blue-400 transition">Digital Transformation</Link></li>
              <li><Link href="/services/ai-integration-solutions" className="hover:text-blue-400 transition">AI Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/#about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-blue-400 transition">Our Services</Link></li>
              <li><Link href="/#contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 hello@redbytes.ca</p>
              <p>📞 (416) 123-4567</p>
              <p>📍 Toronto, ON, Canada</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Nanosoft Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}