import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, PenTool, ArrowRight, Search, MapPin, Share2, Code2 } from "lucide-react";

export default function WhatWeOffer2025() {
    const services = [
        {
            icon: <Code2 className="h-7 w-7 text-white" />,
            title: "Web Design & Development",
            desc: "Custom, fast, and responsive websites built to match your brand and convert visitors into customers.",
        },
        {
            icon: <Search className="h-7 w-7 text-white" />,
            title: "Search Engine Optimization",
            desc: "Improve rankings, boost traffic, and strengthen your online visibility with proven SEO practices.",
        },
        {
            icon: <MapPin className="h-7 w-7 text-white" />,
            title: "Local Maps Optimization",
            desc: "Get your business discovered in local searches with optimized Google Business profiles and map listings.",
        },
        {
            icon: <Share2 className="h-7 w-7 text-white" />,
            title: "Social Media Marketing",
            desc: "Grow your audience and build a strong community with tailored social campaigns for every platform.",
        },
        {
            icon: <Target className="h-7 w-7 text-white" />,
            title: "PPC Management",
            desc: "Run high-performing ad campaigns that bring predictable results and a better return on ad spend.",
        },
        {
            icon: <PenTool className="h-7 w-7 text-white" />,
            title: "Content Writing",
            desc: "Clear, engaging, and search-friendly content crafted to educate, inspire, and convert your audience.",
        },
    ];


    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#00A69330,transparent_70%)] blur-2xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block bg-[#00A693]/20 text-[#00A693] px-5 py-2 rounded-full text-sm font-semibold mb-5 backdrop-blur-md border border-[#00A693]/40">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Shaping the Future of <span className="text-[#00A693]">Digital Marketing</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Innovative strategies. Impactful execution. Every service is designed to elevate your brand in the digital era.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#00A693]/40 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_#00A69340]"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00A693] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-300 mb-6">{service.desc}</p>

                            <Link
                                to="/services"
                                className="inline-flex items-center text-[#00A693] font-medium cursor-pointer"
                            >
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                            </Link>

                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00A693]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/services"
                        className="inline-flex items-center bg-[#00A693] hover:bg-[#00947F] text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-[0_0_30px_#00A69360] transition-transform hover:scale-105"
                    >
                        Explore All Services
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
