"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface ResponsiveVideoSwiperProps {
  horizontalVideos: string[];
  verticalVideos: string[];
  onSlideChange?: (index: number) => void;
}

export function ResponsiveVideoSwiper({ 
  horizontalVideos, 
  verticalVideos,
  onSlideChange 
}: ResponsiveVideoSwiperProps) {
  const [mounted, setMounted] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  if (!mounted) return null;

  const videos = isPortrait ? verticalVideos : horizontalVideos;

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      className="absolute inset-0 h-full w-full"
      onSlideChange={(swiper: SwiperType) => {
        onSlideChange?.(swiper.realIndex);
      }}
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index} className="relative h-full w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}