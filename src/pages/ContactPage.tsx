import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Smartphone, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - Dogra Electronics';
  }, []);

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl">
            Have questions about our products or services? Get in touch with us and we'll be happy to help.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Owner</h3>
                  <p className="text-gray-700">Sh.Rakesh Dogra</p>
                  <p className="text-gray-700">Sh.Deepak Dogra</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a href="tel:+911234567890" className="text-blue-600 hover:text-blue-800 transition-colors">
                    +91 94191-09355 ,
                    +91-60057-02570
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <a 
                    href="https://wa.me/911234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    +91 94191-09355
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a 
                    href="mailto:contact@dograelectronics.com" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    dograelectronics.sales@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-700 mb-2">
                    Border Road, Chak Manga Rakwal, Samba, Jammu and Kashmir - 184121
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm inline-flex items-center"
                  >
                    View on Google Maps
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <div className="text-gray-700">
                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
