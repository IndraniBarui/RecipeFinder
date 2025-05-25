import { ChefHat, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold">Recipe Finder</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Discover delicious recipes from around the world and create amazing meals for your family and friends.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">All Recipes</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Submit Recipe</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Popular Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Breakfast</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Dinner</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Desserts</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Vegetarian</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Email: hello@recipefinder.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Recipe Finder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;