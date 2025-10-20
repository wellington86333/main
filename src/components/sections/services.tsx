import type { Translations } from '@/lib/translations';
import { Heart, Users, Calendar } from 'lucide-react';

type ServicesProps = {
  t: Translations['services'];
};

const serviceIcons = [
  { icon: <Heart className="w-8 h-8 text-indigo-600" />, color: 'indigo' },
  { icon: <Users className="w-8 h-8 text-purple-600" />, color: 'purple' },
  { icon: <Calendar className="w-8 h-8 text-pink-600" />, color: 'pink' },
];

export function ServicesSection({ t }: ServicesProps) {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-headline">{t.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.cards.map((service, index) => {
            const iconInfo = serviceIcons[index];
            return (
              <div key={service.title} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/30 text-center flex flex-col group">
                <div className={`w-16 h-16 bg-${iconInfo.color}-100 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-${iconInfo.color}-200`}>
                  {iconInfo.icon}
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 font-headline">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
