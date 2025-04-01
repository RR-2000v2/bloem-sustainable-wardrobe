
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart, MessageCircle, Share2 } from "lucide-react";

const OutfitOfTheDay = () => {
  const outfits = [
    {
      user: "Sophie K.",
      avatar: "https://this-person-does-not-exist.com/img/avatar-11562fec98e7b7450881de27e9075eb0.jpg",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
      likes: 142,
      comments: 28,
      items: ["Vintage denim jacket", "White cotton tee", "High-waisted jeans"]
    },
    {
      user: "Marcus J.",
      avatar: "https://this-person-does-not-exist.com/img/avatar-118e7cce39c7acd0c59d444c79289fc9.jpg",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      likes: 97,
      comments: 15,
      items: ["Oversized knit sweater", "Slim-fit chinos", "Canvas sneakers"]
    },
    {
      user: "Aisha T.",
      avatar: "https://this-person-does-not-exist.com/img/avatar-11e31026b8fb3f7de68c9fb548b2088b.jpg",
      image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      likes: 215,
      comments: 42,
      items: ["Floral maxi dress", "Leather crossbody bag", "Gold hoop earrings"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Outfit of the Day</h2>
          <p className="body-md text-gray-600">
            Share your daily style, find inspiration, and expand your digital closet with community outfits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outfits.map((outfit, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src={outfit.avatar} 
                      alt={outfit.user} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{outfit.user}</span>
                </div>
                
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img 
                    src={outfit.image} 
                    alt="Outfit of the day" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1 text-gray-700 hover:text-bloem-purple transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>{outfit.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-700 hover:text-bloem-purple transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>{outfit.comments}</span>
                      </button>
                    </div>
                    <button className="text-gray-700 hover:text-bloem-purple transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <h4 className="font-medium mb-2">Items in this outfit:</h4>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {outfit.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-bloem-purple text-bloem-purple hover:bg-bloem-purple hover:text-white">
                    <Camera className="w-4 h-4" />
                    Share your outfit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutfitOfTheDay;
