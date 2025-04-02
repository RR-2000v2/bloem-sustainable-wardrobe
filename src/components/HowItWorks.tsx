
import { Check, MapPin } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload your items",
      description: "Use our AI-assisted uploading feature to quickly add your clothing items to your digital wardrobe.",
    },
    {
      number: "02",
      title: "Choose how to share",
      description: "Decide if you want to sell or give away each item. Set your preferences and conditions.",
    },
    {
      number: "03",
      title: "Connect with others",
      description: "Browse recommendations, connect with users who have similar styles, or find items you love.",
    },
    {
      number: "04",
      title: "Exchange at a rack",
      description: "Use our physical racks in convenient locations to securely exchange items without meeting in person.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">How bloem Works</h2>
          <p className="body-md text-gray-600">
          bloem makes fashion circular, smart, and community-powered. Snap your items, list them in your digital wardrobe, and drop them off at local racks. Discover pieces you'll love, recommended by AI, shared by people like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative mb-6">
                <div className="w-12 h-12 bg-bloem-lavender rounded-full flex items-center justify-center">
                  <span className="text-bloem-purple font-bold">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-12 h-0.5 bg-bloem-lavender w-[calc(100%-3rem)]"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-bloem-lavender/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="heading-md mb-4">The Physical Rack System</h3>
              <p className="body-md text-gray-700 mb-6">
                What makes bloem unique is our network of secure physical racks placed in convenient locations. Each item is tagged with a unique code, allowing for contactless, secure exchanges.
              </p>
              <ul className="space-y-3">
                {[
                  "No need to meet strangers for exchanges",
                  "Available 24/7 in convenient locations",
                  "Items are securely locked until authorized pickup",
                  "Eco-friendly alternative to shipping",
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-5 w-5 text-bloem-green" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-bloem-purple/10 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-4 bg-white rounded-2xl shadow-md"></div>
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 bg-bloem-green/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <MapPin className="h-8 w-8 text-bloem-green" />
                      </div>
                      <p className="text-gray-700 font-medium">Physical rack visualization coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
