import Image from 'next/image';
import type { Translations } from '@/lib/translations';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

type AboutProps = {
  t: Translations['about'];
};

export function AboutSection({ t }: AboutProps) {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile');

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container">
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-headline">{t.title}</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                {t.subtitle}
              </p>
            </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
                 {profileImage && (
                    <div className="relative aspect-square w-full max-w-md mx-auto">
                        <Image
                            src={profileImage.imageUrl}
                            alt={profileImage.description}
                            fill
                            className="rounded-3xl object-cover shadow-2xl transition-all duration-500 group-hover:scale-105"
                            data-ai-hint={profileImage.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/30 to-transparent rounded-3xl"></div>
                    </div>
                )}
            </div>
            <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-800">{t.missionTitle}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t.missionText1}
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {t.missionText2}
                </p>
                <div className="flex items-start space-x-4 pt-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{t.crpTitle}</h4>
                    <p className="text-slate-600 text-sm">{t.crpText}</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
