'use client'

import type { Translations } from '@/lib/translations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


type FaqSectionProps = {
  t: Translations['faq'];
};

export function FaqSection({ t }: FaqSectionProps) {
  return (
    <section id="faq" className="py-16 sm:py-24">
        <div className="container max-w-4xl mx-auto">
             <h3 className="text-3xl font-bold text-slate-800 text-center mb-12 font-headline">{t.title}</h3>
              <Accordion type="single" collapsible className="w-full space-y-6">
                {t.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50">
                        <AccordionTrigger className="font-semibold text-slate-800 text-left text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="pt-4 text-slate-600 text-base">
                         {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
        </div>
    </section>
  );
}
