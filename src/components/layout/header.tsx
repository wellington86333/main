import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Translations } from '@/lib/translations';
import { LanguageSwitcher } from '@/components/language-switcher';

type HeaderProps = {
  lang: 'en' | 'pt';
  t: Translations['header'];
};

export function Header({ lang, t }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">{t.title}</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {t.nav_about}
            </Link>
            <Link
              href="#services"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {t.nav_services}
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
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
