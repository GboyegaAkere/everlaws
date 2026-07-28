import { motion } from "framer-motion";
import { Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "../siteConfig";

const POINTS = [
  "Plans matched to your monthly budget, not a fixed template",
  "Clear breakdown of every fee before you commit",
  "Direct access to Sean via WhatsApp for questions anytime",
];

const HOURS = [
  { day: "Monday – Thursday", time: "08:00 – 18:00" },
  { day: "Friday", time: "09:00 – 17:00" },
  { day: "Saturday & Sunday", time: "08:30 – 19:30" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExpertSolutions() {
  return (
    <section id="services-detail" className="px-6 lg:px-10 py-20 lg:py-28 bg-paper-alt">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="text-xs font-medium tracking-wide uppercase text-volt mb-4">
            How it works
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight text-ink">
            Expert solutions for
            <span className="font-accent italic font-medium text-volt"> real</span> budgets
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative rounded-2xl overflow-hidden min-h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
              alt="Reviewing a financing plan together"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/30 to-transparent" />
            <div className="relative p-7 flex flex-col justify-end h-full">
              <ul className="flex flex-col gap-3">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-white text-sm">
                    <CheckCircle2 size={18} className="text-volt shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="bg-navy text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-6">
                <Clock size={20} />
              </span>
              <h3 className="font-display font-semibold text-xl">
                Schedule a consultation
              </h3>
              <p className="text-sm text-white/60 mt-3 max-w-sm">
                Sean's team is available during the hours below, and happy to
                accommodate custom appointments on request.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                {HOURS.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between text-sm border-b border-white/10 pb-3"
                  >
                    <span className="text-white/70">{day}</span>
                    <span className="font-medium">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={whatsappLink("Hi Sean, I'd like to schedule a consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-ink font-medium px-6 py-3.5 rounded-full hover:bg-volt hover:text-white transition-colors w-fit"
            >
              Get Appointment
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
