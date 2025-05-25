import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-blue-600" />
            <span className="text-xl md:text-2xl font-bold text-gray-900">Dogra Electronics</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
            >
              Contact Us
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'} transition-colors`}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;