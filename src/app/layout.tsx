import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Wellington Brito Psicólogo',
  image: PlaceHolderImages.find(img => img.id === 'analysis')?.imageUrl || '',
  description:
    'Psicólogo clínico especializado em Psicanálise. Atendimento online para brasileiros no Brasil e no exterior, com valores sociais e negociação acessível.',
  telephone: '+5581996903004',
  email: 'Wellington.brito@rocketmail.com',
  areaServed: ['Brasil', 'Brasileiros no exterior'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Recife',
    addressRegion: 'PE',
    addressCountry: 'BR',
  },
  url: 'https://wellingtonbritopsi.com',
};

export const metadata: Metadata = {
  title: 'PsiWell - Wellington Brito | Psicólogo Clínico',
  description: jsonLd.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
