import { Database, LineChart, Route, ArrowRight } from "lucide-react";

interface MethodologyProps {
  lang: "en" | "ko";
}

export function Methodology({ lang }: MethodologyProps) {
  const translations = {
    en: {
      badge: "Our Approach",
      title: "A Proven Methodology",
      description: "Our systematic approach ensures consistent results and transparent communication throughout your engagement.",
      steps: [
        {
          number: "01",
          icon: Database,
          title: "Data Collection",
          description: "We gather and consolidate data from multiple sources, ensuring comprehensive coverage and data integrity for accurate analysis.",
        },
        {
          number: "02",
          icon: LineChart,
          title: "Analysis",
          description: "Our experts apply advanced analytics, statistical modeling, and machine learning to uncover patterns and derive meaningful insights.",
        },
        {
          number: "03",
          icon: Route,
          title: "Strategic Roadmap",
          description: "We translate insights into actionable strategies with clear implementation plans, KPIs, and milestones for measurable success.",
        },
      ]
    },
    ko: {
      badge: "비즈니스 프로세스",
      title: "체계적인 용역 수행 방법론",
      description: "포인트 브릿지만의 체계적인 프로세스를 통해 일관된 결과와 투명한 소통을 보장합니다.",
      steps: [
        {
          number: "01",
          icon: Database,
          title: "데이터 수집",
          description: "다양한 소스에서 데이터를 수집하고 통합하여 분석의 정확성을 위한 원천 데이터의 무결성을 확보합니다.",
        },
        {
          number: "02",
          icon: LineChart,
          title: "심층 분석",
          description: "전문가들이 고급 분석 알고리즘과 통계 모델링을 적용하여 데이터 속 숨겨진 패턴과 유의미한 통찰력을 도출합니다.",
        },
        {
          number: "03",
          icon: Route,
          title: "전략 로드맵",
          description: "도출된 통찰력을 바탕으로 명확한 실행 계획, KPI 및 마일스톤이 포함된 실질적인 비즈니스 확장 전략을 수립합니다.",
        },
      ]
    }
  };

  const t = translations[lang];

  return (
    <section id="methodology" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.badge}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line (Desktop) */}
              {index < t.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-0.5 bg-border">
                  <ArrowRight className="absolute -right-1 -top-2 w-4 h-4 text-muted-foreground" />
                </div>
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary border border-border mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-sm font-semibold text-muted-foreground mb-2">
                  {lang === "en" ? `Step ${step.number}` : `단계 ${step.number}`}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
