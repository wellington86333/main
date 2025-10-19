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

type ServicesProps = {
  t: Translations['services'];
};

const serviceIcons = [
  <BrainCircuit key="1" className="h-8 w-8 text-accent" />,
  <User key="2" className="h-8 w-8 text-accent" />,
  <Laptop key="3" className="h-8 w-8 text-accent" />,
];

const imageIds = ['analysis', 'therapy', 'online'];

const GoogleMeetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.19 5.5 8 9.7V14h4.31l4.19-4.19a.9.9 0 0 0 0-1.27l-1.27-1.27a.9.9 0 0 0-1.27 0z" />
    <path d="M19 12h-2" />
    <path d="M19 12h2v-2" />
    <path d="m5 12-2 2" />
    <path d="M5 12H3" />
    <path d="M12 19v-2" />
    <path d="M12 19v2h-2" />
  </svg>
);

const SkypeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.4,19.2c-2.4-0.8-4.3-2.7-5.1-5.1C4.5,11.7,4.8,9,6.1,6.8s3.3-3.6,5.9-4.3s5.3,0,7.5,1.3s3.6,3.3,4.3,5.9s0,5.3-1.3,7.5 c-1.3,2.2-3.3,3.6-5.9,4.3C14.1,22.5,11.7,22.2,10.4,19.2z" />
    <path d="M9.1,10.1c-0.3,0-0.7,0.1-1.1,0.2c-0.8,0.3-1.5,0.7-2.1,1.3c-0.5,0.5-0.9,1-1.2,1.6c-0.3,0.7-0.4,1.4-0.2,2.2 c0.3,1.3,1,2.5,2.1,3.3c1.5,1.1,3.4,1.4,5.1,1c0.9-0.2,1.7-0.6,2.4-1.1c0.8-0.6,1.4-1.3,1.9-2.1c0.3-0.5,0.5-1,0.6-1.6" />
  </svg>
);

const TeamsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.5 19.5h-3a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h3"/>
      <path d="M16.5 4.5h3a2 2 0 0 1 2 2v2.5"/>
      <path d="M15.5 9.5a2 2 0 0 1-2-2h-3a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h3a2 2 0 0 1 2-2"/>
      <path d="M13 18.5a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5h1.5"/>
      <circle cx="8" cy="15" r="2"/>
      <path d="M17.5 18H16a1 1 0 0 0-1 1v2.5"/>
    </svg>
);

const platformIcons = [
  <GoogleMeetIcon key="meet" className="h-6 w-6 text-muted-foreground" />,
  <SkypeIcon key="skype" className="h-6 w-6 text-muted-foreground" />,
  <TeamsIcon key="teams" className="h-6 w-6 text-muted-foreground" />,
];

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
            const isOnlineService = index === 2; // The 3rd card
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
                   {isOnlineService && (
                    <div className="mt-4 flex items-center justify-center space-x-4">
                      {platformIcons}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
