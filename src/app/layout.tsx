
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const seoData = {
  title: "PsiWell | Wellington Brito - Psicologia Online para Brasileiros",
  description: "Wellington Brito oferece psicoterapia online em português para brasileiros no exterior. Cuide da sua saúde mental com um profissional qualificado.",
  keywords: "psicólogo para brasileiros no exterior, terapia online em português, saúde mental para expatriados, psicólogo brasileiro na Europa, Wellington Brito, psicologia online",
  url: "https://psiwell.com.br", // Replace with your actual domain
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Wellington Brito",
  "jobTitle": "Psicólogo Clínico",
  "description": "Psicólogo clínico brasileiro oferecendo terapia online em português para brasileiros vivendo no exterior.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  },
  "telephone": "+447512130453",
  "url": seoData.url,
  "sameAs": ["https://wa.me/447512130453"],
  "knowsAbout": "Psicanálise, Terapia Online, Saúde Mental, Ansiedade, Depressão, Expatriação",
  "serviceArea": [
    "BR", "PT", "GB", "ES", "FR", "DE", "IT", "US"
  ]
};


export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  authors: [{ name: 'Wellington Brito' }],
  robots: 'index, follow',
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    type: 'website',
    url: seoData.url,
    locale: 'pt_BR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.title,
    description: seoData.description,
  },
  alternates: {
    canonical: seoData.url,
    languages: {
      'pt-BR': `${seoData.url}?lang=pt`,
      'en': `${seoData.url}?lang=en`,
      'pt-PT': `${seoData.url}?lang=pt`,
      'es-ES': `${seoData.url}?lang=en`,
      'fr-FR': `${seoData.url}?lang=en`,
      'de-DE': `${seoData.url}?lang=en`,
      'it-IT': `${seoData.url}?lang=en`,
      'en-GB': `${seoData.url}?lang=en`,
      'x-default': `${seoData.url}?lang=pt`,
    },
  }
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
