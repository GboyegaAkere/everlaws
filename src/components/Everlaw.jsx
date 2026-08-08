import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "../siteConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const highlights = [
  {
    title: "Membership-first model",
    body: "Membership is the mandatory first step. It lets us verify eligibility, walk through terms, and match you to the right vehicle-support package.",
  },
  {
    title: "Up to 50% vehicle contribution",
    body: "Qualifying members may receive a contribution of up to 50% of the approved vehicle cost, subject to eligibility, documentation, and program conditions.",
  },
  {
    title: "Tesla-focused, not Tesla-only",
    body: "Our primary focus is premium EVs, especially Tesla models, with opportunities for members interested in other qualifying automobiles too.",
  },
];

const steps = [
  "Register and pay the applicable membership fee to activate your membership.",
  "Submit your vehicle application and complete the eligibility assessment.",
  "Provide ID, proof of income or financial capacity, vehicle preference, and any other required documentation.",
  "On approval, receive your contribution amount, required member contribution, applicable fees, and expected completion timeline — fully disclosed before any commitment.",
];

export default function Everlaw() {
  return (
    <section id="everlaw" className="relative py-16 lg:py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-4xl overflow-hidden bg-navy">
          <div className="absolute inset-0 bg-linear-to-br from-navy via-navy to-navy/90" />

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-white/70 bg-white/10 px-4 py-1.5 rounded-full mb-6"
            >
              Everlaw &middot; Membership &middot; Vehicle Contribution
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-[1.1]"
            >
              Creating structured opportunities to own the vehicle you{" "}
              <span className="font-accent italic font-medium text-white">desire</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              className="mt-6 max-w-2xl text-white/70 text-base sm:text-lg"
            >
              Everlaw is a membership-based automotive financing and vehicle
              ownership support company. We help eligible members move
              closer to owning the vehicle of their choice, with a primary
              focus on premium electric vehicles &mdash; particularly Tesla
              &mdash; while also supporting members interested in other
              qualifying automobiles.
            </motion.p>

            {/* Highlights */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={3 + i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="font-display font-semibold text-white text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* How it works */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={6}
              className="mt-14 bg-paper rounded-2xl p-6 sm:p-10"
            >
              <h3 className="font-display font-semibold text-ink text-xl sm:text-2xl">
                How the membership process works
              </h3>
              <ul className="mt-6 space-y-4">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 text-volt shrink-0"
                    />
                    <span className="text-slate text-sm sm:text-base leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs sm:text-sm text-slate/70 leading-relaxed">
                Membership does not automatically guarantee vehicle approval
                or a 50% contribution. All applications are subject to
                eligibility requirements, verification, approval,
                availability, and the specific terms of the applicable
                Everlaw agreement. All financial obligations and conditions
                are disclosed to members before any payment or contractual
                commitment is made.
              </p>

              
              <a  href={whatsappLink(
                  "Hi, I'd like to learn more about Everlaw membership and vehicle contribution program"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-ink text-white font-medium px-6 py-3.5 rounded-full hover:bg-volt transition-colors"
              >
                Chat with Everlaw on WhatsApp
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-volt text-white">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}