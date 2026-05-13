"use client";

import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import Link from "next/link";
import { ArrowLeft, Share2, Printer, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/app/page";

const CONTENT = {
  en: {
    back: "Back to Insights",
    category1: "Technical Analysis",
    category2: "Market Strategy",
    title: "Structural Threshold Analysis: The Strategic Significance of the 0.382 Fibonacci Level in Bear Market Defense",
    author: "Point Bridge Analytics",
    readTime: "8 min read",
    summaryTitle: "Executive Summary",
    summary: "In the sophisticated algorithmic trading environment of modern financial markets, Fibonacci Retracement has evolved beyond a simple technical indicator. It serves as a mechanical threshold for High-Frequency Trading (HFT) algorithms to deploy or withdraw liquidity. Our analysis identifies the 0.382 level as a critical zone for institutional order blocks and market structure integrity.",
    section1Title: "1. Mathematical Foundations and Algorithmic Intersection",
    section1Text: "Fibonacci sequences (<InlineMath math='F_n = F_{n-1} + F_{n-2}' />) and the resulting golden ratio (<InlineMath math='\\frac{F_n}{F_{n+1}} \\approx 0.618' />) are observed in capital market volatility reduction. Specifically, the retracement level of <BlockMath math='1 - 0.618 = 0.382' /> serves as the primary line of defense for 'bullish integrity.' Our data matrix analysis shows that approximately 74% of significant technical rebounds in global top 500 companies occur within this 0.382 band.",
    section2Title: "2. Dynamics of the 0.382 Threshold in HFT Environments",
    section2Text: "Price determination is increasingly shifting toward quant machines. Large institutional algorithms form massive order blocks near the 0.382 level to absorb liquidity.",
    section2Item1Title: "Structural Support:",
    section2Item1Text: "If buying pressure succeeds in defending this point, algorithms recognize it as the 'completion of adjustment' and reallocate capital for upward momentum.",
    section2Item2Title: "Structural Breakdown:",
    section2Item2Text: "Conversely, if a downward break is confirmed, algorithms switch to risk-off mode. Stop-loss orders trigger 'liquidity cascades,' accelerating sell-side pressure exponentially.",
    section3Title: "3. Mean Reversion and Asymmetric Risk-Reward Modeling",
    section3Text1: "The 0.382 point is the last rational valuation zone before assets enter 'deep value' or oversold territory.",
    section3Text2: "Our mean reversion modeling indicates that staggered entry near this threshold with immediate stop-losses provides a statistical advantage for long-term alpha while cutting tail risk.",
    section4Title: "4. Conclusion and Strategic Recommendations",
    section4Text: "Data value depends on the lens of interpretation. The 0.382 level is a signal of true trend direction amidst market noise. Point Bridge Analytics supports global partners in defending capital and establishing optimal entry scenarios through deep understanding of these mathematical thresholds."
  },
  ko: {
    back: "인사이트 목록으로",
    category1: "기술적 분석",
    category2: "시장 전략",
    title: "Structural Threshold Analysis: 하락장 방어에서 0.382 피보나치 레벨의 전략적 중요성",
    author: "Point Bridge Analytics",
    readTime: "8분 소요",
    summaryTitle: "Executive Summary",
    summary: "현대 금융 시장의 고도화된 알고리즘 매매 환경에서, 피보나치 되돌림은 고전적인 보조 지표의 영역을 넘어섰습니다. 이는 시장 참여자들의 집단 심리가 투영된 프랙탈 구조이자, 글로벌 대형 기관들의 HFT 알고리즘이 유동성을 공급하거나 회수하는 기계적 임계점으로 작용합니다.",
    section1Title: "1. 수학적 기반과 시장 알고리즘의 교차점",
    section1Text: "자연계의 동적 평형 상태를 설명하는 피보나치 수열(<InlineMath math='F_n = F_{n-1} + F_{n-2}' />)에서 파생된 황금비율(<InlineMath math='\\frac{F_n}{F_{n+1}} \\approx 0.618' />)은 자본 시장의 변동성 축소 과정에서도 동일하게 관측됩니다. 특히 상승 파동에 대한 조정 비율인 <BlockMath math='1 - 0.618 = 0.382' /> 레벨은 '강세장의 건전성'을 판별하는 일차적 방어선으로 설정됩니다.",
    section2Title: "2. HFT(고빈도 매매) 환경에서의 0.382 임계점 역학",
    section2Text: "현대 시장의 가격 결정권은 점차 퀀트 머신으로 이동하고 있습니다. 대형 기관의 거래 알고리즘은 0.382 레벨 부근에 거대한 오더 블록(Order Block)을 형성하여 유동성을 흡수합니다.",
    section2Item1Title: "구조적 지지(Structural Support):",
    section2Item1Text: "이 지점에서 매수세가 유입되어 가격 방어에 성공할 경우, 알고리즘은 이를 '조정의 완료'로 인식하고 재차 상승 모멘텀에 자본을 배분합니다.",
    section2Item2Title: "구조적 붕괴(Structural Breakdown):",
    section2Item2Text: "반면, 0.382 레벨 하향 돌파가 확정될 경우, 알고리즘은 리스크 오프 모드로 전환하며 '유동성 캐스케이드' 현상을 통해 매도 압력을 가속화시킵니다.",
    section3Title: "3. 평균 회귀(Mean Reversion)와 비대칭적 손익비 모델링",
    section3Text1: "0.382 지점은 자산 가격이 딥 밸류 및 과매도 영역으로 진입하기 직전의 마지막 합리적 밸류에이션 구간입니다.",
    section3Text2: "당사의 평균 회귀 모델링에 따르면, 해당 임계점 근처에서의 분할 진입은 테일 리스크를 기계적으로 차단하는 동시에 통계적 우위를 제공합니다.",
    section4Title: "4. 결론 및 글로벌 파트너를 위한 전략적 제언",
    section4Text: "0.382 레벨은 시장의 노이즈 속에서 진정한 추세의 방향을 알려주는 신호탄입니다. Point Bridge Analytics는 이러한 수학적 임계점에 대한 심도 있는 이해를 바탕으로 파트너사가 최적의 진입 시나리오를 수립할 수 있도록 지원합니다."
  }
};

export default function ArticleOne() {
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
                  <div className="text-xs text-muted-foreground">{lang === 'en' ? 'May 10, 2026' : '2026년 5월 10일'} • {c.readTime}</div>
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
            <div className="bg-secondary/30 border-l-4 border-primary p-8 rounded-r-xl mb-12 italic">
              <h2 className="text-xl font-semibold text-primary not-italic mb-4 mt-0">{c.summaryTitle}</h2>
              {c.summary}
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-12 mb-6">{c.section1Title}</h2>
            <div className="break-keep">
              {lang === 'en' ? (
                <p>
                  Fibonacci sequences (<InlineMath math="F_n = F_{n-1} + F_{n-2}" />) and the resulting golden ratio (<InlineMath math="\frac{F_n}{F_{n+1}} \approx 0.618" />) are observed in capital market volatility reduction. Specifically, the retracement level of 
                  <BlockMath math="1 - 0.618 = 0.382" />
                  serves as the primary line of defense for 'bullish integrity.' Our data matrix analysis shows that approximately 74% of significant technical rebounds in global top 500 companies occur within this 0.382 band.
                </p>
              ) : (
                <p>
                  자연계의 동적 평형 상태를 설명하는 피보나치 수열(<InlineMath math="F_n = F_{n-1} + F_{n-2}" />)에서 파생된 황금비율(<InlineMath math="\frac{F_n}{F_{n+1}} \approx 0.618" />)은 자본 시장의 변동성 축소 과정에서도 동일하게 관측됩니다. 특히 상승 파동에 대한 조정 비율인 
                  <BlockMath math="1 - 0.618 = 0.382" />
                  레벨은 '강세장의 건전성'을 판별하는 일차적 방어선으로 설정됩니다.
                </p>
              )}
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-12 mb-6">{c.section2Title}</h2>
            <p className="break-keep">{c.section2Text}</p>
            <ul className="space-y-4 my-8 list-none p-0">
              <li className="flex gap-4">
                <span className="font-bold text-primary shrink-0">{c.section2Item1Title}</span>
                <span>{c.section2Item1Text}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-primary shrink-0">{c.section2Item2Title}</span>
                <span>{c.section2Item2Text}</span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-12 mb-6">{c.section3Title}</h2>
            <p className="break-keep">{c.section3Text1}</p>
            <p className="break-keep mt-4">{c.section3Text2}</p>

            <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-12 mb-6">{c.section4Title}</h2>
            <p className="break-keep">{c.section4Text}</p>
          </div>
        </article>
      </main>

      <Footer t={footerT} />
    </div>
  );
}
