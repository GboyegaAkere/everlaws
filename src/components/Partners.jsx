
import { motion } from "framer-motion";

// Partner marks
const PARTNERS = [
  { name: "Voltra Motors", color: "#1E5FFF" },
  { name: "Meridian Capital", color: "#B8923D" },
  { name: "Ironclad Finance", color: "#0EA5A0" },
  { name: "Northgate Auto", color: "#E85D4E" },
  { name: "Summit Energy", color: "#7C5CFF" },
  { name: "Clearline Leasing", color: "#22A559" },
  { name: "Bright Path Credit", color: "#F0A93E" },
  { name: "Anchor Point Bank", color: "#2D6FE0" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Partners() {
  // Duplicate the partners so the animation can loop continuously
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section className="px-6 lg:px-10 py-14">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="text-center text-xs font-medium tracking-wide uppercase text-slate mb-8"
        >
          Our Partners
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Continuously moving partner track */}
          <motion.div
            className="flex w-max gap-5"
            animate={{
              x: "-50%",
            }}
            transition={{
              x: {
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          >
            {track.map(({ name, color }, i) => (
              <span
                key={`${name}-${i}`}
                className="flex items-center gap-2.5 shrink-0 rounded-full px-5 py-2.5 font-display font-semibold text-sm text-white shadow-sm"
                style={{ backgroundColor: color }}
              >
                <span className="w-2 h-2 rounded-full bg-white/70" />
                {name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

