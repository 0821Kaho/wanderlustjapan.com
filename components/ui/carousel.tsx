"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { cn } from "@/lib/utils";

import 'swiper/css';
import 'swiper/css/navigation';

const CarouselContext = React.createContext<{
  api: SwiperType | null;
  current: number;
  total: number;
}>({
  api: null,
  current: 0,
  total: 0,
});

function Carousel({
  children,
  opts = {},
  plugins = [],
  className,
  ...props
}: {
  children: React.ReactNode;
  opts?: any;
  plugins?: any[];
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  const [api, setApi] = React.useState<SwiperType | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (api) {
      setTotal(api.slides.length);
      api.on('slideChange', () => {
        setCurrent(api.realIndex);
      });
    }
  }, [api]);

  return (
    <CarouselContext.Provider value={{ api, current, total }}>
      <div className={cn("relative", className)} {...props}>
        <Swiper
          onSwiper={setApi}
          modules={[Navigation, Autoplay, ...plugins]}
          {...opts}
        >
          {React.Children.map(children, (child) => (
            <SwiperSlide>{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselPrevious({ className, ...props }: { className?: string }) {
  const { api } = React.useContext(CarouselContext);

  return (
    <button
      className={cn(
        "absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 text-slate-800 shadow-md hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={() => api?.slidePrev()}
      disabled={!api}
      {...props}
    >
      <ChevronLeft className="h-5 w-5" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
}

function CarouselNext({ className, ...props }: { className?: string }) {
  const { api } = React.useContext(CarouselContext);

  return (
    <button
      className={cn(
        "absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 text-slate-800 shadow-md hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={() => api?.slideNext()}
      disabled={!api}
      {...props}
    >
      <ChevronRight className="h-5 w-5" />
      <span className="sr-only">Next slide</span>
    </button>
  );
}

function CarouselContent({ className, ...props }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden", className)} {...props} />
  );
}

function CarouselItem({ className, ...props }: { className?: string }) {
  return (
    <div className={cn("flex-shrink-0", className)} {...props} />
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};