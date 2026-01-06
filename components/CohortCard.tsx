import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

export type CohortCardProps = {
  title: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
};

export default function CohortCard({
  title,
  description,
  price,
  features,
  isPopular = false,
}: CohortCardProps) {

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

  const PopularWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col items-center justify-center bg-primary rounded-3xl p-1.5 pt-3.5 h-full w-full md:w-87.5">
      <h3 className="pb-2.5 font-bold text-[#f5f5f5] text-sm uppercase tracking-wider">
        Populer
      </h3>
      <div className="relative flex justify-center items-center bg-white rounded-3xl h-full w-full">
        {children}
      </div>
    </div>
  );

  const CardContent = ({ isWrapped = false }: { isWrapped?: boolean }) => (
    <div
      className={`
        border-2 border-gray-100 rounded-3xl p-7.5 flex flex-col h-full flex-1 bg-white
        w-full hover:border-primary transition-colors group
        ${!isWrapped ? 'md:w-87.5' : ''} 
      `}
    >
      {/* Header Section */}
      <div className="grow">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">{title}</h2>
          <p className="text-secondary text-base leading-tight h-16 overflow-hidden line-clamp-2">
            {description}
          </p>
        </div>

        {/* Price Section */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-primary">
            {formattedPrice}
          </span>
        </div>

        {/* Button */}
        <Button variant={isPopular ? "primary" : "secondary"} className="w-full">
          Pilih paket
        </Button>

        {/* Divider */}
        <div className="h-px bg-gray-100 w-full my-7.5 group-hover:bg-primary transition-colors"></div>

        {/* Features List */}
        <div className="space-y-4 mb-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#1ca394] shrink-0 mt-0.5" />
              <p className="text-secondary text-base font-medium leading-tight">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (isPopular) {
    return (
      <PopularWrapper>
        <CardContent isWrapped={true} />
      </PopularWrapper>
    );
  }

  return <CardContent />;
}
