
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const AppExperience = () => {
  const screens = [
    {
      title: "Digital Closet",
      description: "Easily organize and manage your clothing items",
      image: "https://raw.githubusercontent.com/RR-2000v2/bloem-sustainable-wardrobe/refs/heads/main/public/App%201.jpeg",
      features: [
        "AI-powered item categorization",
        "Detailed item tracking",
        "Set items for sale or sharing",
        "Track item history"
      ]
    },
    {
      title: "outfit-of-the-day",
      description: "Connect with others and exchange items securely",
      image: "https://raw.githubusercontent.com/RR-2000v2/bloem-sustainable-wardrobe/refs/heads/main/public/App%203.jpeg",
      features: [
        "In-app messaging with other users",
        "Secure payment processing",
        "QR code for rack access",
        "Exchange history and receipts"
      ]
    },
    {
      title: "Community Feed",
      description: "Get inspired and share your style with others",
      image: "https://raw.githubusercontent.com/RR-2000v2/bloem-sustainable-wardrobe/refs/heads/main/public/App%204.jpeg",
      features: [
        "Daily outfit inspiration",
        "Follow favorite style creators",
        "Personalized recommendations",
        "Share outfits from your closet"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-bloem-ivory">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4"> let's <span className="text-bloem-purple">bloem</span> </h2>
          <p className="body-md text-gray-600">
          Discover how our app is redefining circular fashion. Smarter, easier, and community-powered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <Card key={index} className="bg-white border border-gray-100 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{screen.title}</h3>
                  <p className="text-gray-600 mb-4">{screen.description}</p>
                </div>
                
                <div className="px-6 pb-6">
                  <div className="bg-gray-100 rounded-lg p-2 mb-6">
                    <div className="aspect-[9/16] w-full overflow-hidden rounded-md bg-white shadow-inner">
                      <img 
                        src={screen.image} 
                        alt={screen.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {screen.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-bloem-green shrink-0 mt-0.5 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppExperience;
