import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { ContactSection } from '@/components/sections/contact-section';
import { translations } from '@/lib/translations';
import { TestSection } from '@/components/sections/test-section';
import { TrustIndicators } from '@/components/sections/trust-indicators';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function Home({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'pt';
  const t = translations[lang];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header lang={lang} t={t.header} />
      <main className="flex-1">
        <HeroSection t={t.hero} />
        <TrustIndicators t={t.trustIndicators} />
        <ServicesSection t={t.services} />
        <AboutSection t={t.about} />
        <TestSection t={t.test} />
        <FaqSection t={t.faq} />
        <CtaSection t={t.cta} />
        <ContactSection t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
