"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";
import { useState } from "react";

type Testimonial = {
  id?: number;
  content: string;
  name: string;
  role?: string;
};

export default function TestimonialSlider({ data }: { data?: Testimonial[] }) {

  const [slides] = useState<Testimonial[]>(
    data && data.length ? data : []
  );

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="
      w-full!
      /* CUSTOM PAGINATION STYLES */
      [&_.swiper-pagination-bullet]:w-3.5! 
      [&_.swiper-pagination-bullet]:h-3.5!
      [&_.swiper-pagination-bullet]:bg-white! 
      [&_.swiper-pagination-bullet]:opacity-100!
      
      /* Active State (Pill Shape) */
      [&_.swiper-pagination-bullet-active]:w-8 
      [&_.swiper-pagination-bullet-active]:rounded-full 
      [&_.swiper-pagination-bullet-active]:bg-dark-primary!
      "
    >
      <Swiper
        key={
          slides.length
        }
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={slides.length > 1}
        // --- BREAKPOINTS ---
        breakpoints={{
          640: {
            slidesPerView: 2, // Tablet: 2 slide
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5, // Desktop: 3 slide
            spaceBetween: 30,
          },
        }}
        style={
          {
            "--swiper-pagination-bottom": "0px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as React.CSSProperties
        }
        className="pb-16!"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={item.id ?? i} className="h-auto lg:min-w-125">
            <TestimonialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
