import type { Translations } from '@/lib/translations';

type AboutProps = {
  t: Translations['about'];
};

export function AboutSection({ t }: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 font-headline sm:text-4xl">
          {t.title}
        </h2>
        <p className="text-lg leading-relaxed text-center text-muted-foreground">
          {t.text}
        </p>
      </div>
    </section>
  );
}
