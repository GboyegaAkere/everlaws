import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Hammer, Gem } from "lucide-react";
import { useEffect, useState } from "react";

const CREDENTIALS = [
  { icon: GraduationCap, label: "Engineering degree, Stanford University" },
  { icon: Hammer, label: "30 years as an engineering contractor" },
  { icon: Gem, label: "Investor in gold mining ventures" },
];

const IMAGES = [
  "/sean1.png",
  "/sean2.png",
  "/sean3.png",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="px-6 lg:px-10 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* TEXT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="text-xs font-medium tracking-wide uppercase text-volt mb-4">
            About Sean
          </p>

          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight text-ink">
            An engineer at heart,
            <br />
            an{" "}
            <span className="font-accent italic font-medium text-volt">
              enabler
            </span>{" "}
            by choice
          </h2>

          <p className="mt-6 text-slate text-base leading-relaxed max-w-lg">
            At 54, Sean Wiggins has spent his career solving hard problems
            &mdash; first as an engineering contractor delivering complex
            projects, later as an investor in gold mining, and now as the
            driving force behind financing plans that make electric vehicles
            reachable for working families, not just early adopters.
          </p>

          <p className="mt-4 text-slate text-base leading-relaxed max-w-lg">
            His philosophy is simple: transparent terms, honest conversations,
            and a plan that fits your budget &mdash; not the other way around.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {CREDENTIALS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 text-sm text-ink/80"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-volt/10 text-volt shrink-0">
                  <Icon size={16} />
                </span>
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* IMAGE SLIDER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden aspect-4/5 relative">

            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={IMAGES[currentImage]}
                alt="Sean Wiggins"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "w-7 bg-white"
                      : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="absolute -bottom-6 -left-6 bg-navy text-white rounded-2xl px-6 py-5 shadow-xl max-w-55">
            <p className="font-display font-bold text-3xl">30+</p>

            <p className="text-xs text-white/60 mt-1">
              Years across engineering, mining &amp; EV financing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}