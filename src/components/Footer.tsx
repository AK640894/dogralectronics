import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Dogra Electronics</h3>
            <p className="text-gray-300 mb-4">Your One-Stop Shop for All Things Electronic</p>
            <div className="flex items-center space-x-4">
              <a href="tel:+911234567890" className="text-white hover:text-blue-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:contact@dograelectronics.com" className="text-white hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <div className="flex items-start space-x-2 text-gray-300">
              <Clock className="h-5 w-5 mt-0.5" />
              <div>
                <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dogra Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;