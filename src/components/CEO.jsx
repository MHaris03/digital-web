import React from "react";
import { motion } from "framer-motion";
import { Quote, Linkedin, Twitter, Mail, Target, TrendingUp, Heart, Sparkles } from "lucide-react";
import Ceoimg from "../../public/assets/CEO.png"

export default function CeoMessage() {


    return (
        <div className="w-full overflow-hidden bg-[#0a0a0a]">
            {/* Hero Section */}
            {/* <section
                className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
                // style={{ backgroundImage: `url("/assets/servicebgimg.jpg")` }}
            >
                <div className="absolute inset-0 bg-black/80" />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white text-4xl md:text-6xl font-bold text-center"
                >
                    Message From Our CEO
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
                >
                    A personal note on our journey, our promise and the road ahead.
                </motion.p>
            </section> */}

            {/* CEO Profile Section */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* CEO Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#00A693] to-[#11b9a6] rounded-3xl blur-2xl opacity-30" />
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                            <img
                                src={Ceoimg}
                                alt="CEO of Skylift Group"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                                <h3 className="text-white text-2xl font-bold">Eric Williams</h3>
                                <p className="text-[#00A693] font-medium">Founder & Chief Executive Officer</p>
                                <div className="flex gap-3 mt-3">
                                    <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00A693] flex items-center justify-center transition">
                                        <Linkedin size={16} className="text-white" />
                                    </a>
                                    <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00A693] flex items-center justify-center transition">
                                        <Twitter size={16} className="text-white" />
                                    </a>
                                    <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00A693] flex items-center justify-center transition">
                                        <Mail size={16} className="text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CEO Intro Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-6"
                        >
                            Leadership With <span className="text-[#00A693]">Purpose</span>
                        </motion.h2>
                        <p className="text-gray-300 leading-8 text-lg mb-4">
                            At <span className="text-[#00A693] font-semibold">Skylift Group</span>, we believe every brand has a story worth telling and a future worth building. As CEO, my mission is to ensure our team brings that vision to life for every client we serve.
                        </p>
                        <p className="text-gray-300 leading-8 text-lg">
                            We don't just chase trends, we set them. Our work is driven by curiosity, shaped by strategy and measured by the real impact we create for the businesses who trust us.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Message Section */}
            <section className="bg-[#0a0a0a] py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 md:p-12 bg-white/5 rounded-3xl shadow-md border border-white/10"
                    >
                        {/* Quote Icon */}
                        <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#00A693] to-[#11b9a6] flex items-center justify-center shadow-lg">
                            <Quote size={30} className="text-white" />
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-2xl md:text-3xl font-bold text-white mb-6 mt-4"
                        >
                            A Personal Note To Our Clients & Partners
                        </motion.h2>

                        <div className="space-y-5 text-gray-300 leading-8 text-base md:text-lg">
                            <p>
                                When we started <span className="text-[#00A693] font-semibold">Skylift Group</span>, the goal was simple, build an agency that treats every client like a partner and every project like a promise. Years later, that principle still guides every decision we make.
                            </p>
                            <p>
                                The digital world moves fast. Algorithms change, platforms evolve and audience behavior shifts almost overnight. In this environment, businesses need more than a service provider, they need a team that listens closely, thinks strategically and executes with care.
                            </p>
                            <p>
                                That is the team we have built. A group of thinkers, creators and strategists who genuinely love what they do and take pride in the results they deliver. Whether we are building a brand from scratch or scaling one to new heights, we bring the same energy, honesty and craftsmanship to the table.
                            </p>
                            <p>
                                To our clients, thank you for trusting us with your vision. To our team, thank you for showing up every day with purpose. And to those considering working with us, we look forward to writing the next chapter together.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-10 pt-6 border-t border-white/10">
                            <p className="text-[#00A693] text-2xl font-bold italic mb-1">Eric Williams</p>
                            <p className="text-gray-400 text-sm">Founder & CEO, Skylift Group</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CEO Vision Pillars */}
            {/* <section className="max-w-6xl mx-auto px-4 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl font-bold text-center text-white mb-12"
                >
                    What Drives Our Leadership <br />
                    <span className="text-xl text-gray-300">
                        The values that shape every decision we make
                    </span>
                </motion.h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { icon: Target, title: "Clear Vision", text: "We set bold goals and back them with focused strategy, every single time." },
                        { icon: Heart, title: "Genuine Care", text: "We treat every client relationship with respect, empathy and long-term commitment." },
                        { icon: TrendingUp, title: "Real Growth", text: "Our success is measured by the measurable growth we deliver for our clients." },
                        { icon: Sparkles, title: "Creative Edge", text: "We combine strategy with creativity to produce work that stands out and performs." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00A693] to-[#11b9a6] flex items-center justify-center shadow-lg">
                                <item.icon size={34} className="text-white" />
                            </div>

                            <h4 className="text-xl font-bold mt-4 mb-2 text-white">{item.title}</h4>
                            <p className="text-gray-300 text-sm md:text-base leading-6">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section> */}

            {/* Achievements / Stats Section */}
            {/* <section className="bg-[#0a0a0a] py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl font-bold text-center text-white mb-12"
                    >
                        Milestones Under Our Leadership
                        <br />
                        <span className="text-xl text-gray-300">
                            Numbers that reflect our commitment to excellence
                        </span>
                    </motion.h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { number: "500+", label: "Happy Clients" },
                            { number: "1200+", label: "Projects Delivered" },
                            { number: "15+", label: "Industry Awards" },
                            { number: "10+", label: "Years of Experience" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-8 bg-white/5 rounded-2xl shadow-md border border-white/10 text-center hover:border-[#00A693] transition"
                            >
                                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#00A693] to-[#11b9a6] bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-300 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    );
}