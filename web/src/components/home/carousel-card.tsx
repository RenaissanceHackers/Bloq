import Image from "next/image";

import { cn } from "~/lib/utils";

import base2 from "public/images/base-2.png";
import base3 from "public/images/base-3.png";
import base4 from "public/images/base-4.png";
import base5 from "public/images/base-5.png";

import base from "public/test.jpg";

interface CarouselCardProps {
  index: number;
}

const ImageList = [base2, base3, base4, base5];

export function CarouselCard({ index }: CarouselCardProps) {
  const img = ImageList[index % 4]!;
  return (
    <div
      className={cn(
        "relative flex h-64 items-start justify-start overflow-hidden rounded-xl transition-all duration-300",
      )}
    >
      <Image
        alt="test"
        src={img}
        fill
        className="min-h-[304px] w-auto shadow-sm"
      />
      <div className="absolute inset-x-0 bottom-0 flex h-[2/5] items-center gap-12 rounded-md bg-white/5 px-6 py-4 backdrop-blur-md">
        <div className="flex-1 space-y-1">
          <div className="font-bold text-gray-200">
            Top Solana News of the Week - Mar 31, 2024
          </div>
          <div className="text-sm text-gray-300">SOLANAFLOOR</div>
        </div>
        <div className="relative hidden h-14 w-16 sm:block">
          <Image alt="test" src={base} fill className="rounded-md" />
        </div>
      </div>
    </div>
  );
}
