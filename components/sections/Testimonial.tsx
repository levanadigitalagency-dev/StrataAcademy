"use client";

import Image from "next/image";
import TestimonialSlider from "../TestimonialSlider";
import testimonialImage from "@/public/images/home-testimonial-doctor-writing.png";

export default function Testimonial({
  data,
}: {
  data?: { title?: string; description?: string; items?: any[] };
}) {
  const items = data?.items;
  const title = data?.title;
  const description = data?.description;

  return (
    <section
      id="testimoni"
      className="relative p-4  md:p-17.5 md:min-h-125 flex flex-col items-center justify-center scroll-mt-28"
    >
      <Image
        src={testimonialImage}
        alt="Latar belakang testimoni"
        fill
        className="object-cover -z-10"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/80 -z-10"></div>

      <div className="z-10 max-w-4xl mx-auto text-center mb-10">
        <h2 className="font-bold text-3xl text-white mb-3">
          {title ?? "Testimoni"}
        </h2>
        <p className="text-white/90 text-base max-w-2xl mx-auto">
          {description ??
            "Pendapat mahasiswa FK setelah ikut kelas dan try out di StrataAcademy, dari yang awalnya bingung sampai lebih kebayang pola soalnya."}
        </p>
      </div>

      <div className="w-full h-full">
        <TestimonialSlider data={items} />
      </div>
    </section>
  );
}
