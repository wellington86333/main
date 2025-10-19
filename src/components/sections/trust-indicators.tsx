import { Shield, Clock, Users, Star } from 'lucide-react';
import type { Translations } from '@/lib/translations';

type TrustIndicatorsProps = {
  t: Translations['trustIndicators'];
};

export function TrustIndicators({ t }: TrustIndicatorsProps) {
  const indicators = [
    { icon: <Shield className="w-8 h-8 text-indigo-600 mx-auto mb-3" />, title: t.confidentiality.title, description: t.confidentiality.description },
    { icon: <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />, title: t.flexibleHours.title, description: t.flexibleHours.description },
    { icon: <Users className="w-8 h-8 text-pink-600 mx-auto mb-3" />, title: t.qualifiedProfessionals.title, description: t.qualifiedProfessionals.description },
    { icon: <Star className="w-8 h-8 text-amber-500 mx-auto mb-3" />, title: t.fiveStarReviews.title, description: t.fiveStarReviews.description },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {indicator.icon}
              <h3 className="font-semibold text-slate-800 mb-1">{indicator.title}</h3>
              <p className="text-sm text-slate-600">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
