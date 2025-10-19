import { Translations } from "@/lib/translations";

type FooterProps = {
  t: Translations['footer'];
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 text-center">
        <h3 className="text-2xl font-semibold mb-4 font-headline">{t.title}</h3>
        <div className="space-y-2">
          <p>
            {t.email}:{' '}
            <a
              href="mailto:Wellington.brito@rocketmail.com"
              className="underline hover:text-primary-foreground/80 transition-colors"
            >
              Wellington.brito@rocketmail.com
            </a>
          </p>
          <p>
            {t.phone}:{' '}
            <a href="tel:+5581996903004" className="underline hover:text-primary-foreground/80 transition-colors">
              (81) 99690-3004
            </a>
          </p>
        </div>
        <p className="mt-8 text-sm text-primary-foreground/70">{t.copyright}</p>
      </div>
    </footer>
  );
}
