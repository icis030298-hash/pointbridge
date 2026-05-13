"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/app/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Insights() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].insights;
  const footerT = TRANSLATIONS[lang].footer;

  const articles = [
    { ...t.article1, icon: BookOpen },
    { ...t.article2, icon: BookOpen },
  ];

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
              {lang === "en" ? "Market Insights & Analysis" : "시장 분석 및 인사이트"}
            </h1>
          </div>

          <div className="grid gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border bg-card overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Clock size={14} />
                    {article.date}
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-semibold text-primary leading-snug break-keep">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto text-primary font-medium hover:no-underline flex items-center gap-2">
                    {lang === "en" ? "Read full article" : "전체 읽기"}
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer t={footerT} />
    </div>
  );
}
