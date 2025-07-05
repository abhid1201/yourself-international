import { Users, Calendar, Award } from "lucide-react";

const CompanyStory = () => {
  return (
    <section id="company-story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2021 by visionary leaders with a passion for pure, sustainable hydration
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Leadership Excellence
              </h3>
              <p className="text-gray-700 mb-6">
                Founded by <strong>Tushar Loliyana</strong> and <strong>Girish Dhaduk</strong>, 
                bringing together over 20 years of combined industry expertise and innovation.
              </p>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-blue-600 font-semibold">20+ Years Combined Experience</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">2021</div>
                <div className="text-gray-700">Year Founded</div>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-xl">
                <Award className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-teal-600 mb-1">First</div>
                <div className="text-gray-700">Nano-RO in Market</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pure Water Source
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Naturally sourced from deep underground reservoirs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Naturally enriched with essential minerals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clean, safe, refreshing - ideal for hydration & wellness</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide next-generation hydration solutions that combine cutting-edge 
                technology with environmental responsibility, ensuring every drop meets 
                the highest standards of purity and taste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
