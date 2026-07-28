import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop",
    caption: "Structuring a plan around your paycheck, not the sticker price",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
    caption: "Engineering discipline behind every financing structure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610375461369-d613b564f4c1?q=80&w=800&auto=format&fit=crop",
    caption: "Turning gold mining investments into steady, real returns",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Highlights() {
  return (
    <section className="px-6 lg:px-10 py-14">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-5">
        {HIGHLIGHTS.map(({ image, caption }, i) => (
          <motion.div
            key={caption}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
          >
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium leading-snug">
              {caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
