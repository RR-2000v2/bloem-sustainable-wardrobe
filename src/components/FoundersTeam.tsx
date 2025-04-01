
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const FoundersTeam = () => {
  const founders = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGpBrYA8YlTag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708349359229?e=1749081600&v=beta&t=9D6BRSgiCeUNp3Kk4HVfZ-XpdLYarNrSxclqDxeC9JM",
      bio: "Former sustainability lead at H&M with 10+ years in fashion retail."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "https://this-person-does-not-exist.com/img/avatar-11f5427264ea690b32a7f5a26e838f2b.jpg",
      bio: "Ex-Google engineer specializing in AI and recommendation systems."
    },
    {
      name: "Leila Patel",
      role: "COO & Co-Founder",
      image: "https://this-person-does-not-exist.com/img/avatar-118eccaaf19bc095d3feb92726b35799.jpg",
      bio: "Previously launched and scaled three successful marketplace startups."
    },
    {
      name: "David Okafor",
      role: "Head of Product",
      image: "https://this-person-does-not-exist.com/img/avatar-1168b0e29d9dade5a874334fa69dd0b5.jpg",
      bio: "Product leader with experience at Depop and Vinted."
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Marketing",
      image: "https://this-person-does-not-exist.com/img/avatar-115e76ba6c36039663c7638ae9ccf43e.jpg",
      bio: "Brand strategist with background in sustainable fashion marketing."
    },
    {
      name: "Thomas Kim",
      role: "Head of Partnerships",
      image: "https://this-person-does-not-exist.com/img/avatar-11d79ab9af06a60d12eea8553be3ce25.jpg",
      bio: "Built retail partnerships at ThredUp and The RealReal."
    }
  ];

  return (
    <section className="py-20 bg-bloem-ivory">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Meet Our Team</h2>
          <p className="body-md text-gray-600">
            We're a passionate group of fashion lovers, sustainability advocates, and tech innovators on a mission to transform how we think about clothing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {founders.map((founder, index) => (
            <Card key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[3/2] w-full overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                  <p className="text-bloem-purple font-medium mb-3">{founder.role}</p>
                  <p className="text-gray-600 mb-4">{founder.bio}</p>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-400 hover:text-bloem-purple transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-bloem-purple transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersTeam;
