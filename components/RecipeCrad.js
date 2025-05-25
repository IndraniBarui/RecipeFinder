import { Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RecipeCrad = ({ recipe, onClick }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <Badge className="absolute top-2 right-2 bg-orange-600 hover:bg-orange-700">
          {recipe.category}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {recipe.title}
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className={getDifficultyColor(recipe.difficulty)}>
            <ChefHat className="h-3 w-3 mr-1" />
            {recipe.difficulty}
          </Badge>
          <span className="text-sm text-gray-500">
            {recipe.ingredients.length} ingredients
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCrad;
