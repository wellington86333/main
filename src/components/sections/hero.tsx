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
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight font-headline">
            {t.mainTitle.split(' ').slice(0, 4).join(' ')}
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
               {t.mainTitle.split(' ').slice(4).join(' ')}
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">{t.crp}</p>
        <p className="mt-6 max-w-3xl mx-auto text-xl leading-8 text-slate-700">
          {t.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <Link href="#test">
              {t.ctaButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 hover:border-indigo-300 transition-all duration-300 shadow-lg hover:shadow-xl">
             <a href="https://wa.me/5581996903004" target="_blank" rel="noopener noreferrer nofollow">
               <Phone className="mr-2 h-4 w-4" />
              {t.ctaButtonSecondary}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
