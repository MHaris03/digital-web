import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import workDesk from "../assets/work-desk.jpg";
import analytics from "../assets/analytics.jpg";
import teamWork from "../assets/team-work.jpg";

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

  const testimonials = [
    {
      quote: "DigitalMark transformed our online presence completely. The results exceeded our expectations in every way.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      rating: 5,
    },
    {
      quote: "Their strategic approach and attention to detail made all the difference. Highly recommend!",
      author: "Michael Chen",
      position: "Marketing Director, EcoLife",
      rating: 5,
    },
    {
      quote: "Professional, responsive, and results-driven. The best agency we've worked with.",
      author: "Dr. Emily Roberts",
      position: "Founder, HealthWell Clinic",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">Our Work</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success Stories That Inspire
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how we've helped businesses like yours achieve remarkable growth through innovative digital marketing strategies.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
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
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
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

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-primary fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create results that exceed your expectations. Get started today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Work;