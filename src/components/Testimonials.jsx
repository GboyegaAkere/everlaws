import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Placeholder testimonials — swap in real client quotes (with permission) before publishing.
const TESTIMONIALS = [
  {
    quote:
      "I didn't think I'd own a Tesla for another five years. Sean's team worked out a plan that matched what I actually earn, and walked me through every number before I signed anything.",
    name: "Emily Carter",
    role: "Model 3 owner",
  },
  {
    quote:
      "What stood out was the honesty. No hidden fees, no pressure — just a clear plan and someone who answered every question on WhatsApp within the hour.",
    name: "Michael Johnson",
    role: "Model Y owner",
  },
  {
    quote:
      "Sean's engineering background shows in how he explains financing — structured, clear, and focused on what actually works for my budget.",
    name: "Grace Thompson",
    role: "Client since 2024",
  },
  {
    quote:
      "I'd been quoted ridiculous down payments everywhere else. Sean's plan actually fit what I bring home every month.",
    name: "David Miller",
    role: "Model 3 owner",
  },
  {
    quote:
      "Every fee was explained upfront. No surprises when it came time to sign.",
    name: "Jessica Anderson",
    role: "Model Y owner",
  },
  {
    quote:
      "I messaged Sean on a Sunday night expecting a slow reply, and he answered within minutes with real numbers.",
    name: "Christopher Davis",
    role: "Model X owner",
  },
  {
    quote:
      "It felt less like a sales pitch and more like talking to an engineer who wanted the plan to actually work for me.",
    name: "Amanda Wilson",
    role: "Client since 2025",
  },
  {
    quote:
      "I compared three financing options before this one. Sean's was the only one that didn't bury terms in fine print.",
    name: "Matthew Brown",
    role: "Model 3 owner",
  },
  {
    quote:
      "Going electric felt out of reach on my salary until I saw how the payments actually broke down month to month.",
    name: "Ashley Martinez",
    role: "Model Y owner",
  },
  {
    quote:
      "Sean followed up after delivery just to make sure everything was still working for my budget. That's rare.",
    name: "Daniel Taylor",
    role: "Client since 2023",
  },
];



const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 lg:px-10 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="text-xs font-medium tracking-wide uppercase text-volt mb-4">
            Proven
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight text-ink">
            What our <span className="font-accent italic font-medium text-volt">clients</span> say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role }, i) => (
            <motion.figure
              key={name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="bg-paper-alt rounded-2xl p-7 flex flex-col"
            >
              <Quote size={28} className="text-volt/50 mb-4" />
              <blockquote className="text-sm text-ink/80 leading-relaxed flex-1">
                {quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-volt text-white font-display font-semibold text-sm">
                  {name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium text-ink">{name}</span>
                  <span className="block text-xs text-slate">{role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
