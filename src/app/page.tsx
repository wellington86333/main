import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { SocialValuesSection } from '@/components/sections/social-values';
import { ContactSection } from '@/components/sections/contact-section';
import { translations } from '@/lib/translations';
import { TestSection } from '@/components/sections/test-section';

export default function Home({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const lang = searchParams?.lang === 'en' ? 'en' : 'pt';
  const t = translations[lang];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header lang={lang} t={t.header} />
      <main className="flex-1">
        <HeroSection t={t.hero} />
        <AboutSection t={t.about} />
        <ServicesSection t={t.services} />
        <TestSection t={t.test} />
        <SocialValuesSection t={t.socialValues} />
        <ContactSection t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
