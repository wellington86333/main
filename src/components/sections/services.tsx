import type { Translations } from '@/lib/translations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Calendar } from 'lucide-react';

type ServicesProps = {
  t: Translations['services'];
};

const serviceIcons = [
  <Heart key="1" className="h-8 w-8 text-indigo-600" />,
  <Users key="2" className="h-8 w-8 text-purple-600" />,
  <Calendar key="3" className="h-8 w-8 text-pink-600" />,
];

const bgColors = ["bg-indigo-100", "bg-purple-100", "bg-pink-100"];

export function ServicesSection({ t }: ServicesProps) {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {t.cards.map((service, index) => (
            <div key={service.title} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/30 text-center">
              <div className={`w-14 h-14 ${bgColors[index]} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                {serviceIcons[index]}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 font-headline">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
