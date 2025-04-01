
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-bloem-purple">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">Join the bloem Wardrobe Revolution</h2>
          <p className="body-lg text-bloem-lavender mb-8 max-w-2xl mx-auto">
            Be among the first to experience a new way of refreshing your wardrobe. Sign up today for early access and special perks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white hover:bg-gray-100 text-bloem-purple font-medium rounded-full px-8 py-6 text-lg">
              Get Early Access
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-medium rounded-full px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
