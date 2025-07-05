
import Hero from "@/components/Hero";
import CompanyStory from "@/components/CompanyStory";
import Technology from "@/components/Technology";
import Sustainability from "@/components/Sustainability";
import Facility from "@/components/Facility";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Licence from "@/components/Licence";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CompanyStory />
      <Technology />
      <Sustainability />
      <Facility />
      <Team />
      <Contact />
      <Licence />
    </div>
  );
};

export default Index;
