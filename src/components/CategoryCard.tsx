import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 mb-4">{category.description}</p>
        
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Phone className="mr-2 h-4 w-4" />
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;