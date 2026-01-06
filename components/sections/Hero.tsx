import heroImage from "@/public/images/home-hero-doctor-pointing-her-hand.png"
import Image from "next/image";
import CustomLink from "../CustomLink";

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
  };
}
export default function Hero({ data }: HeroProps) {

  // const data = await getLandingPageData();

  return (
    <section
      id="home"
      className="m-4 md:min-h-screen md:grid md:grid-cols-[1fr_800px] md:items-center md:px-16 lg:px-17.5 lg:m-0 scroll-mt-28"
    >
      <div className="order-2 md:order-2 flex justify-center md:justify-end">
        <Image
          src={heroImage}
          width={600}
          height={600}
          alt="Ilustrasi dokter profesional StrataAcademy"
          priority
          className="object-contain w-full max-w-125 md:max-w-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="mt-8 md:mt-0 order-1 md:order-1">
        <h1 className="text-primary font-bold text-2xl mb-4 md:text-5xl leading-tight">
          {data.title}
        </h1>
        <p className="text-base text-secondary leading-relaxed max-w-prose mb-8">
          {data.subtitle}
        </p>
        <div className="flex gap-x-3 items-center justify-center md:justify-start">
          <CustomLink href="#cohort" variant="primary" size="md">Cohort Class</CustomLink>
          <CustomLink href="#private" variant="secondary" size="md">Private Class</CustomLink>
        </div>
      </div>

    </section>

  )

}
