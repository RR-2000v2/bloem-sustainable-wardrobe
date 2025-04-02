
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
      description: "Upload items with AI assistance, and choose to swap, sell, or give away your clothes."
    },
    {
      icon: <MapPin className="h-6 w-6 text-bloem-purple" />,
      title: "physical racks",
      description: "Access secure racks in high-traffic locations with items tagged for easy tracking."
    },
    {
      icon: <Star className="h-6 w-6 text-bloem-purple" />,
      title: 'your page',
      description: "Get suggestions for nearby racks with clothes you'd love and connect with like-minded users."
    },
    {
      icon: <Handshake className="h-6 w-6 text-bloem-purple" />,
      title: 'thriving community',
      description: "Be part of something meaningful. Share stories, follow closets you love, connect with local bloemers, and discover the people behind the pieces you buy."
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-bloem-ivory to-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Sustainable Fashion Made Easy</h2>
          <p className="body-md text-gray-600">
            bloem combines digital convenience with physical exchanges to create a seamless, sustainable clothing experience.
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
