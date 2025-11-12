import { motion } from "framer-motion";
import Mianimg from "../assets/plan-mainimg.avif";
import Leftimg from "../assets/plan-leftsmall.avif";
import Rightimg from "../assets/plan-rightsmall.avif";

export default function Plan() {
  return (
    <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-hidden">
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          className="col-span-2 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={Mianimg}
            alt="Charts and graphs"
            className="w-full h-64 md:h-80 object-cover rounded-2xl"
          />
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={Rightimg}
            alt="Creative marketing team brainstorming"
            className="w-full h-48 object-cover rounded-2xl"
          />
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={Leftimg}
            alt="Digital marketing strategy meeting"
            className="w-full h-48 object-cover rounded-2xl"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-semibold text-[#00796B] uppercase tracking-wide mb-2">
          Strategy. Innovation. Measurable Growth.
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          We craft strategies that connect, inspire, and deliver results.
        </h2>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            At <strong className="text-[#00796B]">Sky Rise Marketing</strong>, we believe growth starts with a clear vision and
            data-backed execution. Every strategy we design is tailored to your brand’s
            identity and your audience’s behavior — because success isn’t one-size-fits-all.
          </p>

          <p>
            Our approach blends creativity with analytics, ensuring your message doesn’t
            just reach people — it moves them. From building brand awareness to driving
            high-value conversions, we turn ideas into measurable outcomes.
          </p>

          <p>
            Whether it’s SEO, content creation, paid media, or complete digital transformation,
            our team delivers strategies that evolve with your business and the market.
            Let’s build a digital presence that’s smart, scalable, and unforgettable.
          </p>
        </div>

        {/* <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
          <p className="font-semibold text-gray-900">Your Growth, Our Mission</p>
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-2xl text-gray-800"
          >
            ↓
          </motion.span>
        </div> */}
      </motion.div>

    </section>
  );
}
