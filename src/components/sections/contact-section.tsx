import type { Translations } from '@/lib/translations';
import { ContactForm } from '@/components/contact-form';

type ContactSectionProps = {
  t: Translations['contact'];
};

export function ContactSection({ t }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-secondary py-16 sm:py-24">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 font-headline sm:text-4xl">
          {t.title}
        </h2>
        <ContactForm t={t.form} />
      </div>
    </section>
  );
}
