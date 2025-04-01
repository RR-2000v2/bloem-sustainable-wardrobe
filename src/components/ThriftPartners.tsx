
import { Card, CardContent } from "@/components/ui/card";

const ThriftPartners = () => {
  const partners = [
    { name: "GoodWill", logo: "https://www.goodwill.org/wp-content/uploads/2019/06/cropped-Goodwill-Industries-International-Logo.png" },
    { name: "Salvation Army", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Salvation_Army.svg/512px-The_Salvation_Army.svg.png" },
    { name: "Oxfam", logo: "https://logos-download.com/wp-content/uploads/2017/11/Oxfam_logo-700x198.png" },
    { name: "ThredUp", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/ThredUp_Logo.svg/1280px-ThredUp_Logo.svg.png" },
    { name: "Plato's Closet", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Plato%27s_Closet_logo.png" },
    { name: "Buffalo Exchange", logo: "https://assets.website-files.com/62e31fb7d7abb9bf59e45f45/62e8de42a7879b20ae35e7e9_buffalo-exchange-2.svg" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container">
        <h2 className="text-center text-xl font-medium text-gray-600 mb-8">Trusted by leading thrift stores</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-center h-24">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-12 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThriftPartners;
