import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Star, TrendingUp, Users, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { HeroSlider } from "../components/HeroSliderbar";
import { AnimatedCounter } from "../components/AnimatedCounter";
import heroImage from "../assets/hero-main.jpg";
import video2 from "../assets/video2.mp4"
import teamWork from "../assets/team-work.jpg";
import analytics from "../assets/analytics.jpg";
import workDesk from "../assets/work-desk.jpg";
import bghero from "../assets/bg-hero.jpg"
import SliderBar from "./Sliderbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section with Slider */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <img
          src={bghero}
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
                src={video2}
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
                src={heroImage}
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
                src={analytics}
                alt="Presentation analytics"
                className="w-full h-48 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <SliderBar/>
        {/* Animated Stats Section */}
      <section className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-all hover:scale-110">
              <AnimatedCounter end={350} suffix="+" />
              <div className="text-sm opacity-90 mt-2">Happy Clients</div>
            </div>
            <div className="transform transition-all hover:scale-110">
              <AnimatedCounter end={85} suffix="%" />
              <div className="text-sm opacity-90 mt-2">Average Growth</div>
            </div>
            <div className="transform transition-all hover:scale-110">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-sm opacity-90 mt-2">Support Available</div>
            </div>
            <div className="transform transition-all hover:scale-110">
              <AnimatedCounter end={10} suffix="+" />
              <div className="text-sm opacity-90 mt-2">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview with Animations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">What We Offer</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we deliver end-to-end digital marketing services tailored to your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Target className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive roadmaps that align with your business objectives and drive sustainable growth.
              </p>
              <Link to="/services" className="text-primary font-medium hover:underline inline-flex items-center group">
                Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in [animation-delay:100ms] group">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <TrendingUp className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">SEO & Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Boost your visibility and attract qualified leads with proven search optimization techniques.
              </p>
              <Link to="/services" className="text-primary font-medium hover:underline inline-flex items-center group">
                Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in [animation-delay:200ms] group">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Users className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">Social Media</h3>
              <p className="text-muted-foreground mb-4">
                Build authentic connections and engage your audience across all major social platforms.
              </p>
              <Link to="/services" className="text-primary font-medium hover:underline inline-flex items-center group">
                Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </Card>
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button size="lg" asChild className="group">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in">
            Let's create a digital strategy that transforms your vision into measurable success.
          </p>
          <div className="animate-fade-in">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;