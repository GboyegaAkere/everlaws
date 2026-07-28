import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { whatsappLink } from "../siteConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-4xl overflow-hidden bg-navy">
          <img
            src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1600&auto=format&fit=crop"
            alt="Electric vehicle on the road at dusk"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/70 to-navy/20" />

          {/* signature: pulsing charge line */}
          <svg
            className="absolute bottom-0 left-0 w-full h-24 opacity-70"
            viewBox="0 0 800 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,70 L180,70 L210,20 L240,90 L270,40 L300,70 L800,70"
              fill="none"
              stroke="url(#voltGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
            />
            <defs>
              <linearGradient id="voltGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1E5FFF" stopOpacity="0" />
                <stop offset="50%" stopColor="#1E5FFF" />
                <stop offset="100%" stopColor="#B8923D" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:px-16 lg:py-32">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-white/70 bg-white/10 px-4 py-1.5 rounded-full mb-6"
            >
              Engineering &middot; EV Financing &middot; Gold Mining
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white max-w-2xl leading-[1.1]"
            >
              Drive electric,
              <br />
              own your{" "}
              <span className="font-accent italic font-medium text-white">dream</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-lg text-white/70 text-base sm:text-lg"
            >
              Sean Wiggins pairs three decades of engineering discipline with
              flexible financing plans that put a Tesla in your driveway
              sooner &mdash; no giant down payment required.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ink font-medium px-6 py-3.5 rounded-full hover:bg-volt hover:text-white transition-colors"
              >
                Book a Free Call
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-volt text-white">
                  <ArrowUpRight size={14} />
                </span>
              </a>
              <a
                href="#services-detail"
                className="inline-flex items-center gap-2 text-white/80 font-medium px-2 py-3.5 hover:text-white transition-colors"
              >
                See financing plans
              </a>
            </motion.div>
          </div>

          {/* floating CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative lg:absolute lg:right-16 lg:bottom-10 mx-6 mb-6 lg:mx-0 lg:mb-0 bg-paper rounded-2xl shadow-xl p-6 max-w-xs"
          >
            <p className="font-display font-semibold text-ink text-lg">
              Let's move your plans forward
            </p>
            <p className="text-sm text-slate mt-2">
              Tell us the Tesla model you want &mdash; we'll reply with a plan
              that fits your budget.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-between bg-white border border-ink/10 rounded-full pl-4 pr-1.5 py-1.5 text-sm text-slate hover:border-volt transition-colors"
            >
              Message on WhatsApp
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-volt text-white shrink-0">
                <Mail size={14} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
