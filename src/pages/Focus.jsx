import { motion } from "framer-motion";

export default function FocusPoints() {
  const points = [
    {
      title: "1. Data-Driven Strategies",
      description:
        "Every campaign starts with insight. We analyze audience behavior, trends, and performance data to build marketing strategies that maximize ROI and reduce wasted spend.",
    },
    {
      title: "2. SEO & Organic Growth",
      description:
        "We enhance your brand visibility through powerful SEO frameworks — blending technical optimization, content strategy, and user intent for long-term organic success.",
    },
    {
      title: "3. Paid Media That Converts",
      description:
        "From Google Ads to social campaigns, our paid media approach focuses on targeting, creative design, and continuous optimization to generate quality leads that matter.",
    },
    {
      title: "4. Content That Builds Trust",
      description:
        "We craft compelling stories that educate, engage, and inspire action. Great content isn’t just words — it’s the foundation of lasting customer relationships.",
    },
    {
      title: "5. Performance Analytics & Reporting",
      description:
        "We turn complex data into clear insights. With real-time dashboards and transparent reporting, you’ll always know how your campaigns are performing — and where to grow next.",
    },
    {
      title: "6. Social Media Engagement & Brand Building",
      description:
        "Your social presence should feel alive. We build authentic, consistent engagement strategies across platforms that strengthen brand loyalty and foster meaningful communities.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#F7FAFC] to-[#E8F5F3] py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          6 Core Pillars of
          <span className="text-[#00A693] block mt-1">
            Digital Marketing Excellence
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg md:text-xl mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At <strong>Sky Rise Marketing</strong>, we don’t chase trends — we
          build scalable systems that help brands grow with purpose, precision,
          and creativity.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {points.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#00A693]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#00A693] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
