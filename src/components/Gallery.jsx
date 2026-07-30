import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// NOTE: These are stock placeholder photos, not real clients. Before
// publishing, replace with real customer photos and captions — only ever
// with their explicit consent to be featured.
const GALLERY = [
  {
    image:
      "/t1.jpg",
    caption: "Picked up her Model 3 last spring",
  },
  {
    image:
      "/t2.jpg",
    caption: "First-time EV owner, financed over 36 months",
  },
  {
    image:
      "/t3.jpg",
    caption: "Upgraded from a used sedan to a Model Y",
  },
  {
    image:
      "/t4.jpg",
    caption: "Driving electric for the first time",
  },
  {
    image:
      "/t5.jpg",
    caption: "Traded a long commute for a quiet ride",
  },
  {
    image:
      "/t6.jpg",
    caption: "Financed a Model X for the family",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Gallery() {
  return (
    <section className="px-6 lg:px-10 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="text-xs font-medium tracking-wide uppercase text-volt mb-4 flex items-center gap-2">
            <Sparkles size={14} />
            New owners
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight text-ink">
            People behind the
            <span className="font-accent italic font-medium text-volt"> wheel</span>
          </h2>
          <p className="mt-4 text-slate text-sm max-w-md">
            A look at some of the drivers who financed their way into an EV
            through a plan built around their budget.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map(({ image, caption }, i) => (
            <motion.div
              key={caption}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={`relative rounded-2xl overflow-hidden group ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                {caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}