import type { Translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

type HeroProps = {
  t: Translations['hero'];
};

export function HeroSection({ t }: HeroProps) {
  return (
    <section className="py-24 sm:py-32 text-center">
      <div className="container">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-headline text-gray-800">
          {t.mainTitle}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{t.crp}</p>
        <p className="mt-6 max-w-3xl mx-auto text-xl leading-8 text-gray-700">
          {t.subtitle}
        </p>
        <p className="text-md text-gray-500">{t.audience}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transform hover:scale-105 transition-all">
            <Link href="#test">
              {t.ctaButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white border-2">
             <a href="mailto:Wellington.brito@rocketmail.com">
               <Phone className="mr-2 h-4 w-4" />
              {t.ctaButtonSecondary}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
