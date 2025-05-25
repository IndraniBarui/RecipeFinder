import React from 'react'
import RecipeCard from '@/components/RecipeCrad'
import RecipeCrad from '@/components/RecipeCrad'
export default function index() {
  
  return (
   <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Recipe Modal using shadcn Dialog */}
      {selectedRecipe && (
        <Dialog open={!!selectedRecipe} onOpenChange={(open) => !open && setSelectedRecipe(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedRecipe.title}</DialogTitle>
            </DialogHeader>
            {/* You can customize this part or embed your <RecipeModal> content here */}
            <div className="space-y-4">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="w-full rounded-lg"
              />
              <p>{selectedRecipe.description}</p>
              {/* Add more details as needed */}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
