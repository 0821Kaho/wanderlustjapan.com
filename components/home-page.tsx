"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n-config';

import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1920',
  'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920',
  'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1920',
  'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1920',
  'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1920'
];

export default function HomePage({ lang }: { lang: Locale }) {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full absolute inset-0"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide} className="relative h-full w-full">
            <img
              src={slide}
              alt="Japan scenery"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        <div className="w-full max-w-[280px] xs:max-w-[340px] sm:max-w-xl lg:max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Wanderlust Japan
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white/90 drop-shadow-lg leading-snug">
            Go beyond the must-sees&mdash;discover Japan&apos;s hidden gems and lesser-known wonders!
          </p>
          
          <Link
            href={`/${lang}/regions`}
            className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full 
              bg-white/90 hover:bg-white 
              px-4 sm:px-5 py-2 sm:py-2.5
              text-sm sm:text-base font-semibold text-blue-900 
              shadow-lg hover:shadow-xl 
              transition-all"
          >
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
            <span>Choose Your Region</span>
          </Link>
        </div>
      </div>
    </main>
  );
}