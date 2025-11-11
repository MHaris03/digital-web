import { useState, useEffect } from "react";

const slides = [
  {
    title: "Transform Your",
    highlight: "Digital Presence",
    description:
      "Data-driven digital marketing strategies that elevate brands, engage audiences, ",
    subdes: "and deliver measurable results for modern businesses.",
    stat1: { value: "500+", label: "Projects Completed" },
    stat2: { value: "95%", label: "Client Satisfaction" },
  },
  {
    title: "Accelerate Your",
    highlight: "Business Growth",
    description:
      "Innovative marketing solutions powered by AI and analytics to maximize your ",
    subdes: "ROI and drive sustainable business expansion.",
    stat1: { value: "350+", label: "Happy Clients" },
    stat2: { value: "85%", label: "Average Growth" },
  },
  {
    title: "Build Lasting",
    highlight: "Brand Connections",
    description:
      "Creative strategies that resonate with your audience and transform casual ",
    subdes: "visitors into loyal brand advocates.",
    stat1: { value: "10M+", label: "Reach Generated" },
    stat2: { value: "4.9", label: "Rating Score" },
  },
];

export const HeroSlider = ({ onGetStarted }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
                ? "opacity-0 -translate-x-full absolute inset-0"
                : "opacity-0 translate-x-full absolute inset-0"
              }`}
          >
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                {slide.title}
                <span className="block text-primary animate-slide-up">
                  {slide.highlight}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-in delay-100">
                {slide.description}
                <span className="text-teal-400">
                  {slide.subdes}
                </span>
              </p>

              <div className="flex items-center gap-8 pt-4 animate-fade-in delay-200">
                <div className="transform transition-transform hover:scale-110">
                  <div className="text-3xl font-bold text-primary">
                    {slide.stat1.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {slide.stat1.label}
                  </div>
                </div>
                <div className="transform transition-transform hover:scale-110">
                  <div className="text-3xl font-bold text-primary">
                    {slide.stat2.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {slide.stat2.label}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
        <button className="bg-[#00A693] cursor-pointer mt-5 hover:bg-[#00947F]  text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg transition transform hover:scale-105">
          Book Your Free Strategy Call Today
        </button>
      </div>
    </div>
  );
};
