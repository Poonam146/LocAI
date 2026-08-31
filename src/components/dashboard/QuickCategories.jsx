import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Utensils,
  Coffee,
  Bed,
  Trees,
  Landmark,
  ShoppingBag,
  Cross,
  Fuel,
  CreditCard,
  Building2,
  ArrowRight
} from 'lucide-react';
import CategoryCard from '../common/CategoryCard';
import Button from '../ui/Button';

export const QuickCategories = () => {
  const navigate = useNavigate();

  const categories = [
    { label: 'Restaurants', icon: Utensils, count: '140+' },
    { label: 'Cafés', icon: Coffee, count: '95+' },
    { label: 'Hotels', icon: Bed, count: '60+' },
    { label: 'Parks', icon: Trees, count: '35+' },
    { label: 'Tourist Places', icon: Landmark, count: '50+' },
    { label: 'Shopping', icon: ShoppingBag, count: '120+' },
    { label: 'Hospitals', icon: Cross, count: '25+' },
    { label: 'Petrol Pumps', icon: Fuel, count: '40+' },
    { label: 'Temples', icon: Building2, count: '30+' },
    { label: 'ATMs', icon: CreditCard, count: '75+' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">
          Explore Categories
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/explore')}
          rightIcon={ArrowRight}
          className="text-xs text-indigo-600 font-semibold hover:bg-indigo-50"
        >
          View All
        </Button>
      </div>

      {/* Horizontal Scrollable Bar on Mobile, Flex/Grid on Desktop */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
        {categories.map((cat) => (
          <div key={cat.label} className="min-w-[130px] sm:min-w-[140px] flex-1 snap-start">
            <CategoryCard
              label={cat.label}
              icon={cat.icon}
              count={`${cat.count} nearby`}
              path="/explore"
              className="p-4 rounded-xl shadow-2xs"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickCategories;
