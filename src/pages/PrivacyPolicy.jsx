// import React from "react";
// import { motion } from "framer-motion";
// import useSeo from "../hooks/useSeo";
// import { Link } from "react-router-dom";

// const PrivacyPolicy = () => {
//     const sections = [
//         {
//             title: "1. Information We Collect",
//             content:
//                 "We collect information such as your name, email, phone number, business data, and website details when you interact with Sky Lift Group or use our services."
//         },
//         {
//             title: "2. How We Use Your Information",
//             content:
//                 "Your data helps us improve SEO performance, manage PPC campaigns, optimize websites, enhance social media strategies, and power intelligent AI automation systems."
//         },
//         {
//             title: "3. AI Chatbot, AI Work Agent & AI Voice",
//             content:
//                 "Our AI systems process information strictly to provide automation, workflow efficiency, smart communication, and customer engagement. We never sell or misuse your data."
//         },
//         {
//             title: "4. Data Protection & Security",
//             content:
//                 "We implement encryption, secure hosting, and modern cybersecurity practices to protect your information from unauthorized access."
//         },
//         {
//             title: "5. Third-Party Integrations",
//             content:
//                 "We may use trusted tools for analytics, advertising, hosting, and automation. Each provider follows its own privacy and security standards."
//         },
//         {
//             title: "6. Your Rights",
//             content:
//                 "You may request access, updates, or deletion of your personal data at any time by contacting our team."
//         }
//     ];

//     useSeo({
//         title: "Privacy Policy | Sky Lift Group – Data Protection & AI Security",
//         description:
//             "Learn how Sky Lift Group protects your data across AI chatbots, voice agents, automation systems, and digital marketing services. We prioritize security, transparency, and privacy.",
//         canonical: "https://www.skyliftgroup.com/privacy-policy"
//     });

//     return (
//         <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">

//             {/* Animated Background Glow */}
//             <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#00A693]/20 rounded-full blur-[140px]"></div>
//             <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00A693]/10 rounded-full blur-[120px]"></div>

//             <div className="relative max-w-6xl mx-auto px-6 z-10">

//                 {/* Header */}
//                 <motion.div
//                     className="text-center mb-24"
//                     initial={{ opacity: 0, y: -40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <span className="inline-block bg-[#00A693]/20 text-[#00A693] px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-[#00A693]/40 backdrop-blur-md">
//                         Privacy & Data Protection
//                     </span>

//                     <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//                         Built on
//                         <span className="bg-gradient-to-r from-[#00A693] to-teal-300 bg-clip-text text-transparent">
//                             {" "}Trust & Transparency
//                         </span>
//                     </h1>

//                     <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-400">
//                         At Sky Lift Group, we combine digital marketing expertise with AI innovation
//                         while keeping your data secure and protected.
//                     </p>
//                 </motion.div>

//                 {/* Policy Sections */}
//                 <div className="space-y-12">
//                     {sections.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: index * 0.1 }}
//                             viewport={{ once: true }}
//                             whileHover={{ y: -6 }}
//                             className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-lg transition-all duration-500 hover:border-[#00A693]/50 hover:shadow-[0_0_40px_#00A69340]"
//                         >
//                             {/* Left Accent Line */}
//                             {/* <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#00A693] to-transparent rounded-l-3xl"></div> */}

//                             <h2 className="text-2xl font-semibold text-white mb-4">
//                                 {item.title}
//                             </h2>
//                             <p className="text-gray-400 leading-relaxed text-lg">
//                                 {item.content}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* AI Highlight Section */}
//                 <motion.div
//                     className="mt-28 relative bg-gradient-to-r from-[#00A693]/20 via-transparent to-[#00A693]/10 border border-[#00A693]/30 rounded-3xl p-14 text-center backdrop-blur-xl shadow-xl"
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-4xl font-bold text-white mb-6">
//                         Secure AI-Powered Growth
//                     </h3>
//                     <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
//                         From AI Chatbots and AI Work Agents to AI Voice automation,
//                         our intelligent systems are designed with privacy-first architecture.
//                         Your data stays protected while your business scales smarter.
//                     </p>
//                 </motion.div>

//                 {/* CTA */}
//                 <motion.div
//                     className="text-center mt-24"
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <h3 className="text-3xl font-bold text-white mb-8">
//                         Questions About Our Privacy Policy?
//                     </h3>

//                     <Link
//                         to="/contact"
//                         className="relative inline-block px-12 py-4 bg-[#00A693] text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_#00A69380]"
//                     >
//                         Contact Sky Lift Group
//                     </Link>

//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default PrivacyPolicy;



import React from "react";
import { motion } from "framer-motion";
import useSeo from "../hooks/useSeo";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    useSeo({
        title: "Privacy Policy | Sky Lift Group – Data Protection & AI Security",
        description:
            "Learn how Sky Lift Group protects your data across AI chatbots, voice agents, automation systems, and digital marketing services. We prioritize security, transparency, and privacy.",
        canonical: "https://www.skyliftgroup.com/privacy-policy"
    });

    return (
        <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute inset-0 blur-3xl opacity-20"></div>

            <div className="relative max-w-5xl mx-auto px-6 z-10 text-gray-300">

                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block bg-[#00A693]/20 text-[#00A693] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-[#00A693]/40 backdrop-blur-md">
                        Privacy Policy
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Privacy
                        <span className="text-[#00A693]"> Policy</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg">
                        We are committed to protecting your data while delivering
                        high-performance digital marketing and AI-powered solutions.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="space-y-12">

                    {/* Section 1 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Introduction
                        </h2>
                        <p>
                            This page (“Privacy Policy” or “Policy”) provides our policies and
                            procedures for collecting, using and disclosing your information and
                            outlines the security measures we’ve put in place to protect the information
                            that you store using Sky Lift Group.'s ("Sky Lift Group") services,
                            including the services made available through this web site, and any other software
                            or services offered by Sky Lift Group in connection with such services
                            (the “Services”). By using these Services, you consent to the collection, transfer,
                            processing, storage, disclosure and other uses of your information described in this
                            Privacy Policy.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-8">
                            What information does Sky Lift Group collect and store?

                        </h1>

                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Personal Information
                        </h2>
                        <p>
                            When expressing an interest in obtaining additional information about the Services or
                            registering to use the Services, Sky Lift Group requires you to provide your
                            personal contact information, such as your name, company name, address, phone number,
                            and email address (these are referred to below as your “Personal Contact Information”).
                            When purchasing the Services, Sky Lift Group also requires you to provide financial
                            and billing information, such as billing name and address, credit card number, and the
                            number of employees within the organization that will be using the Services
                            (“Billing Information”).
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Questions, Complaints and Contacts
                        </h2>
                        <p>
                            If you have any questions regarding this Privacy Policy, please contact us
                            at Hello@skyliftgroup.com.
                        </p>
                    </div>
                </div>
                <motion.div
                    className="text-center mt-24"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-white mb-8">
                        Questions About Our Privacy Policy?
                    </h3>

                    <Link
                        to="/contact"
                        className="relative inline-block px-12 py-4 bg-[#00A693] text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_#00A69380]"
                    >
                        Contact Sky Lift Group
                    </Link>

                </motion.div>

            </div >
        </section >
    );
};

export default PrivacyPolicy;
