import type { Translations } from '@/lib/translations';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ServicesProps = {
  t: Translations['services'];
};

const serviceImages = PlaceHolderImages.filter(img => 
  img.id === 'therapy' || img.id === 'freud' || img.id === 'divan'
);

export function ServicesSection({ t }: ServicesProps) {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {t.cards.map((service, index) => {
            const image = serviceImages[index];
            return (
              <div key={service.title} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/30 text-center flex flex-col">
                {image && (
                  <div className="relative w-full h-48 mb-6 mx-auto rounded-xl overflow-hidden">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
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
