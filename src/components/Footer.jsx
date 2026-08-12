
import { Zap } from "lucide-react";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services-detail" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-6 lg:px-10 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 font-display font-semibold text-ink"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-volt text-white">
                <Zap size={15} fill="white" />
              </span>
              Everlaws
            </a>

            <p className="mt-4 text-sm leading-6 text-slate max-w-xs">
              Professional financial solutions designed to help you move
              forward with confidence
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold text-ink mb-4">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-ink mb-4">
              Services
            </h3>

            <nav className="flex flex-col gap-3">
              <a
                href="#services-detail"
                className="text-sm text-slate hover:text-ink transition-colors"
              >
                Financial Services
              </a>

              <a
                href="#services-detail"
                className="text-sm text-slate hover:text-ink transition-colors"
              >
                Financing Options
              </a>

              <a
                href="#services-detail"
                className="text-sm text-slate hover:text-ink transition-colors"
              >
                Financial Planning
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-ink mb-4">
              Contact Us
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+15551234567"
                className="text-sm text-slate hover:text-ink transition-colors"
              >
                +12764949802
              </a>

               <p className="text-sm text-slate leading-5">
                1002 Melville Street Memphis,Tennessee
              </p>

              <a
                href="mailto:hello@everlaws.com"
                className="text-sm text-slate hover:text-ink transition-colors"
              >
                everlawcos@gmail.com
              </a>

              <p className="text-sm text-slate leading-5">
                Mon – Fri
                <br />
                9:00 AM – 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate text-center sm:text-left">
            &copy; {new Date().getFullYear()} Everlaws. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-slate hover:text-ink transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-slate hover:text-ink transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

