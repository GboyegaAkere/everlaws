import { motion } from "framer-motion";
import { Gift, MessageCircle, CheckCircle2 } from "lucide-react";
import { whatsappLink } from "../siteConfig";

const perks = [
  "Priority entry into upcoming vehicle & investment giveaways",
  "Access to member-only financing rates",
  "Early notice on new gold mining investment slots",
  "Direct line to our team via WhatsApp for fast support",
];

export default function GiveawayMembership() {
  const whatsappUrl = whatsappLink(
    "Hi Sean, I'd like to apply for the giveaway / membership program."
  );

  return (
    <section  className="relative py-20 md:py-28 bg-[#0B1220] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/elon.png"
              alt="Giveaway and membership program"
              className="w-full h-105 object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#1E3A5F] text-white rounded-xl px-6 py-4 shadow-lg hidden sm:block">
            <p className="text-2xl font-serif">100+</p>
            <p className="text-sm opacity-80">Members enrolled</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span id="give" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#4F8FD1] mb-4">
            <Gift size={16} />
            Giveaway & Membership
          </span>

          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Apply for our giveaway & become a member
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Join our membership program to unlock exclusive giveaway entries,
            priority financing options, and direct access to our team. It only
            takes a minute to apply.
          </p>

          <ul className="space-y-3 mb-8">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[#4F8FD1] shrink-0 mt-0.5"
                  size={20}
                />
                <span className="text-gray-200">{perk}</span>
              </li>
            ))}
          </ul>

          
          <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-[#1F3A2E] hover:bg-[#162B22] text-white font-medium px-6 py-3 rounded-full transition-colors shadow-md w-fit"
>
  Apply Here
  </a>
        </motion.div>
      </div>
    </section>
  );
}