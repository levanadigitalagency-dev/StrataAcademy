import { BookOpenText, CheckCircle2 } from "lucide-react";

type PrivatePackage = {
  title?: string;
  description?: string;
  features?: string[];
  price?: string;
  buttonText?: string;
};

export default function PrivateClassCard({ item }: { item?: PrivatePackage }) {
  const features = item?.features || [
    "Pembahasan konsep klinis inti",
    "Latihan soal terarah",
  ];

  return (
    <div className="w-full mx-auto max-w-125 border border-gray-200 rounded-3xl p-7.5  flex flex-col group hover:border-primary transition-colors">
      <div>
        <BookOpenText className="h-7.5 w-7.5 text-primary" />
        <h2 className="text-xl font-bold text-primary my-2">
          {item?.title ?? "Paket Private"}
        </h2>

        <p className="text-secondary text-base leading-relaxed max-w-prose">
          {item?.description ??
            "Bimbingan intensif satu lawan satu untuk hasil maksimal."}
        </p>
      </div>

      <div className="h-px bg-gray-200 w-full my-7.5 group-hover:bg-primary transition-colors"></div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-x-2">
            <CheckCircle2 className=" fill-primary text-white w-5 h-5 shrink-0" />
            <p className="text-secondary text-base font-medium leading-relaxed">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
