import { Leaf, Recycle, Target } from "lucide-react";

const Sustainability = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sustainability First
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to the planet drives every decision we make
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Recycle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Eco-Friendly Packaging
                </h3>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Eco-Tuned Bottles</div>
                  <div className="text-gray-700 font-semibold">with Minimized Plastic</div>
                </div>
              </div>
              <p className="text-gray-700">
                Our innovative packaging uses food-grade plastic, low-plastic materials that ensure both freshness and durability proving that sustainability and quality go hand in hand.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
                <h4 className="text-xl font-bold text-gray-900">Lightweight Design</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Reduces transportation emissions and material waste without compromising strength
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-teal-600" />
                <h4 className="text-xl font-bold text-gray-900">Durable Materials</h4>
              </div>
              <p className="text-gray-700 text-sm">
                Engineered for longevity and recyclability, supporting circular economy principles
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2">Our Promise</h4>
              <p className="text-sm">
                "Innovation that respects our planet, creating a sustainable future for generations to come."
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-4">🌱</div>
            <h4 className="font-bold text-gray-900 mb-2">Environmental Impact</h4>
            <p className="text-gray-600 text-sm">Reduced carbon footprint through efficient packaging</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-4">♻️</div>
            <h4 className="font-bold text-gray-900 mb-2">Recyclable Materials</h4>
            <p className="text-gray-600 text-sm">100% recyclable bottles supporting circular economy</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="font-bold text-gray-900 mb-2">Future Goals</h4>
            <p className="text-gray-600 text-sm">Continuous innovation for even greater sustainability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
