import { Link } from 'react-router-dom';
import { Category } from '../types';
import CategoryCard from './CategoryCard';

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid = ({ categories }: CategoryGridProps) => {
  return (
    <div id="categories" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryGrid;