"use client";

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { localeNames, type Locale } from '@/lib/i18n-config';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = (pathname.split('/')[1] || 'en') as Locale;

  const switchLanguage = (locale: Locale) => {
    const newPathname = pathname.replace(/^\/[a-z]{2}/, '');
    router.push(`/${locale}${newPathname}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-2 rounded-full 
          bg-white/10 hover:bg-white/20
          backdrop-blur-md
          border border-white/20
          px-3 sm:px-4 py-2 sm:py-2.5 
          text-sm sm:text-base font-medium text-white 
          shadow-lg hover:shadow-xl 
          transition-all duration-200"
      >
        <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 top-full mt-2 w-32 rounded-lg 
              bg-white/10 backdrop-blur-md border border-white/20 
              overflow-hidden shadow-xl"
          >
            {Object.entries(localeNames).map(([locale, name]) => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale as Locale)}
                className={`w-full px-4 py-2 text-sm text-left transition-colors
                  ${currentLocale === locale ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
              >
                {name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}