import Image from 'next/image';
import type { Translations } from '@/lib/translations';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type AboutProps = {
  t: Translations['about'];
};

export function AboutSection({ t }: AboutProps) {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile');

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {profileImage && (
            <div className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0 relative">
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={240}
                height={240}
                className="rounded-full object-cover w-full h-full shadow-lg"
                data-ai-hint={profileImage.imageHint}
              />
            </div>
          )}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 font-headline sm:text-4xl">
              {t.title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
