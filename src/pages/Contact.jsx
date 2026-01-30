import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SliderBar from "./Sliderbar";
import useSeo from "../hooks/useSeo";
import "flag-icons/css/flag-icons.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    businessname: "",
    weburl: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({ businessname: "", weburl: "", firstname: "", lastname: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useSeo({
    title: "Contact Us | Sky Lift Group – Get in Touch",
    description:
      "Get in touch with Sky Lift Group. Contact us for inquiries about digital marketing, SEO, web design, PPC, and social media services to grow your business.",
    canonical: "https://www.skyliftgroup.com/contact"
  });

  return (
    <div className="flex flex-col">
      <section
        className="relative w-full h-[88vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url("/assets/contact.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-6xl font-bold text-center"
        >
          Let's Start a Conversation

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-lg md:text-xl mt-4 text-center max-w-xl"
        >
          Have a project in mind? Send us a message and our team will get back to you shortly.
        </motion.p>
      </section>
      {/* <SliderBar /> */}
      {/* FORM + INFO SECTION */}
      <section className="py-20 bg-[#0a0a0a] text-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* INFO CARDS */}
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-white" />,
                  title: "Email Us",
                  lines: ["info@skyliftgroup.com"],
                },
                {
                  icon: <MapPin className="h-6 w-6 text-white" />,
                  title: "Location",
                  lines: [
                    <div className="flex items-center gap-2">
                      <i className="fa fa-flag text-red-500"></i>
                      United States Of America
                    </div>,
                    <div className="flex items-center gap-2">
                      <i className="fa fa-flag text-blue-500"></i>
                      Canada
                    </div>,
                    <div className="flex items-center gap-2">
                      <i className="fa fa-flag text-green-500"></i>
                      Australia
                    </div>,
                  ],
                },
                {
                  icon: <Clock className="h-6 w-6 text-white" />,
                  title: "Business Hours",
                  lines: ["Mon - Fri: 9AM - 5PM (est)", "Sat - Sun: Closed"],
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-[#111111] shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#00A693] shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-100 mb-1">{item.title}</h3>
                      {item.lines.map((l, idx) => (
                        <p key={idx} className="text-sm text-gray-300">{l}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="p-10 rounded-2xl bg-[#111111] shadow-lg">

                <h2 className="text-3xl font-bold mb-6 text-gray-100">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div>
                      <label className="block mb-1 font-medium text-gray-100">Business Name *</label>
                      <input
                        className="border border-gray-700 rounded-lg px-4 py-3 w-full bg-[#0a0a0a] text-gray-100 focus:ring-2 focus:ring-[#00A693] outline-none"
                        name="businessname"
                        value={formData.businessname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div>
                      <label className="block mb-1 font-medium text-gray-100">Website URL *</label>
                      <input
                        className="border border-gray-700 rounded-lg px-4 py-3 w-full bg-[#0a0a0a] text-gray-100 focus:ring-2 focus:ring-[#00A693] outline-none"
                        name="weburl"
                        value={formData.weburl}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-1 font-medium text-gray-100">First Name *</label>
                      <input
                        className="border border-gray-700 rounded-lg px-4 py-3 w-full bg-[#0a0a0a] text-gray-100 focus:ring-2 focus:ring-[#00A693] outline-none"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-100">Last Name *</label>
                      <input
                        className="border border-gray-700 rounded-lg px-4 py-3 w-full bg-[#0a0a0a] text-gray-100 focus:ring-2 focus:ring-[#00A693] outline-none"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-1 font-medium text-gray-100">Phone</label>
                      <input
                        className="border border-gray-700 rounded-lg px-4 py-3 w-full bg-[#0a0a0a] text-gray-100 focus:ring-2 focus:ring-[#00A693] outline-none"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-100">Email *</label>
                      <input
                        className="border border-gray-700 rounded-lg px-4 py-3 w-full bg-[#0a0a0a] text-gray-100 focus:ring-2 focus:ring-[#00A693] outline-none"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-100"> What Service Do You Need ? *</label>
                    <select className="col-span-1 cursor-pointer md:col-span-2 border border-gray-700 rounded-lg px-4 py-3 w-full bg-[#0a0a0a] text-gray-100 focus:ring-2 focus:ring-[#00A693] outline-none">
                      <option value="">Choose a Service</option>
                      <option value="web design">Web Design & Development</option>
                      <option value="SEO">SEO</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Paid Advertising">Paid Advertising</option>
                      <option value="Full Digital Strategy">Full Digital Strategy</option>
                      <option value="local Maps Optimization">Local Maps Optimization</option>
                      <option value="PPC Management">PPC Management</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-100">Message *</label>
                    <textarea
                      className="border border-gray-700 rounded-lg px-4 py-3 w-full bg-[#0a0a0a] text-gray-100 focus:ring-2 focus:ring-[#00A693] outline-none"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer md:w-auto bg-[#00A693] text-white px-8 py-3 rounded-lg font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* MAP PLACEHOLDER */}
      {/* <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-md bg-white"
          >
            <div className="aspect-video flex items-center justify-center bg-gray-100">
              <MapPin className="h-12 w-12 text-[#00A693] mb-3" />
              <p className="text-gray-600">Interactive map will display here</p>
            </div>
          </motion.div>
        </div>
      </section> */}

    </div>
  );
};

export default Contact;
