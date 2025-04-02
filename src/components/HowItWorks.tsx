
import { Check, MapPin } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "upload items",
      description: "Use AI-assisted uploads to quickly add pieces to your digital wardrobe.",
    },
    {
      number: "02",
      title: "rent hangers",
      description: "Choose a rack near you and link them with a QR code.",
    },
    {
      number: "03",
      title: "track sales",
      description: "Monitor interest and sales in real time, right from the app.",
    },
    {
      number: "04",
      title: "discover",
      description: "Follow bloemers, get personalized recommendation, love what you find.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4"><span className="text-bloem-purple">bloem</span> with us</h2>
          {/* <p className="body-md text-gray-600">
          
          </p> */}
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
              <h3 className="heading-md mb-4">circular bloem racks</h3>
              <p className="body-md text-gray-700 mb-6">
              Preloved fashion, reimagined for convenience through a network of accessible, self-serve clothing racks. Making secondhand shopping and reselling seamless, contactless, and community-powered.
              </p>
              <ul className="space-y-3">
                {[
                  // "No need to meet strangers for exchanges",
                  // "Available 24/7 in convenient locations",
                  // "Items are securely locked until authorized pickup",
                  // "Eco-friendly alternative to shipping",
                  "Contactless exchanges – Items are tagged and displayed until sold, no meetups needed.",
                  "Convenient – Drop off or pick up anytime, at high-traffic local spots.",
                  "Try before you buy – See the fit, quality, and condition in person—no more guessing.",
                  "Low-impact & shipping-free – A resourceful way to keep clothes in circulation.",
                  "Remote reselling – List, drop off, and let bloem do the rest.",
                  "Smart sorting – Browse by category, not individual seller, for a smoother experience.",
                  "Track your wardrobe – Manage your digital closet, view item history, and monitor your sales."
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
                      {/* <div className="w-20 h-20 bg-bloem-green/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <MapPin className="h-8 w-8 text-bloem-green" />
                      </div>
                      <p className="text-gray-700 font-medium">Physical rack visualization coming soon</p> */}
                      <img 
                    src="https://raw.githubusercontent.com/RR-2000v2/bloem-sustainable-wardrobe/refs/heads/main/public/App%20Crop.png"
                    alt="Homepage" 
                      className="w-full object-cover object-center"
                    />
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
