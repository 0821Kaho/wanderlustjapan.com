'use client';

import React from 'react';
import { HelpCircle, X } from 'lucide-react';

export default function HelpButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMessaging = (platform: 'whatsapp' | 'messenger' | 'line') => {
    const urls = {
      whatsapp: 'https://wa.me/818012783812',
      messenger: 'https://m.me/wanderlustjapan.official',
      line: 'https://line.me/R/ti/p/@wanderlustjapan'
    };
    window.open(urls[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-3 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white shadow-lg hover:shadow-xl transition-all duration-200"
      >
        {isOpen ? (
          <>
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Close</span>
          </>
        ) : (
          <>
            <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Support</span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 sm:w-48 flex flex-col gap-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-3 shadow-lg">
          <button
            onClick={() => handleMessaging('whatsapp')}
            className="flex w-full items-center gap-2 rounded-full bg-green-600/90 hover:bg-green-600 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white transition-all duration-200"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="WhatsApp" 
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            WhatsApp
          </button>
          <button
            onClick={() => handleMessaging('messenger')}
            className="flex w-full items-center gap-2 rounded-full bg-blue-500/90 hover:bg-blue-500 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white transition-all duration-200"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" 
              alt="Messenger" 
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            Messenger
          </button>
          <button
            onClick={() => handleMessaging('line')}
            className="flex w-full items-center gap-2 rounded-full bg-[#00B900]/90 hover:bg-[#00B900] px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white transition-all duration-200"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" 
              alt="LINE" 
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            LINE
          </button>
        </div>
      )}
    </div>
  );
}