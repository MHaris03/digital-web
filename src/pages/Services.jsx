import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  TrendingUp,
  Users,
  PenTool,
  BarChart3,
  Megaphone,
  Mail,
  Code,
  Check,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Digital Strategy",
      description: "Comprehensive digital roadmaps aligned with your business goals.",
      features: [
        "Market Research & Analysis",
        "Competitor Analysis",
        "Customer Journey Mapping",
        "KPI Development",
      ],
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "Improve visibility and drive organic traffic to your website.",
      features: [
        "Technical SEO Audits",
        "On-Page Optimization",
        "Link Building Strategy",
        "Local SEO",
      ],
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Build and engage your community across all social platforms.",
      features: [
        "Content Calendar Planning",
        "Community Management",
        "Paid Social Campaigns",
        "Influencer Partnerships",
      ],
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Compelling content that resonates with your target audience.",
      features: [
        "Blog Writing",
        "Video Production",
        "Graphic Design",
        "Brand Storytelling",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance.",
      features: [
        "Performance Tracking",
        "Custom Dashboards",
        "ROI Analysis",
        "A/B Testing",
      ],
    },
    {
      icon: Megaphone,
      title: "PPC Advertising",
      description: "Targeted paid campaigns that deliver measurable results.",
      features: [
        "Google Ads Management",
        "Facebook & Instagram Ads",
        "Retargeting Campaigns",
        "Budget Optimization",
      ],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with strategic email campaigns.",
      features: [
        "List Segmentation",
        "Automated Workflows",
        "Template Design",
        "Performance Analytics",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites optimized for conversions.",
      features: [
        "Custom Web Design",
        "E-commerce Solutions",
        "Mobile Optimization",
        "CMS Integration",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">Our Services</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive Digital Marketing Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we offer a full suite of services designed to elevate your brand and drive measurable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Work With You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures success at every stage of your digital journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and challenges." },
              { step: "02", title: "Strategy", description: "We develop a customized plan tailored to your needs." },
              { step: "03", title: "Execution", description: "We implement the strategy with precision and care." },
              { step: "04", title: "Optimize", description: "We continuously refine based on data and results." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to take your digital marketing to the next level? Get in touch with our team today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;