import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-black-900 to-black-700 text-white">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/19936700/pexels-photo-19936700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="block">Dogra Electronics</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your One-Stop Shop for All Things Electronic
          </p>
          <p className="text-blue-100 mb-8 text-lg max-w-lg">
            Discover our wide range of mobile phones, laptops, speakers, accessories, and services at competitive prices.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/#categories" 
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Products
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
