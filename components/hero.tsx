import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  t: {
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

export function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-border"
              />
            </pattern>
            <radialGradient id="fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </radialGradient>
            <mask id="fadeMask">
              <rect width="100%" height="100%" fill="url(#fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Data Node Elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/20 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/15 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-primary/10 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-primary/15 rounded-full" />

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line
            x1="25%"
            y1="25%"
            x2="75%"
            y2="33%"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <line
            x1="33%"
            y1="66%"
            x2="66%"
            y2="50%"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-primary leading-tight text-balance">
          {t.title}
        </h1>

        <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          {t.description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:icis10001@gmail.com">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base"
            >
              {t.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            className="border-border text-primary hover:bg-secondary px-8 h-12 text-base"
          >
            {t.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
