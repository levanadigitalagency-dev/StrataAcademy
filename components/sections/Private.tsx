import PrivateClassCard from "../PrivateClassCard";

type PrivateSectionData = {
  title?: string;
  description?: string;
  packages?: Array<{
    title?: string;
    description?: string;
    features?: string[];
    price?: string;
    buttonText?: string;
  }>;
};

export default function Private({ data }: { data?: PrivateSectionData }) {
  const packages = data?.packages || [];

  return (
    <section id="private" className="p-4 md:p-17.5  bg-default scroll-mt-20 lg:scroll-mt-14">
      <div className="mb-10 text-center">
        <h2 className="text-primary text-2xl font-bold mb-3 md:text-3xl">
          {data?.title ?? "Kelas Private"}
        </h2>
        <p className="text-secondary max-w-prose mx-auto">
          {data?.description ??
            "Bimbingan intensif satu lawan satu untuk hasil yang maksimal."}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-10 mx-auto">
        {(packages.length ? packages : [1, 2, 3]).map(
          (item: any, idx: number) => (
            <PrivateClassCard
              key={idx}
              item={typeof item === "object" ? item : undefined}
            />
          )
        )}
      </div>
    </section>
  );
}
