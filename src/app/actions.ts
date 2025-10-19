'use server';

import { z } from 'zod';
import { translations } from '@/lib/translations';

// We can infer the language from headers in a real app, but for now, we'll use PT as default for server-side validation messages.
const t = translations.pt.contact.form;

const contactSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

export async function submitContactForm(
  prevState: {
    message: string;
    errors?: {
      name?: string[];
      email?: string[];
      message?: string[];
    };
  },
  formData: FormData
) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os erros no formulário.',
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real application, you would integrate with an email service like Resend or Nodemailer.
  // For this example, we'll just log the data to the console.
  console.log('--- New Contact Form Submission ---');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('-----------------------------------');

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    message: t.success,
  };
}
