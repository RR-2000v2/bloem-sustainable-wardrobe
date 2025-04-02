
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
      role: "Co-Founder",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGifw1gJswlxg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699347606109?e=1749081600&v=beta&t=Heuu84Y2INAchhDEcW62vBSVt49ZJ5K0qGOLzLE5xNU",
      bio: ""
    },
    {
      name: "Cheng Lin",
      role: "Co-Founder",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEwWcOiFMpClA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699092536642?e=1749081600&v=beta&t=MQEaCk4fROWGlmWZfCPmiQix1tmpODau6SPr4gLNoCg",
      bio: ""
    },
    {
      name: "Jovin Müntener",
      role: "Head of Product",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQE04_4-D7IjUg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705781653519?e=1749081600&v=beta&t=pc-spQtVP-2O1f46b0d0fkCuGeLvwDvsCThgQv-6fRY",
      bio: ""
    },
    {
      name: "Nayanika Debnath",
      role: "Co-Founder",
      image: "https://media.licdn.com/dms/image/v2/C5603AQHUzsjpU_NlLw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1655823373155?e=1749081600&v=beta&t=R_i6fLkm6gzk4csKBRXlC0VAgRkG_9WN48-suUuVerA",
      bio: ""
    },
    {
      name: "Elena Lyulina",
      role: "Co-Founder",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHXDNWPnZ6MoA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700570063547?e=1749081600&v=beta&t=WTQsPCN22P_0udZfgJS4N4kS7MlPg5G-sUUSe1rC73k",
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
