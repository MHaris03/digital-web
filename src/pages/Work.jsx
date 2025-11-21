import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import workDesk from "../assets/work-desk.jpg";
import analytics from "../assets/analytics.jpg";
import teamWork from "../assets/team-work.jpg";
import Workside from "../assets/our-work.jpg"


const Work = () => {
  const projects = [
    {
      title: "TechStart Solutions",
      category: "B2B SaaS",
      description: "Complete digital transformation including website redesign, SEO strategy, and lead generation campaigns.",
      results: ["150% increase in organic traffic", "85% growth in qualified leads", "2.5x ROI on ad spend"],
      image: analytics,
      tags: ["SEO", "Web Design", "PPC"],
    },
    {
      title: "EcoLife Marketplace",
      category: "E-commerce",
      description: "End-to-end e-commerce marketing strategy with focus on social media and influencer partnerships.",
      results: ["300% social media growth", "65% increase in conversion rate", "4x revenue in 6 months"],
      image: teamWork,
      tags: ["Social Media", "Content", "Email"],
    },
    {
      title: "HealthWell Clinic",
      category: "Healthcare",
      description: "Local SEO optimization and reputation management for a growing healthcare provider.",
      results: ["Top 3 Google rankings", "200+ positive reviews", "120% patient growth"],
      image: workDesk,
      tags: ["Local SEO", "Reputation", "Content"],
    },
  ];


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Workside})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold text-center"
        >
          Success Stories That Inspire
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
        >
          Explore how we've helped businesses like yours achieve remarkable growth through innovative digital marketing strategies.
        </motion.p>
      </section>

      {/* Stats Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">350+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-sm opacity-90">Average Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <Badge className="mb-4">{project.category}</Badge>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className=" mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline">
                      View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;