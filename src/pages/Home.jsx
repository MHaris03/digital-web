import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HeroSlider } from "../components/HeroSliderbar";
import Info from "../pages/Info"
// import heroImage from "../assets/hero-main.jpg";
// import video2 from "../assets/video2.mp4"
// import analytics from "../assets/analytics.jpg";
// import bghero from "../assets/bg-hero.jpg"
import SliderBar from "./Sliderbar";
import Plan from "./Plan";
import FocusPoints from "./Focus";
import WhatWeOffer from "./WhatWeOffer";
import CTASection from "./CtaSection";
import FAQSection from "./Faq";
import Counter from "./Counter";
import Testimonials from "./Testionmial";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <img
          src="/assets/bg-hero.jpg"
          alt="Team meeting"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent -z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo + Rating */}
            {/* <div className="flex items-center space-x-2">
              <div className="flex items-center text-yellow-400 text-md">
                <Star className="w-4 h-4 fill-yellow-400" />
                <span className="font-semibold ml-1">4.8 Rating</span>
                <span className="text-white/80 ml-2">• 715+ Reviews</span>
              </div>
            </div> */}

            <HeroSlider onGetStarted={() => navigate("/contact")} />
          </motion.div>

          {/* Right Section */}
          <div className="relative grid grid-cols-2 gap-4">
            <motion.div
              className="col-span-2 overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <video
                src="/assets/video2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover"
              />
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-3xl shadow-xl transform hover:scale-105 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/hero-main.jpg"
                alt="Creative team"
                className="w-full h-48 object-cover"
              />
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-3xl shadow-xl transform hover:scale-105 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/analytics.jpg"
                alt="Presentation analytics"
                className="w-full h-48 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <SliderBar />
      <Info />
      <Plan />
      <FocusPoints />
      <WhatWeOffer />
      <CTASection />
      <FAQSection />
      <Counter />
      <Testimonials />
    </div>
  );
};

export default Home;