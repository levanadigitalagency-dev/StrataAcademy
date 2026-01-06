import Image from "next/image";
import aboutImage from "@/public/images/home-about-doctor-holding-pen.png"

interface AboutProps {
  data: {
    paragraf_1: string;
    paragraf_2: string;
  };
}

export default function About({ data }: AboutProps) {
  return (
    <section
      id="about"
      className="m-4 py-7.5 bg-default rounded-3xl md:mx-16 lg:m-17.5 lg:p-7.5 md:grid md:grid-cols-[400px_1fr] md:gap-12 items-center scroll-mt-20 lg:scroll-mt-48"
    >
      <div className="flex items-center justify-center mb-8 md:mb-0">
        <Image
          src={aboutImage}
          width={600}
          height={600}
          alt="Tentang StrataAcademy"
          className="px-4 w-auto max-w-75 md:max-w-full h-auto md:p-0"
        />
      </div>

      <div className="space-y-6 px-4 md:px-0">
        <div className="p-6 border border-white rounded-2xl shadow-sm bg-white/50 backdrop-blur-sm">
          <h2 className="mb-3 text-xl font-bold text-primary md:text-4xl">Sekilas Tentang Kami</h2>
          <p className="text-secondary leading-relaxed">
            {data.paragraf_1}
          </p>
        </div>

        <div className="p-6 border border-white rounded-2xl shadow-sm bg-white/50 backdrop-blur-sm">
          <p className="text-secondary leading-relaxed">
            {data.paragraf_2}
          </p>
        </div>
      </div>
    </section>
  )
}
