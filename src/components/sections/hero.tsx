import type { Translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type HeroProps = {
  t: Translations['hero'];
};

export function HeroSection({ t }: HeroProps) {
  return (
    <section className="bg-primary text-primary-foreground py-24 sm:py-32">
      <div className="container text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-headline">
          {t.mainTitle}
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/80">{t.crp}</p>
        <p className="mt-6 text-xl leading-8 text-primary-foreground/90">
          {t.subtitle}
        </p>
        <p className="text-md text-primary-foreground/70">{t.audience}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <a href="mailto:Wellington.brito@rocketmail.com">
              {t.ctaButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
