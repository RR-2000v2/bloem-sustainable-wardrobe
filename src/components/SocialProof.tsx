
import { Card, CardContent } from "@/components/ui/card";
import { Leaf } from "lucide-react";

const SocialProof = () => {
  const stats = [
    { label: "Items Shared", value: "25,000+", color: "bg-bloem-lavender" },
    { label: "CO₂ Emissions Reduced", value: "47 tons", color: "bg-bloem-green" },
    { label: "Active Users", value: "8,500+", color: "bg-bloem-purple" }
  ];

  const testimonials = [
    {
      quote: "I love that bloem is a young, fun community with a meaningful purpose, namely real action towards a circular fashion economy.",
      author: "Nina Pearson"
    },
    {
      quote: "I Believe we can all be Conscious consumers and we are at a point that we need to be Allies to our world to protect our Environment and ecosystems in any way we can.",
      author: "Laura Vidal"
    },
    {
      quote: "I am beyond excited about the launch of this incredible platform- a digital wardrobe! In a world where the fashion industry moves at breakneck speed, this concept feels like a breath of fresh air.",
      author: "Melissa Wiss"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Making a Difference Together</h2>
          <p className="body-md text-gray-600">
            See how our community is creating a more sustainable future for fashion, one shared item at a time.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-8">
                <div className={`w-16 h-2 ${stat.color} rounded-full mb-4`}></div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* <div className="bg-bloem-ivory rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-6">Environmental Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">CO₂ Emissions Reduced</span>
                    <span className="font-bold">47 tons</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-bloem-green rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Water Saved</span>
                    <span className="font-bold">2.8M gallons</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-bloem-lavender rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Landfill Waste Prevented</span>
                    <span className="font-bold">5.2 tons</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-bloem-purple rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-32 h-32 rounded-full bg-bloem-green/20 flex items-center justify-center mb-6">
                <Leaf className="h-16 w-16 text-bloem-green" />
              </div>
              <p className="text-center text-lg font-medium">
                Every shared item reduces fashion's environmental footprint
              </p>
            </div>
          </div>
        </div> */}

        <div>
          <h3 className="heading-md text-center mb-8">what early <span className="text-bloem-purple">bloemers</span> say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-bloem-purple">★</span>
                    ))}
                  </div>
                  <p className="italic mb-6">"{testimonial.quote}"</p>
                  <p className="font-medium text-right">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
