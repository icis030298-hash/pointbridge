"use client";

import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import Link from "next/link";
import { ArrowLeft, Share2, Printer, Bookmark, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/app/page";

const CONTENT = {
  en: {
    back: "Back to Insights",
    category1: "Risk Management",
    category2: "Long-term Analysis",
    title: "Resilience and Anti-fragility: A 30-Year Longitudinal Analysis of Global Blue-Chip Defensive Sectors",
    author: "Point Bridge Analytics",
    readTime: "10 min read",
    section1Title: "1. Research Background: Resilience in Economic Crisis Environments",
    section1Text: "The global market has experienced extreme macro volatility over the past 30 years, including the dot-com bubble, the global financial crisis, and the pandemic. This report tracks longitudinal data over 30 years for global blue-chip entities with a market capitalization exceeding 5 trillion won to analyze data patterns of 'defensive blue-chips' that preserve capital value during economic downturns.",
    section2Title: "2. Methodology: Anti-fragility Index Modeling",
    section2Text: "Point Bridge has quantified Nassim Taleb's theory by independently developing an **Anti-fragility Index ($AF$)** that measures how robustly a firm's intrinsic value ($V$) is maintained when external shocks ($\Delta S$) are applied.",
    section2Formula: "AF = \\frac{\\partial^2 V}{\\partial S^2} \\times \\frac{1}{\\sigma_{cashflow}}",
    section2SubText: "Where $\\sigma_{cashflow}$ is the 30-year cash flow volatility of the firm. This model shows a high correlation particularly in Consumer Staples and essential goods sectors.",
    section3Title: "3. Case Study: Data Visualization of Defensive Sectors",
    section3Item1Title: "Low Beta Strategy",
    section3Item1Text: "Our analysis shows that blue-chip entities in defensive sectors maintain a low beta ($\\beta < 0.8$) relative to the overall market return ($R_m$) during bear markets, serving as key anchors to lower total portfolio volatility.",
    section3Item2Title: "Pricing Power",
    section3Item2Text: "30-year time-series analysis reveals that these companies possess unique data characteristics that defend operating profit margins (OPM) through pricing power even in inflationary periods.",
    section3Footer: "The alcoholic beverage and essential goods sectors have extremely low demand elasticity relative to economic fluctuations. These defensive blue-chips serve as key anchors to lower portfolio volatility and generate stable cash flows amidst macro-economic uncertainty.",
    section4Title: "4. Conclusion: Strategic Asset Allocation Roadmap",
    section4Text: "Data does not lie. Point Bridge Analytics precisely processes long-term data from global blue-chip companies to help partners build anti-fragile portfolios that convert market shocks into growth opportunities rather than just 'enduring.' Our strategic consulting drives stable capital appreciation for global partners through quantitative validation."
  },
  ko: {
    back: "인사이트 목록으로",
    category1: "리스크 관리",
    category2: "장기 분석",
    title: "Resilience and Anti-fragility: 글로벌 블루칩 방어 섹터에 대한 30년 시계열 분석",
    author: "Point Bridge Analytics",
    readTime: "10분 소요",
    section1Title: "1. 연구 배경: 경제 위기 환경에서의 복원력(Resilience)",
    section1Text: "글로벌 시장은 지난 30년간 닷컴 버블, 글로벌 금융위기, 팬데믹 등 극심한 매크로(Macro) 변동성을 겪어왔습니다. 본 보고서는 시가총액 5조 원 이상의 글로벌 우량 기업(Global Blue-Chip)들을 대상으로 30년 이상의 시계열 데이터(Longitudinal Data)를 추적하여 경기 하강 국면에서도 자본의 가치를 보전하는 '방어적 우량주'의 데이터 패턴을 분석합니다.",
    section2Title: "2. 방법론: 안티프래질(Anti-fragility) 지수 모델링",
    section2Text: "Point Bridge는 나심 탈레브의 이론을 계량화하여, 외부 충격($\\Delta S$)이 가해졌을 때 기업의 내재 가치($V$)가 얼마나 견고하게 유지되는지를 측정하는 **안티프래질 지수($AF$)**를 독자적으로 개발했습니다.",
    section2Formula: "AF = \\frac{\\partial^2 V}{\\partial S^2} \\times \\frac{1}{\\sigma_{cashflow}}",
    section2SubText: "여기서 $\\sigma_{cashflow}$는 해당 기업의 30년간 현금 흐름 변동성입니다. 본 모델은 특히 식음료(Consumer Staples) 및 필수 소비재 섹터에서 높은 상관관계를 보입니다.",
    section3Title: "3. 케이스 스터디: 방어적 섹터의 데이터 시각화",
    section3Item1Title: "Low Beta Strategy",
    section3Item1Text: "당사의 분석에 따르면, 필수 소비재 섹터의 우량 기업들은 하락장에서 시장 전체 수익률($R_m$) 대비 낮은 베타($\\beta < 0.8$)를 유지하며 포트폴리오의 전체 변동성을 낮춥니다.",
    section3Item2Title: "Pricing Power",
    section3Item2Text: "30년 시계열 분석 결과, 이러한 기업들은 인플레이션 국면에서도 가격 전가력을 통해 영업이익률($OPM$)을 방어하는 고유의 데이터 특성을 보유하고 있습니다.",
    section3Footer: "주류 및 필수 소비재 섹터는 경기 변동에 대한 수요 탄력성이 극히 낮습니다. 이러한 방어주 성격의 우량 기업들은 포트폴리오의 전체 변동성을 낮추는 핵심 앵커(Anchor) 역할을 하며 거시 경제적 불확실성 속에서도 안정적인 현금 흐름을 창출합니다.",
    section4Title: "4. 결론: 전략적 자산 배분 로드맵",
    section4Text: "데이터는 거짓말을 하지 않습니다. Point Bridge Analytics는 글로벌 우량 기업들의 장기 데이터를 정밀하게 가공하여, 파트너사가 단순히 '버티는' 투자가 아닌, 시장의 충격을 성장의 발판으로 삼는 안티프래질 포트폴리오를 구축할 수 있도록 지원합니다. 우리의 전략 컨설팅 용역은 이러한 정량적 실증 분석을 통해 글로벌 파트너사의 안정적인 자본 증식을 견인합니다."
  }
};

export default function ArticleTwo() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];
  const footerT = TRANSLATIONS[lang].footer;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/insights">
              <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {c.back}
              </Button>
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary font-medium mb-4 uppercase tracking-wider">
              <span>{c.category1}</span>
              <span className="text-border">•</span>
              <span>{c.category2}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary leading-tight mb-6 break-keep">
              {c.title}
            </h1>
            
            <div className="flex items-center justify-between py-6 border-y border-border">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">PB</div>
                <div>
                  <div className="text-sm font-semibold text-primary">{c.author}</div>
                  <div className="text-xs text-muted-foreground">{lang === 'en' ? 'May 05, 2026' : '2026년 5월 5일'} • {c.readTime}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground"><Share2 size={18} /></Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground"><Printer size={18} /></Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground"><Bookmark size={18} /></Button>
              </div>
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-12 mb-6">{c.section1Title}</h2>
            <p className="break-keep">{c.section1Text}</p>

            <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-12 mb-6">{c.section2Title}</h2>
            <div className="break-keep">
              {lang === 'en' ? (
                <p>
                  Point Bridge has quantified Nassim Taleb's theory by independently developing an **Anti-fragility Index (<InlineMath math="AF" />)** that measures how robustly a firm's intrinsic value (<InlineMath math="V" />) is maintained when external shocks (<InlineMath math="\Delta S" />) are applied.
                </p>
              ) : (
                <p>
                  Point Bridge는 나심 탈레브의 이론을 계량화하여, 외부 충격(<InlineMath math="\Delta S" />)이 가해졌을 때 기업의 내재 가치(<InlineMath math="V" />)가 얼마나 견고하게 유지되는지를 측정하는 **안티프래질 지수(<InlineMath math="AF" />)**를 독자적으로 개발했습니다.
                </p>
              )}
            </div>
            
            <div className="my-10 p-8 bg-secondary/50 rounded-2xl border border-border flex items-center justify-center">
              <BlockMath math={c.section2Formula} />
            </div>

            <div className="break-keep mt-6">
              {lang === 'en' ? (
                <p>
                  Where <InlineMath math="\sigma_{cashflow}" /> is the 30-year cash flow volatility of the firm. This model shows a high correlation particularly in Consumer Staples and essential goods sectors.
                </p>
              ) : (
                <p>
                  여기서 <InlineMath math="\sigma_{cashflow}" />는 해당 기업의 30년간 현금 흐름 변동성입니다. 본 모델은 특히 식음료(Consumer Staples) 및 필수 소비재 섹터에서 높은 상관관계를 보입니다.
                </p>
              )}
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-12 mb-6">{c.section3Title}</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-primary w-5 h-5" />
                  <h3 className="text-lg font-semibold text-primary m-0">{c.section3Item1Title}</h3>
                </div>
                <p className="text-sm leading-relaxed m-0">{c.section3Item1Text}</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-primary w-5 h-5" />
                  <h3 className="text-lg font-semibold text-primary m-0">{c.section3Item2Title}</h3>
                </div>
                <p className="text-sm leading-relaxed m-0">{c.section3Item2Text}</p>
              </div>
            </div>
            <p className="break-keep">{c.section3Footer}</p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-semibold text-primary mt-0 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                {c.section4Title}
              </h2>
              <p className="break-keep text-lg font-medium text-primary/80 mb-0">{c.section4Text}</p>
            </div>
          </div>
        </article>
      </main>

      <Footer t={footerT} />
    </div>
  );
}
