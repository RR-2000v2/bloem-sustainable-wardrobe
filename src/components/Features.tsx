
import { ShoppingBag, MapPin, Star, User, Handshake} from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-bloem-lavender/30 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShoppingBag className="h-6 w-6 text-bloem-purple" />,
      title: "digital wardrobe",
      description: "Digitize your closet in seconds with AI. Sell, buy and manage everything effortlessly."
    },
    {
      icon: <MapPin className="h-6 w-6 text-bloem-purple" />,
      title: "physical racks",
      description: "Secure racks in high-traffic spots, making it easy to drop off, pick up, and keep preloved fashion in cycle."
    },
    {
      icon: <Star className="h-6 w-6 text-bloem-purple" />,
      title: 'your page',
      description: "Discover outfits and pre-loved finds just for you. Get nearby rack picks and connect with fellow bloemers."
    },
    {
      icon: <Handshake className="h-6 w-6 text-bloem-purple" />,
      title: 'thriving community',
      description: "Connect with local bloemers, follow closets you love, and discover the stories behind each piece."
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-bloem-ivory to-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Circular Fashion Made Easy</h2>
          <p className="body-md text-gray-600">
          bloem makes fashion circular, smart, and community-powered. snap your items, list them in your digital wardrobe, and drop them off at local racks. discover pieces you'll love, recommended by AI, shared by people like you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
