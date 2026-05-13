import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-tight">
                Point Bridge
              </span>
            </Link>
            <p className="mt-4 text-primary-foreground/80 max-w-md leading-relaxed">
              Transforming businesses through data-driven insights and strategic
              consulting. We help enterprises navigate complexity and achieve
              sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#methodology"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/70 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80 leading-relaxed text-sm lg:text-base">
                  36, Dongtanjungsimsangga 1-gil, Hwaseong-si,
                  <br />
                  Gyeonggi-do, Republic of Korea
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70 shrink-0" />
                <a
                  href="tel:+82-10-2953-3418"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +82 10 2953 3418
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70 shrink-0" />
                <a
                  href="mailto:icis10001@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  contact@pointbridge.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} Point Bridge. All rights reserved.
            </div>
            <div className="text-[10px] text-primary-foreground/40 font-light">
              BRN: 564-12-03412
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
