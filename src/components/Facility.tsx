
import { Factory, Zap, Package, Truck } from "lucide-react";

const Facility = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class Facility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art infrastructure delivering unmatched production capacity and quality
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Factory className="h-10 w-10 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Modern Infrastructure</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">19,000</div>
                  <div className="text-sm text-gray-600">Sq. Ft. Facility</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-1">2</div>
                  <div className="text-sm text-gray-600">RO Plants</div>
                </div>
              </div>
              <p className="text-gray-700">
                Our expansive facility houses cutting-edge equipment and maintains the highest 
                standards of hygiene and quality control.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl p-6 ">
              <h4 className="text-xl font-bold mb-2">Production Capacity</h4>
              <div className="text-3xl font-bold mb-1">16,800</div>
              <div className="text-sm">Bottles per Hour</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-xl font-bold text-blue-600 mb-1">12,000</div>
              <div className="text-sm text-gray-600">L/hr per RO Plant</div>
            </div>
            
            <div className="bg-teal-50 rounded-xl p-6 text-center">
              <Package className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <div className="text-xl font-bold text-teal-600 mb-1">120</div>
              <div className="text-sm text-gray-600">BPM Filling Speed</div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl p-6 text-center col-span-2">
              <div className="text-xl font-bold mb-4">Premium Equipment</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-semibold">Filling Machine</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-semibold">Blowing Machine</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-semibold">Compressor Machine</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-semibold">Label & Bopp Machine</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-semibold">Shrink Machine</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-semibold">Laser Machine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Packaging Capacity
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl mb-4">💧</div>
              <div className="text-2xl font-bold text-blue-600 mb-2">200ml</div>
              <div className="text-gray-700 mb-2">240 boxes/hr</div>
              <div className="text-sm text-gray-500">High-speed small format</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl mb-4">💧</div>
              <div className="text-2xl font-bold text-teal-600 mb-2">500ml</div>
              <div className="text-gray-700 mb-2">350 boxes/hr</div>
              <div className="text-sm text-gray-500">Standard hydration size</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl mb-4">💧</div>
              <div className="text-2xl font-bold text-blue-600 mb-2">1000ml</div>
              <div className="text-gray-700 mb-2">600 boxes/hr</div>
              <div className="text-sm text-gray-500">Family & office size</div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Truck className="h-8 w-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Delivery Vehicles</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-700">Three-Wheelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">5</div>
              <div className="text-gray-700">Bolero Pickups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-700">Trucks</div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Our distribution is already active across Maharashtra, Madhya Pradesh and other major states. With strong partnerships with transportation companies, we ensure my product is delivered wherever needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facility;
