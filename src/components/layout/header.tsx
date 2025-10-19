import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';
import type { Translations } from '@/lib/translations';
import { LanguageSwitcher } from '@/components/language-switcher';

type HeaderProps = {
  lang: 'en' | 'pt';
  t: Translations['header'];
};

export function Header({ lang, t }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <BrainCircuit className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold font-headline text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.title}
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link
              href="#about"
              className="text-gray-600 transition-colors hover:text-primary"
            >
              {t.nav_about}
            </Link>
            <Link
              href="#services"
              className="text-gray-600 transition-colors hover:text-primary"
            >
              {t.nav_services}
            </Link>
             <Link
              href="#test"
              className="text-gray-600 transition-colors hover:text-primary"
            >
              {t.nav_test}
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 transition-colors hover:text-primary"
            >
              {t.nav_contact}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <LanguageSwitcher lang={lang} />
        </div>
      </div>
    </header>
  );
}
