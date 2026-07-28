import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { whatsappLink } from "../siteConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 lg:px-10 py-20 lg:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="max-w-4xl mx-auto bg-navy text-white rounded-2xl p-10 sm:p-14 text-center flex flex-col items-center"
      >
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-volt/20 text-volt mb-6">
          <MessageCircle size={24} />
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl leading-tight">
          Ready to talk numbers?
        </h2>
        <p className="mt-4 text-white/60 max-w-md">
          Message Sean directly on WhatsApp with the Tesla model you have in
          mind. You'll get a straight answer on what a plan could look like
          &mdash; no forms, no waiting.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-ink font-medium px-6 py-3.5 rounded-full hover:bg-volt hover:text-white transition-colors"
        >
          Chat on WhatsApp
          <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
