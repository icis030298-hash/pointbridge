"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language, TRANSLATIONS } from "@/app/page";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.services, href: "#services" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl lg:text-2xl font-semibold tracking-tight text-primary">
              Point Bridge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center border border-border rounded-full p-1 bg-card/50">
              <button
                onClick={() => setLang("ko")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === "ko" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"
                }`}
              >
                KR
              </button>
              <div className="w-[1px] h-3 bg-border mx-1" />
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === "en" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"
                }`}
              >
                EN
              </button>
            </div>

            <a href="mailto:icis10001@gmail.com">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t.getStarted}
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setLang(lang === "en" ? "ko" : "en")}
              className="p-2 text-primary border border-border rounded-full"
            >
              <Globe size={18} />
            </button>
            <button
              className="p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-center gap-4 py-2 border-y border-border">
              <button onClick={() => setLang("ko")} className={`text-sm ${lang === "ko" ? "text-primary font-bold" : "text-muted-foreground"}`}>KR</button>
              <span className="text-border">|</span>
              <button onClick={() => setLang("en")} className={`text-sm ${lang === "en" ? "text-primary font-bold" : "text-muted-foreground"}`}>EN</button>
            </div>
            <a href="mailto:icis10001@gmail.com">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
                {t.getStarted}
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
