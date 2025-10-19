'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

type LanguageSwitcherProps = {
  lang: 'en' | 'pt';
};

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleValueChange = (newLang: string) => {
    router.push(`${pathname}?lang=${newLang}`);
  };

  return (
    <Select value={lang} onValueChange={handleValueChange}>
      <SelectTrigger className="w-auto gap-2 border-none shadow-none focus:ring-0">
        <Globe className="h-4 w-4" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt">Português</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
}
