import React from "react";
import { motion } from "framer-motion";

const Info = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-[#FFFAF0] via-[#E0F7FA] to-[#B2EBF2] text-gray-900">
            {/* Dark BG colour */}
            {/* <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-[#0E1525] via-[#0F2545] to-[#1E3A8A] text-white"></section> */}
            <motion.div
                className="max-w-6xl w-full space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Small heading */}


                {/* Main heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                    <span>Success isn't built on trends - </span>
                    <span className="text-[#00796B]">it's forged through strategic vision and measurable impact...</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed text-gray-800"
                >
                    Sky Lift Group stands at the forefront of digital innovation, combining cutting-edge AI technology
                    with proven marketing strategies. Our dedicated team leverages data-driven insights and creative excellence
                    to transform your brand's potential into tangible success. Together, we'll elevate your digital presence
                    and create campaigns that resonate, convert, and drive sustainable growth.
                </motion.p>

                {/* Call to Action */}
                {/* <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-[#00A693] hover:bg-[#00947F] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg transition transform w-full sm:w-auto"
                >
                    Book Your Free Strategy Call Today
                </motion.button> */}
            </motion.div>
        </section>
    );
};

export default Info;
