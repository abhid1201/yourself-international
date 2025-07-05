
import { Award, CheckCircle } from "lucide-react";

const Licence = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Award className="h-10 w-10 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Certifications & Licenses
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards of quality and compliance through official certifications and licensing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow text-center">
            <img 
              src="/lovable-uploads/a6bd018b-bd19-44e1-8f15-34b5d6e4935c.png" 
              alt="ISO 9001:2015 Certificate" 
              className="h-32 w-auto mx-auto mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 9001:2015</h3>
            <p className="text-gray-600 text-sm">Quality Management System certification ensuring consistent quality standards</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow text-center">
            <img 
              src="/lovable-uploads/3119c60e-c5e2-4907-89ad-5c9de72397c8.png" 
              alt="CGWA Certificate" 
              className="h-32 w-auto mx-auto mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">CGWA License</h3>
            <p className="text-gray-600 text-sm">Central Ground Water Authority approval for water extraction and usage</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow text-center">
            <img 
              src="/lovable-uploads/cc7cbb77-ca4e-4e8e-8b7e-33ef6ee0702f.png" 
              alt="GPCB Certificate" 
              className="h-32 w-auto mx-auto mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">GPCB Approval</h3>
            <p className="text-gray-600 text-sm">Gujarat Pollution Control Board environmental compliance certification</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow text-center">
            <img 
              src="/lovable-uploads/9e43d3e5-d38f-4e45-898a-b46965898a57.png" 
              alt="Bureau of Indian Standards" 
              className="h-32 w-auto mx-auto mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">BIS Standards</h3>
            <p className="text-gray-600 text-sm">Bureau of Indian Standards compliance for product quality assurance</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow text-center lg:col-span-2">
            <img 
              src="/lovable-uploads/ae671355-852d-45f2-90ba-dcf92ad617f8.png" 
              alt="FSSAI License" 
              className="h-32 w-auto mx-auto mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">FSSAI License</h3>
            <p className="text-gray-600 text-sm">Food Safety and Standards Authority of India certification for safe food production</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <CheckCircle className="h-8 w-8" />
            <h3 className="text-2xl font-bold">Fully Compliant & Certified</h3>
          </div>
          <p className="text-lg mb-6">
            Our comprehensive licensing ensures every bottle meets or exceeds national standards for safety, quality, and environmental responsibility.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-semibold mb-1">Quality Assurance</div>
              <div className="opacity-90">ISO 9001:2015 certified processes</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-semibold mb-1">Environmental Compliance</div>
              <div className="opacity-90">CGWA & GPCB approved operations</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-semibold mb-1">Food Safety</div>
              <div className="opacity-90">FSSAI & BIS standards maintained</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Licence;
