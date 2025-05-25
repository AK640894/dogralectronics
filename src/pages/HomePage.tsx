import { useEffect } from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import { categories } from '../data/categories';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Dogra Electronics - Your One-Stop Shop for All Things Electronic';
  }, []);

  return (
    <div className="pt-16">
      <Hero />
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Our Products & Services</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Explore our wide range of electronic products and services designed to meet all your technology needs.
          </p>
          <CategoryGrid categories={categories} />
        </div>
      </section>
      
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose Dogra Electronics?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We are committed to providing quality products and exceptional service to our customers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">We offer a wide selection of high-quality electronic products from trusted brands.</p>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
              <p className="text-gray-600">Our knowledgeable staff can help you find the perfect products for your needs.</p>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Excellent Service</h3>
              <p className="text-gray-600">We provide exceptional customer service and after-sales support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;