import { Database, LineChart, Route, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Data Collection",
    description:
      "We gather and consolidate data from multiple sources, ensuring comprehensive coverage and data integrity for accurate analysis.",
  },
  {
    number: "02",
    icon: LineChart,
    title: "Analysis",
    description:
      "Our experts apply advanced analytics, statistical modeling, and machine learning to uncover patterns and derive meaningful insights.",
  },
  {
    number: "03",
    icon: Route,
    title: "Strategic Roadmap",
    description:
      "We translate insights into actionable strategies with clear implementation plans, KPIs, and milestones for measurable success.",
  },
];

export function Methodology() {
  return (
    <section id="methodology" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Approach
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            A Proven Methodology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach ensures consistent results and transparent
            communication throughout your engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-0.5 bg-border">
                  <ArrowRight className="absolute -right-1 -top-2 w-4 h-4 text-muted-foreground" />
                </div>
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary border border-border mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-sm font-semibold text-muted-foreground mb-2">
                  Step {step.number}
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
