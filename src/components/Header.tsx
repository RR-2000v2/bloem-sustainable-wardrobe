
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 w-full">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-bloem-purple rounded-full flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-bloem-purple text-2xl">bloem</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-bloem-purple font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-bloem-purple font-medium">
            How it works
          </a>
          <a href="#benefits" className="text-gray-700 hover:text-bloem-purple font-medium">
            Benefits
          </a>
          <Button className="btn-primary">Get Early Access</Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bloem-purple hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bloem-purple hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </a>
            <a
              href="#benefits"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-bloem-purple hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <div className="px-3 py-2">
              <Button className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
