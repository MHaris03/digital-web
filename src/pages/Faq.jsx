import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What digital marketing services do you offer?",
        answer: "We provide strategy, SEO, social media management, content creation, paid advertising, and analytics tailored to your brand."
    },
    {
        question: "How long does it take to see results?",
        answer: "Initial results are typically visible within 2-3 months, depending on the campaign and strategy."
    },
    {
        question: "Do you provide custom packages?",
        answer: "Yes. Each business is unique, so we create a package that fits your goals and audience."
    },
    {
        question: "Can you manage multiple platforms for my brand?",
        answer: "Absolutely. We handle all major platforms like Google, Facebook, Instagram, LinkedIn, ensuring consistent messaging."
    },
    {
        question: "How do you track and report performance?",
        answer: "We provide detailed analytics dashboards, regular reports, and actionable insights so you always know your ROI."
    },
    {
        question: "Can I request ongoing support?",
        answer: "Yes, we offer ongoing support and optimization to ensure long-term results and growth."
    }
];

export default function FAQQuoteSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">

                {/* Left: FAQ */}
                <div className="lg:w-1/2 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Answers to the most common questions about Sky Lift Marketing's digital marketing services.
                    </p>

                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex cursor-pointer justify-between items-center p-5 text-left text-gray-900 font-medium hover:bg-gray-100 transition"
                            >
                                {faq.question}
                                <ChevronDown
                                    className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="p-5 text-gray-700 border-t border-gray-200">
                                    {faq.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Right: Request Quote Form */}
                <div className="lg:w-1/2 flex-1">
                    <motion.form
                        className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Request a Free Quote
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Fill out this form and our team will craft a personalized digital marketing plan for your business.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full width */}
                            <input
                                type="text"
                                placeholder="Business Name"
                                className="col-span-1 md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#00A693] outline-none"
                            />

                            <input
                                type="text"
                                placeholder="First Name"
                                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#00A693] outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#00A693] outline-none"
                            />

                            <input
                                type="tel"
                                placeholder="Phone"
                                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#00A693] outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#00A693] outline-none"
                            />

                            {/* Full width */}
                            <input
                                type="url"
                                placeholder="Website URL"
                                className="col-span-1 md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#00A693] outline-none"
                            />

                            {/* Select Service Heading */}
                            <label className="col-span-1 md:col-span-2 text-gray-700 font-medium">
                                What Service Do You Need ?
                            </label>

                            {/* Full width */}
                            <select className="col-span-1 md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#00A693] outline-none">
                                <option value="">Choose a Service</option>
                                <option value="web design">Web Design & Development</option>
                                <option value="Social Media Marketing">SEO</option>
                                <option value="Content Marketing">Content Marketing</option>
                                <option value="Paid Advertising">Paid Advertising</option>
                                <option value="Full Digital Strategy">Full Digital Strategy</option>
                                <option value="local Maps Optimization">Local Maps Optimization</option>
                                <option value="PPC Management">PPC Management</option>
                            </select>
                        </div>
                        <textarea placeholder="Describe your requirements..." rows="4" className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#00A693] outline-none"></textarea>

                        <label className="inline-flex items-center space-x-2">
                            <input type="checkbox" className="w-5 h-5 text-[#00A693] border-gray-300 rounded focus:ring-2 focus:ring-[#00A693] outline-none" />
                            <span className="text-gray-700 text-sm">
                                I agree to be contacted by the Sky Lift Marketing team regarding my request.
                            </span>
                        </label>

                        <button type="submit" className="w-full cursor-pointer bg-[#00A693] hover:bg-[#00947F] text-white font-semibold px-6 py-4 rounded-xl shadow-lg transition-transform hover:scale-105">
                            Submit Request
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
