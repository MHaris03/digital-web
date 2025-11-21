import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/main-logo.png"

export const Footer = () => {
  return (
    <footer className="relative py-20 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.25)] bg-gradient-to-tr from-[#00A693] to-[#00796B]">

      {/* Container */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Section */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Sky Lift Marketing"
              className="h-auto w-40 object-cover"
            />

            {/* <span className="text-2xl font-bold text-white">
              Sky Lift Marketing
            </span> */}
          </div>
          <p className="text-[#E0F2F1] text-md font-semibold">
            Empowering businesses through innovative digital marketing strategies with measurable results.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-bold text-lg text-white">Quick Links</h3>
          <ul className="space-y-2 text-[#E0F2F1] text-md font-semibold">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Our Work", path: "/work" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="inline-block hover:text-[#FFD166] hover:scale-110 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-bold text-lg text-white">Services</h3>
          <ul className="space-y-2 text-[#E0F2F1] text-md font-semibold">
            {["Digital Strategy", "SEO & Marketing", "Content Creation", "Social Media", "Paid Advertising"].map((service) => (
              <li key={service}>
                <span className="inline-block hover:text-[#FFD166] hover:scale-110 transition-all duration-300 cursor-pointer">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-bold text-lg text-white">Contact</h3>
          <ul className="space-y-3 text-[#E0F2F1] text-md font-semibold">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#FFD166]" /> (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#FFD166]" /> hello@skyrisemarketing.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#FFD166]" /> 123 Business Ave, NY
            </li>
          </ul>
        </motion.div>

      </div>

      {/* Bottom Section */}
      <motion.div
        className="mt-12 flex flex-col md:flex-row items-center justify-between pt-6 px-6 border-t border-white/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-white/70 text-md font-semibold">© 2025 Sky Lift Marketing. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="hover:text-[#FFD166] transition-colors text-white/70"><Facebook className="w-6 h-6" /></a>
          <a href="#" className="hover:text-[#FFD166] transition-colors text-white/70"><Twitter className="w-6 h-6" /></a>
          <a href="#" className="hover:text-[#FFD166] transition-colors text-white/70"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="hover:text-[#FFD166] transition-colors text-white/70"><Instagram className="w-6 h-6" /></a>
        </div>
      </motion.div>
    </footer>
  );
};
