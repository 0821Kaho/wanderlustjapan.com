'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';
import LanguageSwitcher from './language-switcher';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header
      className="
        fixed
        top-0 left-0 right-0
        z-50
        bg-[#001B44]
        h-16
      "
    >
      <div className="max-w-7xl mx-auto h-full px-4 flex justify-end items-center">
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Help Button with semi-transparent background & border */}
          <button
            className="
              flex items-center gap-2
              rounded-full
              bg-white/10
              hover:bg-white/20
              backdrop-blur-md
              border border-white/20
              px-3 sm:px-4 py-2 sm:py-2.5
              text-sm sm:text-base font-medium text-white
              shadow-lg hover:shadow-xl
              transition-all duration-200
              focus:outline-none
            "
          >
            <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">
              Help? (10% fee)
            </span>
          </button>
        </div>
      </div>

      {/* Display the title at the bottom-left corner of the header */}
      <div className="absolute bottom-0 left-4 mb-2 text-white">
        {title}
      </div>
    </header>
  );
}
