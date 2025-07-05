import { Mail, Phone, MapPin, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Want to distribute with us or explore partnership opportunities? 
            Let's build the future of hydration together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Handshake className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">
                  Distribution Opportunities
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Join our network of 200+ distributors and be part of India's most 
                innovative water company. We're expanding our reach and looking for 
                passionate partners who share our vision.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Comprehensive support & training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">Premium product portfolio</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Growing market demand</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Why Choose Yourself International?</h4>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-sm">
                  <div className="font-semibold">🚀 Innovation</div>
                  <div className="text-s opacity-90">Industry-first technology</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold">🌱 Sustainability</div>
                  <div className="text-s opacity-90">Eco-tuned bottles</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold">🤝 Support</div>
                  <div className="text-s opacity-90">Comprehensive training</div>
                </div>
                <div className="text-sm"> 
                  <div className="font-semibold">📈 Growth</div>
                  <div className="text-s opacity-90">Expanding market</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="h-6 w-6 text-blue-400" />
                <h4 className="text-xl font-bold">Email Us</h4>
              </div>
              <p className="text-gray-300 mb-2">yourselfinter@gmail.com</p>
              <p className="text-sm text-gray-400">
                Send us your partnership inquiry and we'll respond within 24 hours
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="h-6 w-6 text-teal-400" />
                <h4 className="text-xl font-bold">Call Us</h4>
              </div>
              <p className="text-gray-300 mb-2">Customer Care +91 9099094041</p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Tushar Loliyana: +91 9824147574</p>
                <p>Girish Dhaduk: +91 9825223297</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="h-6 w-6 text-green-400" />
                <h4 className="text-xl font-bold">Visit Us</h4>
              </div>
              <p className="text-gray-300 mb-2">Based in Surat</p>
              <p className="text-sm text-gray-400">
                Block No.77, Kosmada Village, Nr. Royal Mandap Service, Kosmada Naka, Canal Road, Kosmada, Surat-395006
              </p>
            </div>
            
         
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              "Next-generation hydration through trust, innovation, and care for the planet."
            </h3>
            <p className="text-gray-300">
              Join us in revolutionizing the water industry with technology, sustainability, and unwavering quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
