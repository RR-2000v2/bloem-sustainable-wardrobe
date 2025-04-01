import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="pt-12 pb-24 md:pt-20 md:pb-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex flex-col items-start space-y-6 animate-fade-in">
            <h1 className="heading-xl text-left">
              Swap, Sell, or Share Your <span className="text-bloem-purple">Wardrobe</span>
            </h1>
            <p className="body-lg text-gray-600 max-w-xl">
              Join the sustainable fashion movement with bloem. Our innovative platform combines digital listings with physical exchange racks, making clothes swapping convenient and eco-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">Get Started</Button>
              <Button variant="outline" className="btn-outline">Learn More</Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-bloem-lavender flex items-center justify-center border-2 border-white">
                  <span className="text-sm font-medium text-bloem-purple">JD</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-bloem-green flex items-center justify-center border-2 border-white">
                  <span className="text-sm font-medium text-gray-700">SL</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-bloem-purple flex items-center justify-center border-2 border-white">
                  <span className="text-sm font-medium text-white">KM</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold">500+</span> people already joined
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              
              
              <div className="absolute inset-4 bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-bloem-purple/10 to-bloem-lavender/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-bloem-purple flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <p className="text-bloem-purple font-medium">Upload your first item</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;