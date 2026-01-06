"use client";

import Button from "./Button";

type OrderFormProps = {
  packages?: Array<{
    title?: string;
    description?: string;
  }>;
};

export default function OrderForm({ packages }: OrderFormProps) {
  const inputBaseStyles =
    "w-full bg-white secondary text-gray-700 placeholder-gray-400 border-none rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary focus:outline-none transition-all";
  const packageOptions = packages && packages.length > 0 ? packages : [];

  return (
    <form
      action="#"
      className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
    >
      <div className="col-span-1">
        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          className={inputBaseStyles}
        />
      </div>
      <div className="col-span-1">
        <input
          type="text"
          name="university"
          placeholder="Universitas"
          className={inputBaseStyles}
        />
      </div>

      <div className="col-span-1 space-y-2">
        <label className="text-gray-500 text-sm ml-1">Phone Number</label>
        <div className="flex gap-3">
          <div className="bg-white text-gray-500 px-4 py-3.5 rounded-lg flex items-center select-none">
            +62
          </div>
          <input
            type="tel"
            name="telepon"
            placeholder="8023456789"
            className={inputBaseStyles}
          />
        </div>
      </div>

      <div className="col-span-1 flex flex-col justify-end">
        <input
          type="email"
          name="email"
          placeholder="Email Anda"
          className={inputBaseStyles}
        />
      </div>

      <div className="col-span-1 md:col-span-2 space-y-2 mt-2">
        <label className="text-gray-500 text-sm ml-1 pb-20">Pilih Kelas Privat</label>
        <div className="relative">
          <select
            name="kelas"
            className={`${inputBaseStyles} appearance-none cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              Pilih Private class
            </option>
            {packageOptions.map((pkg, idx) => (
              <option key={idx} value={pkg.title || ""}>
                {pkg.title}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="col-span-1 mt-2">
        <input
          type="number"
          min={0}
          name="jumlah-pertemuan"
          placeholder="Jumlah Pertemuan"
          className={inputBaseStyles}
        />
      </div>
      <div className="col-span-1 mt-2">
        <input
          type="text"
          name="preferensi-jam"
          placeholder="Preferensi Jadwal (Hari & Jam)"
          className={inputBaseStyles}
        />
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-center mt-8">
        <Button
          className="w-full md:w-1/3 rounded-full! py-3 text-lg shadow-md hover:shadow-lg transition-all bg-[#1ca394] hover:bg-[#158f82]"
          variant="primary"
        >
          Kirim
        </Button>
      </div>
    </form>
  );
}
