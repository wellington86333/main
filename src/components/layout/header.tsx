'use client';
import Link from 'next/link';
import { BrainCircuit, MessageCircle } from 'lucide-react';
import type { Translations } from '@/lib/translations';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useState } from 'react';

type HeaderProps = {
  lang: 'en' | 'pt';
  t: Translations['header'];
};

export function Header({ lang, t }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: t.nav_about },
    { href: '#services', label: t.nav_services },
    { href: '#test', label: t.nav_test },
    { href: '#faq', label: t.nav_faq },
    { href: '#contact', label: t.nav_contact },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <BrainCircuit className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold font-headline text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </Link>
          <nav className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
           <div className="hidden md:flex">
             <LanguageSwitcher lang={lang} />
           </div>
           <a 
              href="https://wa.me/5581996903004" 
              target="_blank" 
              rel="noopener noreferrer nofollow"
              className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-medium items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-semibold">WhatsApp</span>
            </a>
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Abrir menu</span>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-full h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-full h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-slate-200/50">
          <nav className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg font-medium text-left transition-colors text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
             <a 
                href="https://wa.me/5581996903004" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="mt-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium flex items-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <div className="pt-2">
                <LanguageSwitcher lang={lang} />
              </div>
          </nav>
        </div>
      )}
    </header>
  );
}
