"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState} from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import RecipeCrad from "@/components/RecipeCrad";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegetarian', 'Quick Meals'];

const recipes = [
  {
    id: 1,
    title: 'Classic Chicken Parmesan',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Dinner',
    cookTime: '45 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '4 boneless chicken breasts',
      '2 cups Italian breadcrumbs',
      '1 cup grated Parmesan cheese',
      '2 eggs beaten',
      '2 cups marinara sauce',
      '2 cups mozzarella cheese',
      '1/4 cup olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C)',
      'Pound chicken breasts to even thickness',
      'Season with salt and pepper',
      'Dip in beaten eggs, then coat with breadcrumb mixture',
      'Heat olive oil in large skillet over medium-high heat',
      'Cook chicken until golden brown, about 4-5 minutes per side',
      'Transfer to baking dish, top with marinara and cheese',
      'Bake for 20-25 minutes until cheese melts and chicken is cooked through'
    ]
  },
  {
    id: 2,
    title: 'Avocado Toast with Poached Egg',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
    category: 'Breakfast',
    cookTime: '15 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '2 fresh eggs',
      '1 tbsp white vinegar',
      'Salt and pepper to taste',
      'Red pepper flakes',
      'Lemon juice',
      'Everything bagel seasoning'
    ],
    instructions: [
      'Toast bread slices until golden brown',
      'Mash avocado with lemon juice, salt, and pepper',
      'Bring water to boil, add vinegar',
      'Create whirlpool and gently drop eggs',
      'Poach for 3-4 minutes',
      'Spread avocado on toast',
      'Top with poached egg and seasonings'
    ]
  },
  {
    id: 3,
    title: 'Chocolate Chip Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    category: 'Dessert',
    cookTime: '25 mins',
    servings: 24,
    difficulty: 'Easy',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 cup butter softened',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '1 tsp baking soda',
      '1 tsp salt',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Mix flour, baking soda, and salt in bowl',
      'Cream butter and sugars until fluffy',
      'Beat in eggs and vanilla',
      'Gradually add flour mixture',
      'Stir in chocolate chips',
      'Drop rounded tablespoons on ungreased baking sheet',
      'Bake 9-11 minutes until golden brown'
    ]
  },
  {
    id: 4,
    title: 'Mediterranean Quinoa Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    category: 'Vegetarian',
    cookTime: '20 mins',
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
      '2 cups cooked quinoa',
      '1 cucumber diced',
      '2 tomatoes diced',
      '1/2 red onion diced',
      '1/2 cup kalamata olives',
      '1/2 cup feta cheese',
      '1/4 cup olive oil',
      '2 tbsp lemon juice',
      'Fresh herbs (parsley, mint)',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook quinoa according to package directions and let cool',
      'Dice cucumber, tomatoes, and red onion',
      'Whisk together olive oil, lemon juice, salt, and pepper',
      'Combine quinoa with vegetables',
      'Add olives and feta cheese',
      'Toss with dressing',
      'Garnish with fresh herbs',
      'Chill for 30 minutes before serving'
    ]
  },
  {
    id: 5,
    title: '15-Minute Pasta Primavera',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc654d52d?w=400&h=300&fit=crop',
    category: 'Quick Meals',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '12 oz pasta',
      '2 cups mixed vegetables',
      '3 cloves garlic minced',
      '1/4 cup olive oil',
      '1/2 cup heavy cream',
      '1/2 cup Parmesan cheese',
      'Fresh basil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Heat olive oil in large skillet',
      'Sauté garlic and vegetables until tender',
      'Add cream and simmer',
      'Toss with cooked pasta',
      'Add Parmesan cheese and basil',
      'Season with salt and pepper',
      'Serve immediately'
    ]
  },
  {
    id: 6,
    title: 'Caesar Salad Wraps',
    image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=400&h=300&fit=crop',
    category: 'Lunch',
    cookTime: '10 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '4 large tortillas',
      '6 cups romaine lettuce',
      '1/2 cup Caesar dressing',
      '1/2 cup croutons',
      '1/3 cup Parmesan cheese',
      '2 grilled chicken breasts',
      'Black pepper to taste'
    ],
    instructions: [
      'Chop romaine lettuce',
      'Slice grilled chicken',
      'Toss lettuce with Caesar dressing',
      'Add chicken and Parmesan cheese',
      'Place mixture on tortillas',
      'Add croutons for crunch',
      'Roll up tightly',
      'Cut in half and serve'
    ]
  }
];

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.ingredients.some(ingredient => 
                           ingredient.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header/>
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Recipe Finder</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover delicious recipes from around the world. Search by ingredients, 
            cuisine type, or cooking time to find your perfect meal.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search recipes or ingredients..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg bg-white text-gray-900"
            />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-orange-600 hover:bg-orange-700 text-white"
                  : "hover:bg-orange-100"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCrad
              key={recipe.id}
              recipe={recipe}
              onClick={() => setSelectedRecipe(recipe)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
              No recipes found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or selecting a different category.
            </p>
          </div>
        )}
      </div>

      <Footer/>
      {selectedRecipe && (
        <Dialog open={!!selectedRecipe} onOpenChange={(open) => !open && setSelectedRecipe(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedRecipe.title}</DialogTitle>
            </DialogHeader>
          
            <div className="space-y-4">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="w-full rounded-lg"
              />
              <p>{selectedRecipe.description}</p>
             
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
