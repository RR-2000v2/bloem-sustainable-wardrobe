
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="font-bold text-bloem-purple text-2xl">bloem</span>
            </a>
            <p className="text-gray-600 mb-4 max-w-md">
              Revolutionizing sustainable fashion through our innovative 
              digital wardrobe and physical rack exchange system.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-bloem-lavender/20 flex items-center justify-center text-bloem-purple hover:bg-bloem-lavender/40 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bloem-lavender/20 flex items-center justify-center text-bloem-purple hover:bg-bloem-lavender/40 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bloem-lavender/20 flex items-center justify-center text-bloem-purple hover:bg-bloem-lavender/40 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@bloem.com" className="w-10 h-10 rounded-full bg-bloem-lavender/20 flex items-center justify-center text-bloem-purple hover:bg-bloem-lavender/40 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Discover</h3>
            <ul className="space-y-3">
              {["How It Works", "Locations", "Our Mission", "Sustainability"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-bloem-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Partners", "Press", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-bloem-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} bloem. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-bloem-purple text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-bloem-purple text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-bloem-purple text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
