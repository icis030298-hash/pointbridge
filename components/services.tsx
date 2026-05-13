import { BarChart3, Compass, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesProps {
  t: {
    badge: string;
    title: string;
    description: string;
    item1: {
      title: string;
      description: string;
      features: string[];
    };
    item2: {
      title: string;
      description: string;
      features: string[];
    };
  };
}

export function Services({ t }: ServicesProps) {
  const services = [
    {
      icon: BarChart3,
      title: t.item1.title,
      description: t.item1.description,
      features: t.item1.features,
    },
    {
      icon: Compass,
      title: t.item2.title,
      description: t.item2.description,
      features: t.item2.features,
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t.badge}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance break-keep">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto break-keep">
            {t.description}
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
                <p className="text-muted-foreground mt-2 break-keep">{service.description}</p>
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
