import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Check, Target, TrendingUp, Users, PenTool, BarChart3, Megaphone } from "lucide-react";
import HeroBg from "../assets/servicebgimg.jpg"; 

const services = [
  {
    icon: Target,
    title: "Digital Strategy",
    description: "Tailored strategies to grow your business.",
    features: ["Market Analysis", "Competitor Research", "Customer Mapping", "KPI Planning"]
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Boost your website visibility and traffic.",
    features: ["On-page SEO", "Technical Audits", "Link Building", "Local SEO"]
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Engage your audience across all platforms.",
    features: ["Content Planning", "Community Management", "Paid Ads", "Influencer Campaigns"]
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Create content that resonates with your audience.",
    features: ["Blogs & Articles", "Video Production", "Graphic Design", "Brand Storytelling"]
  },
];

const cardVariants = {
  hidden: { opacity: 0, rotateY: -45, scale: 0.8 },
  visible: { opacity: 1, rotateY: 0, scale: 1 },
};

const Services = () => {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img src={HeroBg} alt="Digital Marketing Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="relative z-10 text-center px-6">
          {/* <Badge className="mb-4 bg-yellow-400 text-[#00796B]">Our Services</Badge> */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Our Digital Marketing Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-white/90 mb-8"
          >
            Explore our services and see how we can help your business grow.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Started</Link>
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00A693] text-white mb-6 shadow-md"
              >
                <service.icon className="h-8 w-8" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.1, x: 5 }}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <Check className="h-5 w-5 text-[#00A693] mt-1 flex-shrink-0" /> {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-[#00A693] to-[#00796B] text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's work together to create a measurable impact for your brand.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </motion.div>
      </section> */}

    </div>
  );
};

export default Services;
