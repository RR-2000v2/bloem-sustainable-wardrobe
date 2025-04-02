
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const FoundersTeam = () => {
  const founders = [
    {
      name: "Ramanathan Rajaraman",
      role: "Co-Founder",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGpBrYA8YlTag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708349359229?e=1749081600&v=beta&t=9D6BRSgiCeUNp3Kk4HVfZ-XpdLYarNrSxclqDxeC9JM",
      bio: ""
    },
    {
      name: "Sophia Haas",
      role: "CTO & Co-Founder",
      image: "https://raw.githubusercontent.com/RR-2000v2/bloem-wardrobe-swapper/refs/heads/main/public/logo.png",
      bio: ""
    },
    {
      name: "Cheng Lin",
      role: "COO & Co-Founder",
      image: "https://this-person-does-not-exist.com/img/avatar-118eccaaf19bc095d3feb92726b35799.jpg",
      bio: ""
    },
    {
      name: "Jovin Müntener",
      role: "Head of Product",
      image: "https://this-person-does-not-exist.com/img/avatar-1168b0e29d9dade5a874334fa69dd0b5.jpg",
      bio: ""
    },
    {
      name: "Nayanika Debnath",
      role: "Head of Marketing",
      image: "https://this-person-does-not-exist.com/img/avatar-115e76ba6c36039663c7638ae9ccf43e.jpg",
      bio: ""
    },
    {
      name: "Elena Lyulina",
      role: "Head of Partnerships",
      image: "https://this-person-does-not-exist.com/img/avatar-11d79ab9af06a60d12eea8553be3ce25.jpg",
      bio: ""
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
