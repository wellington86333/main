import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const seoData = {
  title: "PsiWell | Psicologia Online com Teste Gratuito de Saúde Mental",
  description: "PsiWell oferece psicoterapia online com profissionais qualificados. Faça nosso teste gratuito para avaliar sua necessidade de terapia e cuide da sua saúde mental com confidencialidade e apoio profissional.",
  keywords: "psicologia online, terapia online, psicólogo online, saúde mental, teste de depressão, ansiedade, bem-estar emocional, psicoterapia, apoio psicológico, clínica de psicologia",
  url: "https://psiwell.com.br", // Replace with your actual domain
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "PsiWell - Psicologia Online",
  "description": "Clínica de psicologia online oferecendo terapia com profissionais qualificados e teste gratuito de saúde mental.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  },
  "telephone": "+5581996903004", // Replace with actual phone
  "url": seoData.url,
  "sameAs": ["https://wa.me/5581996903004"], // Replace with actual whatsapp number
  "medicalSpecialty": "Psychology",
  "offers": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Psicoterapia Online"
    }
  }
};


export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  authors: [{ name: 'PsiWell' }],
  robots: 'index, follow',
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    type: 'website',
    url: seoData.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.title,
    description: seoData.description,
  },
  alternates: {
    canonical: seoData.url,
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
