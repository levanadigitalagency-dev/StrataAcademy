import Image from "next/image";
import AccordionGroup from "../AccordionGroup";
import faqImage from "@/public/images/home-faq-doctor-writing-on-her-note.png";


export default function Faq({
  data,
}: {
  data?: { title?: string; faqs?: { question: string; answer: string }[] };
}) {
  const title = data?.title;
  const faqs = data?.faqs;

  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faq" className="p-4 md:p-17.5 px-4 mx-auto scroll-mt-14">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-x-12 items-start">
        <div className="mb-5 md:m-0 md:block md:sticky md:top-24">
          <Image
            src={faqImage}
            alt="Ilustrasi FAQ"
            width={800}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl text-primary font-bold mb-4 flex flex-col md:flex-row md:items-center gap-2">
            {title ?? "Pertanyaan Umum"} <span>(FAQ)</span>
          </h2>
          <p className="text-secondary mb-8 leading-relaxed">
            Punya pertanyaan soal kelas, metode belajar, atau mekanisme
            bimbingan? Berikut adalah jawaban dari pertanyaan yang sering
            diajukan.
          </p>

          <AccordionGroup
            data={faqs.map((f, i) => ({
              id: i + 1,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
