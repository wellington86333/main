import { BrainCircuit, MessageCircle } from "lucide-react";
import { Translations } from "@/lib/translations";

type FooterProps = {
  t: Translations['footer'];
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <BrainCircuit className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-xl font-bold">PsiWell</h3>
        </div>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
          {t.subtitle}
        </p>
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:Wellington.brito@rocketmail.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.email}</span>
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500">{t.copyright}</p>
      </div>
    </footer>
  );
}
