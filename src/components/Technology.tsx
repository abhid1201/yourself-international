
import { Zap, Shield, Beaker, CheckCircle } from "lucide-react";

const Technology = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            First in market to use Nano-Filtration with Reverse Osmosis (RO) for superior purification
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Nano-Filtration + RO
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our pioneering technology combines nano-filtration with reverse osmosis, 
                providing multi-stage purification that's unmatched in the industry.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Multi-stage purification process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Ensures microbial safety</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Retains healthy minerals</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Microbial Safety</h4>
              <p className="text-gray-600 text-sm">Complete elimination of harmful microorganisms</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <Beaker className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Mineral Retention</h4>
              <p className="text-gray-600 text-sm">Preserves essential minerals for health</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Technology Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔬</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Advanced Filtration</h4>
              <p className="text-gray-600 text-sm">Multi-layer filtration removes impurities while preserving taste</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Pure Hydration</h4>
              <p className="text-gray-600 text-sm">Clean, refreshing water ideal for daily hydration needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600 text-sm">Consistent quality through automated monitoring systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
