import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-5 overflow-hidden bg-[#0a0a0a] text-gray-100">
      {/* Container */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">

        {/* Logo & Description */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <img
              src="/assets/sky-lift.png"
              alt="Sky Lift Group"
              className="h-auto w-40 object-cover"
            />
          </div>
          <p className="text-gray-300 text-md font-medium leading-relaxed">
            Empowering businesses through AI-driven digital marketing strategies that deliver clear, measurable results.
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
          <ul className="space-y-2 text-gray-300 text-md font-medium">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Our Work", path: "/work" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="inline-block hover:text-[#00A693] hover:scale-105 transition-all duration-300"
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
          <ul className="space-y-2 text-gray-300 text-md font-medium">
            {[
              { label: "Web Design & Development", to: "/services/web-design" },
              { label: "SEO", to: "/services/seo" },
              { label: "Local Maps Optimization", to: "/services/local-maps" },
              { label: "Social Media Marketing", to: "/services/social-media" },
              { label: "PPC Management", to: "/services/ppc-management" },
              { label: "Content Writing", to: "/services/content-writing" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="inline-block hover:text-[#00A693] hover:scale-105 transition-all duration-300"
                >
                  {link.label}
                </Link>
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
          <ul className="space-y-3 text-gray-300 text-md font-medium">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#00A693]" />
              <a
                href="mailto:info@skyliftgroup.com"
                className="hover:text-[#00A693] transition-colors duration-300"
              >
                info@skyliftgroup.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#00A693]" />
              USA, Canada, Australia
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-bold text-lg text-white">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00A693]/20 hover:bg-[#00A693] transition-all duration-300 text-white"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="mt-5 flex flex-col md:flex-row items-center justify-center pt-6 px-6 border-t border-white/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-md font-medium">
          © 2025 Sky Lift Group. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};
