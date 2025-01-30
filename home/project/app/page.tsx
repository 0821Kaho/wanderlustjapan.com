"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-fade';

const backgroundImages = [
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1920', // Tokyo Tower
  'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920', // Himeji Castle
  'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1920', // Fushimi Inari
  'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1920', // Mt. Fuji
  'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1920'  // Shibuya Crossing
];

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Background Slider */}
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
        {backgroundImages.map((image, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <img
              src={image}
              alt="Japan scenery"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        <div className="w-full max-w-[280px] xs:max-w-[340px] sm:max-w-xl lg:max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Wanderlust Japan
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white/90 drop-shadow-lg leading-snug">
            Go beyond the must-sees—discover Japan's hidden gems and lesser-known wonders!
          </p>
          
          <Link
            href="/regions"
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