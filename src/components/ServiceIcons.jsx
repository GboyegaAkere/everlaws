import { motion } from "framer-motion";
import { BatteryCharging, HardHat, Coins, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: BatteryCharging, label: "EV Financing" },
  { icon: HardHat, label: "Engineering Contracting" },
  { icon: Coins, label: "Gold Mining Investment" },
  { icon: ShieldCheck, label: "Transparent Terms" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function ServiceIcons() {
  return (
    <section className="px-6 lg:px-10 pb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
        {ITEMS.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="bg-white border border-ink/5 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-volt/40 transition-colors"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-volt/10 text-volt">
              <Icon size={18} />
            </span>
            <p className="text-xs font-medium text-ink/80">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
