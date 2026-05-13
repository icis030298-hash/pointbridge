import { BarChart3, Compass, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: BarChart3,
    title: "Advanced Data Analytics",
    description:
      "Transform raw data into actionable intelligence with our cutting-edge analytics solutions.",
    features: [
      "Predictive modeling & machine learning",
      "Real-time dashboard development",
      "Custom KPI tracking systems",
      "Data visualization & reporting",
    ],
  },
  {
    icon: Compass,
    title: "Strategic Consulting",
    description:
      "Navigate complex business challenges with expert guidance and proven methodologies.",
    features: [
      "Market analysis & competitive intelligence",
      "Growth strategy development",
      "Operational efficiency optimization",
      "Digital transformation roadmaps",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            Comprehensive Solutions for
            <br className="hidden md:block" />
            Modern Enterprises
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer end-to-end services that bridge the gap between data complexity
            and strategic clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-semibold text-primary">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground mt-2">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary/70 mt-0.5 shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
