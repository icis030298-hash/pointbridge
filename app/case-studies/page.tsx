"use client";

import Link from "next/link";
import { ArrowLeft, TrendingUp, BarChart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/app/page";

export default function CaseStudies() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].caseStudies;
  const footerT = TRANSLATIONS[lang].footer;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.backLink}
            </Button>
          </Link>

          <div className="space-y-4 mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t.title}</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary leading-tight">
              {t.mainTitle}
            </h1>
            <p className="text-xl text-muted-foreground italic">{t.subtitle}</p>
          </div>

          <div className="grid gap-8 mb-16">
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed break-keep">
                    {t.details}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck size={120} />
              </div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                {t.resultTitle}
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed font-medium break-keep">
                {t.result}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer t={footerT} />
    </div>
  );
}
