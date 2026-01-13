import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";



const services = [
  {
    id: "web-design",
    label: "Web Design & Development",
    link: "/services/web-design",
    paragraph:
      "We design fast, conversion-focused websites with pixel-perfect UI, smooth interactions and accessibility in mind. From marketing landing pages to complex web applications — we deliver measurable results.",
    sub: [
      "Custom Website Design",
      "Responsive & Mobile-first Development",
      "Headless / JAMstack Sites",
      "E‑commerce Stores (Shopify, WooCommerce)",
      "Performance & Accessibility Optimization",
    ],
  },
  {
    id: "seo",
    label: "Search Engine Optimization",
    link: "/services/seo",
    paragraph:
      "SEO that balances technical excellence and content strategy. We increase organic visibility with data-driven keyword work, on-page fixes and white-hat link building.",
    sub: [
      "Technical SEO Audits",
      "On-page Optimization",
      "Content Strategy",
      "Local & International SEO",
    ],
  },
  {
    id: "local-maps",
    label: "Local Maps Optimization",
    link: "/services/local-maps",
    paragraph:
      "Appear where local customers search. We manage your Maps presence, reviews and citations to increase footfall and local leads.",
    sub: [
      "Google Business Profile",
      "Local Citations & Directory Management",
      "Review & Reputation Strategy",
    ],
  },
  {
    id: "social",
    label: "Social Media Marketing",
    link: "/services/social-media",
    paragraph:
      "Strategic social campaigns and creative content that build brand affinity and drive conversions across platforms like Facebook, Instagram and TikTok.",
    sub: ["Content Creation", "Paid Social", "Community Management", "Influencer Campaigns"],
  },
  {
    id: "ppc",
    label: "PPC Management",
    link: "/services/ppc-management",
    paragraph:
      "Data-driven paid campaigns with strong ROI: Google Ads, remarketing and conversion-optimized landing pages.",
    sub: ["Search & Shopping Ads", "Remarketing", "Conversion Rate Optimization"],
  },
  {
    id: "content",
    label: "Content Writing",
    link: "/services/content-writing",
    paragraph:
      "Brand-aligned copy that educates, converts and performs in search — from product descriptions to long-form thought leadership.",
    sub: ["Website Copy", "Blog & Articles", "Product Descriptions", "SEO Content"],
  },
];

export default function ServicesAttractive() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  const refs = useRef([]);
  refs.current = [];
  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setActive(idx);
          }
        });
      },
      { root: containerRef.current, threshold: 0.55 }
    );

    refs.current.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <Helmet>
        <title>Our Services | Sky Lift Group – Digital Marketing & Web Solutions</title>
        <meta
          name="description"
          content="Explore the full range of services from Sky Lift Group, including SEO, social media marketing, PPC, web design, and digital marketing solutions for business growth."
        />
        <link rel="canonical" href="https://www.skyliftgroup.com/services" />
      </Helmet>

      <section
        className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("/assets/services.webp")` }}
      >
        <div className="absolute inset-0 bg-black/50" />

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

      <div className="min-h-screen bg-gradient-to-b from-[#081026] via-[#071226] to-[#06121b] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto overflow-x-hidden">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Services that move the needle
            </h1>
            <p className="mt-3 text-gray-300 max-w-3xl">
              Practical, measurable digital services — designed and executed for
              growth. Click a service on the left or scroll the list to explore
              details.
            </p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LEFT nav */}
            <aside className="md:col-span-1 sticky top-24 self-start">
              <nav className="bg-[#071129] p-4 rounded-2xl shadow-xl border border-[#132033]">
                <ul className="space-y-3">
                  {services.map((s, i) => (
                    <li key={s.id}>
                      <button
                        onClick={() => {
                          refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                        }}
                        className={`w-full text-left py-3 cursor-pointer px-4 rounded-lg flex items-center justify-between transition-all transform hover:scale-[1.01] focus:outline-none
                        ${active === i ?
                            "bg-gradient-to-r from-[#12304b] to-[#184e6d] shadow-[0_6px_18px_rgba(20,40,80,0.5)] text-white" :
                            "bg-transparent text-gray-200"}`}
                      >
                        <div>
                          <div className="text-sm font-semibold">{s.label}</div>
                          <div className="text-xs text-gray-400 mt-1">{s.sub.slice(0, 2).join(" · ")}</div>
                        </div>

                        <div className="ml-4 flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${active === i ? 'bg-white/10' : 'bg-white/5'}`}>View</span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-sm text-gray-400">
                  <div>Need a custom solution?</div>
                  <Link to="/contact" className="text-[#00A693] font-semibold">
                    Request a quote
                  </Link>
                </div>
              </nav>
            </aside>

            {/* RIGHT scroll area */}
            <main
              ref={containerRef}
              className="md:col-span-2 h-[70vh] overflow-y-auto scroll-snap-y snap-mandatory space-y-8 pr-4"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {services.map((s, i) => (
                <section
                  data-idx={i}
                  key={s.id}
                  ref={addToRefs}
                  className="bg-gradient-to-r from-[#071226]/40 to-transparent p-6 rounded-2xl border border-[#142238] backdrop-blur-md scroll-snap-start"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: active === i ? 1 : 0.6, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl md:text-3xl font-bold"
                      >
                        {s.label}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: active === i ? 1 : 0.6 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-3 text-gray-300 max-w-2xl leading-relaxed"
                      >
                        {s.paragraph}
                      </motion.p>

                      <div className="mt-4 flex flex-wrap gap-3">
                        {s.sub.map((sub, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.03 }}
                            className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-100 border border-white/8"
                          >
                            {sub}
                          </motion.span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center gap-4">
                        <Link
                          to={s.link}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00A693] hover:bg-[#00947F] text-white font-semibold shadow-md transition-transform"
                        >
                          Learn more
                        </Link>

                        <button className="px-3 py-2 text-sm rounded-md border border-white/10">
                          Get a proposal
                        </button>
                      </div>
                    </div>

                    <aside className="w-full md:w-56 flex-shrink-0">
                      <div className="p-4 rounded-xl bg-[#011426] border border-[#00A693] shadow-inner">
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Highlights</div>
                        <ul className="mt-3 space-y-2 text-sm text-gray-200">
                          {s.sub.slice(0, 3).map((h, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="mt-1 w-2 h-2 rounded-full bg-[#00A693]"></span>
                              <div className="leading-tight">{h}</div>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 text-xs text-gray-400">Avg. delivery</div>
                        <div className="text-sm font-semibold">2–6 weeks</div>
                      </div>
                    </aside>
                  </div>
                </section>
              ))}

              <div className="h-24" />
            </main>
          </div>
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7EE3B6] via-transparent to-transparent"
          />
        </AnimatePresence>
      </div>
    </div>

  );
}

