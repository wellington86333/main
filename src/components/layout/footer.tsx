import { Brain, MessageCircle } from "lucide-react";
import { Translations } from "@/lib/translations";
import Link from "next/link";

type FooterProps = {
  t: Translations['footer'];
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">PsiWell</h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              {t.subtitle}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5581996903004" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.services.title}</h4>
            <ul className="space-y-3 text-slate-400">
              {t.services.items.map((item, index) => (
                <li key={index}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.resources.title}</h4>
            <ul className="space-y-3 text-slate-400">
                {t.resources.items.map((item, index) => (
                    <li key={index}><a href={item.href} className="hover:text-white transition-colors">{item.label}</a></li>
                ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>{t.copyright.replace('[CRP]', '02/15189')}</p>
          <p className="mt-2 text-sm">{t.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
