import Image from 'next/image';
import type { Translations } from '@/lib/translations';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BrainCircuit, User, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';

type ServicesProps = {
  t: Translations['services'];
};

const serviceIcons = [
  <BrainCircuit key="1" className="h-8 w-8 text-accent" />,
  <User key="2" className="h-8 w-8 text-accent" />,
  <Laptop key="3" className="h-8 w-8 text-accent" />,
];

const imageIds = ['analysis', 'therapy', 'online'];

export function ServicesSection({ t }: ServicesProps) {
  return (
    <section id="services" className="bg-secondary py-16 sm:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline sm:text-4xl">
          {t.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.cards.map((service, index) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === imageIds[index]
            );
            return (
              <Card
                key={service.title}
                className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
              >
                {image && (
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {serviceIcons[index]}
                    <CardTitle className="font-headline text-2xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
