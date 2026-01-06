import CohortSlider from "../CohortSlider"
import { CohortCardProps } from "@/components/CohortCard";

type CohortSectionData = {
  title?: string;
  description?: string;
  packages?: Array<{
    title: string;
    description?: string;
    price: number;
    features?: string[];
    isPopular?: boolean;
    buttonText?: string;
  }>;
};

export default function CohortClass({ data }: { data?: CohortSectionData }) {

  const items: CohortCardProps[] = (data?.packages || []).map((p) => ({
    title: p.title,
    description: p.description || "",
    price: Number(p.price || 0),
    features: p.features || [],
    isPopular: !!p.isPopular,
    buttonText: p.buttonText,
  }));

  return (
    <section
      id="cohort"
      className="p-3.5 md:p-17.5 bg-default scroll-mt-20 lg:scroll-mt-8"
    >
      <div className="mb-10 text-center">
        <h2 className="text-primary text-3xl font-bold mb-3 md:text-4xl leading-tight">
          {data?.title ?? "Kelas Cohort"}
        </h2>
        <p className="text-secondary text-base mx-auto leading-relaxed max-w-prose">
          {data?.description ?? "Pelatihan dan bimbingan berbasis evidence untuk mahasiswa kedokteran di berbagai tahap pendidikan. Pilih paket yang sesuai kebutuhanmu."}
        </p>
      </div>

      <div className=" w-full mx-auto">
        <CohortSlider data={items} />
      </div>
    </section>
  )

}
