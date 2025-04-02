
import { Heart, Leaf, Lock, Zap , Eye} from "lucide-react";

const BenefitCard = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 rounded-full bg-bloem-purple/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Leaf className="h-8 w-8 text-bloem-green" />,
      title: "resourceful",
      description: "Fight fashion waste by keeping clothes in circulation and out of landfills."
    },
    {
      icon: <Zap className="h-8 w-8 text-bloem-purple" />,
      title: "convenient",
      description: "Exchange items on your schedule with no need to coordinate meetups or shipping."
    },
    {
      icon: <Eye className="h-8 w-8 text-bloem-purple" />,
      title: "transparent",
      description: "Track item history, understand your impact, and shop consciously."
    },
    {
      icon: <Heart className="h-8 w-8 text-bloem-lavender" />,
      title: "community",
      description: "Connect with like-minded individuals who share your style and sustainability values."
    },
  ];

  const testimonials = [
    {
      quote: "bloem completely changed how I refresh my wardrobe. It's like having access to an endless closet without the environmental guilt.",
      author: "Sarah L.",
      role: "Early User"
    },
    {
      quote: "The physical racks make exchanges so convenient. I love that I can drop off and pick up items on my own schedule.",
      author: "James T.",
      role: "Beta Tester"
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-bloem-lavender/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Why Choose bloem?</h2>
          <p className="body-md text-gray-600">
            Join a growing community that's making fashion more sustainable, accessible, and personal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
