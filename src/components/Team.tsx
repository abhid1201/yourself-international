import { Users, MapPin, Award } from "lucide-react";

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team & Reach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals and extensive network ensuring quality and service excellence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                35+ Professionals
              </h3>
            </div>
            <p className="text-gray-700 mb-6">
              Our diverse team of experts ensures every aspect of production, 
              quality control, and distribution meets the highest standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-blue-600 mb-1">Engineers</div>
                <div className="text-sm text-gray-600">Technical Excellence</div>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-teal-600 mb-1">Operators</div>
                <div className="text-sm text-gray-600">Production Experts</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-green-600 mb-1">Lab Technicians</div>
                <div className="text-sm text-gray-600">Quality Assurance</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-purple-600 mb-1">Drivers & Supervisors</div>
                <div className="text-sm text-gray-600">Logistics & Oversight</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h4 className="text-xl font-bold text-gray-900">Distribution Network</h4>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg p-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
                  <div className="text-gray-700 font-semibold">Distribution Partners</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Extensive network covering Maharashtra, Madhya Pradesh and many other states ensuring reliable product availability across the region.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-teal-600" />
                <h4 className="text-xl font-bold text-gray-900">Core Values</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                
                  <span className="text-gray-700 text-sm">🚀 Technology-first approach</span>
                </div>
                <div className="flex items-center space-x-3">
                
                  <span className="text-gray-700 text-sm">🌱 Sustainability-driven</span>
                </div>
                <div className="flex items-center space-x-3">
      
                  <span className="text-gray-700 text-sm">🤝 Customer trust</span>
                </div>
                <div className="flex items-center space-x-3">
                
                  <span className="text-gray-700 text-sm">🧠 Expertise-led quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Join Our Growing Network
          </h3>
          <p className="text-lg mb-6">
            Be part of India's most innovative water company and help us bring 
            pure, sustainable hydration to more communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-bold">Expanding Reach</div>
              <div className="text-sm opacity-90">Across Maharashtra, M.P, and Other States</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-bold">Quality First</div>
              <div className="text-sm opacity-90">Uncompromising Standards</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-bold">Innovation Driven</div>
              <div className="text-sm opacity-90">Future-Ready Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
