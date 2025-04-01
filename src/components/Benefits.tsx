
import { Heart, Leaf, Lock, Zap } from "lucide-react";

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
      title: "Eco-Friendly",
      description: "Reduce fashion waste and lower your carbon footprint by giving clothes a second life."
    },
    {
      icon: <Zap className="h-8 w-8 text-bloem-purple" />,
      title: "Convenient",
      description: "Exchange items on your schedule with no need to coordinate meetups or shipping."
    },
    {
      icon: <Lock className="h-8 w-8 text-bloem-purple" />,
      title: "Secure",
      description: "Our physical racks and verification system ensure safe, reliable exchanges."
    },
    {
      icon: <Heart className="h-8 w-8 text-bloem-lavender" />,
      title: "Community",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-bloem-purple">★</span>
                  ))}
                </div>
                <p className="text-lg italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-bloem-lavender flex items-center justify-center mr-4">
                    <span className="text-sm font-bold text-bloem-purple">
                      {testimonial.author.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
