import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { PricingSection } from "@/components/pricing/PricingSection";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tight">
            <span className="text-gray-200">Simple, transparent pricing</span>
          </h1>
          <p className="text-lg text-gray-400">
            Choose the plan that's right for you
          </p>
        </div>
        
        <PricingSection />
      </motion.section>

      <Footer />
    </div>
  );
};

export default Pricing;