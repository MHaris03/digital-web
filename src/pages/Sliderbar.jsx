import React from "react";
import Slider from "react-slick";
import { Trophy } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBar = () => {
  const slides = [
    "🏆 Partnering with Quality Resource LLC was the best decision for our online strategy –",
    "🚀 350+ Real Results: 100% Quality Organic Leads – B2B Software Company –",
    "💡 Transforming Creativity into Conversions – SaaS Marketing Campaign –",
    "🔥 120% ROI Growth in Just 3 Months – AI Marketing Success Story –",
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, 
    speed: 25000, 
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-[#0E1525] text-white border-t border-gray-800 py-3 overflow-hidden">
      <div className="container mx-auto flex items-center">
        <div className="bg-[#00A693] hover:bg-[#00947F] text-white font-semibold px-4 py-1 rounded-sm text-lg mr-4 whitespace-nowrap">
          350+ Real Results
        </div>

        <div className="flex-1 overflow-hidden">
          <Slider {...settings}>
            {slides.map((text, i) => (
              <div key={i}>
                <div className="flex items-center text-white text-lg font-medium px-3 whitespace-nowrap">
                  <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                  {text}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderBar;
