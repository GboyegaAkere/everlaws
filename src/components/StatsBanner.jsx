import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function StatsBanner() {
  return (
    <section className="px-6 lg:px-10 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="font-display font-semibold text-2xl sm:text-3xl leading-snug text-ink">
          With a <span className="text-volt">98% client satisfaction</span>{" "}
          rate, Sean's financing plans have put{" "}
          <span className="text-volt">500+ drivers</span> behind the wheel of
          their own Tesla.
        </p>
        <p className="mt-4 text-sm text-slate max-w-xl mx-auto">
          Every plan is structured around real budgets and honest terms,
          helping more families experience the shift to electric.
        </p>
      </motion.div>
    </section>
  );
}
