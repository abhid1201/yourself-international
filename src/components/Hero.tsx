import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center overflow-hidden">
      {/* Background Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]" />

{/* Bottle - Left (Shifted Left using translate-x) */}
<div className="flex absolute left-0 top-0 bottom-0 items-center z-0 pointer-events-none">
  <img 
    src="/lovable-uploads/bottle3.jpg" 
    alt="Bottle Left" 
    className="rotate-[25deg] opacity-20 w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px] xl:w-[600px] object-contain -translate-x-6"
  />
</div>

{/* Bottle - Right (Rotated but NOT Flipped) */}
<div className="flex absolute right-0 top-0 bottom-0 items-center z-0 pointer-events-none">
  <img 
    src="/lovable-uploads/bottle1.jpg" 
    alt="Bottle Right" 
    className="-rotate-[25deg] opacity-20 w-[270px] sm:w-[360px] md:w-[420px] lg:w-[500px] xl:w-[600px] object-contain translate-x-6"
  />
</div>



      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="bg-white p-8 rounded-full shadow-lg">
            <img 
              src="/lovable-uploads/129cb6fb-1bb0-4ac1-ace1-d419025ba5ce.png" 
              alt="Yourself International Logo" 
              className="h-32 w-32 object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Yourself <span className="text-blue-600">International</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in">
          Premium Water Brands: <span className="font-semibold text-blue-600">Swara</span> & <span className="font-semibold text-pink-600">Aqua Liva</span>
        </p>
        
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in">
          Next-generation hydration through trust, innovation, and care for the planet
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            onClick={() => scrollToSection('company-story')}
          >
            Learn Our Story
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            onClick={() => scrollToSection('contact')}
          >
            Partner With Us
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">2021</div>
            <div className="text-gray-700">Founded with Vision</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-teal-600 mb-2">200+</div>
            <div className="text-gray-700">Distribution Partners</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">16,800</div>
            <div className="text-gray-700">Bottles/Hour Capacity</div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce" style={{ bottom: '10px' }}>
  <ArrowDown className="h-6 w-6 text-gray-400" />
</div>
    </section>
  );
};

export default Hero;
