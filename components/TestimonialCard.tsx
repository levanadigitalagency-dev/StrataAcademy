'use client'

import { Quote } from "lucide-react";

export default function TestimonialCard({ item }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl h-full shadow-sm select-none">
      <div>
        <div className="space-y-2 mb-6">
          <Quote className="text-primary fill-primary w-8 h-8 " />
          <p className="text-gray-600 text-left leading-relaxed mt-4 min-h-20">
            &quot;{item.content}&quot;
          </p>
        </div>
      </div>

      <div>
        <div className="h-px bg-gray-100 w-full mb-5"></div>
        <div className="text-left">
          <div>
            <h4 className="font-bold text-primary text-lg">
              {item.name}
            </h4>
            <span className="text-sm text-secondary font-medium">
              {item.role}
            </span>
          </div>
        </div>
      </div>
    </div>)
}
