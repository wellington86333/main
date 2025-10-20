import type { Translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type CtaSectionProps = {
  t: Translations['cta'];
};

export function CtaSection({ t }: CtaSectionProps) {
  return (
    <section className="py-16 sm:py-24">
        <div className="container max-w-4xl mx-auto">
             <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4 font-headline">{t.title}</h3>
              <p className="text-indigo-100 mb-8 text-lg">
                {t.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-indigo-600 h-auto px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors shadow-lg">
                  <Link href="#test">
                    {t.ctaButton}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white h-auto px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors bg-transparent">
                  <a href="https://wa.me/447512130453" target="_blank" rel="noopener noreferrer nofollow">
                    {t.ctaButtonSecondary}
                  </a>
                </Button>
              </div>
            </div>
        </div>
    </section>
  );
}
