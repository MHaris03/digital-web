import { motion } from "framer-motion";
import useSeo from "../hooks/useSeo";
import OurService from "./OurServices";
import CTASection from "./CtaSection";



export default function ServicesAttractive() {

  useSeo({
    title: "Our Services | Sky Lift Group – Automation, Chatbots & AI Solutions",
    description:
      "Discover AI-powered services from Sky Lift Group, including AI chatbots, voice agents, workflow automations, and smart marketing systems designed to scale your business faster.",
    canonical: "https://www.skyliftgroup.com/services"
  });

  return (
    <div className="w-full">

      <section
        className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("/assets/services.webp")` }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold text-center"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
        >
          We help you build a real presence online with content that connects, campaigns that perform, and strategies that move your brand forward.
        </motion.p>
      </section>

      <OurService />
      <CTASection />
    </div>

  );
}

