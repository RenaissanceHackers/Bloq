import Image from "next/image";

import { cn } from "~/lib/utils";

export function CarouselCard() {
  return (
    <div
      className={cn(
        "relative flex h-64 items-start justify-start overflow-hidden rounded-xl transition-all duration-300",
      )}
    >
      <Image
        alt="test"
        src="/test.jpg"
        fill
        className="min-h-[304px] w-auto shadow-sm"
      />
      <div className="absolute inset-x-0 bottom-0 flex h-[2/5] items-center gap-12 rounded-md bg-white/5 px-6 py-4 backdrop-blur-md">
        <div className="flex-1 space-y-1">
          <div className="font-bold text-gray-200">
            Top Solana News of the Week - January 22, 2023
          </div>
          <div className="text-sm text-gray-300">SOLANAFLOOR</div>
        </div>
        <div className="relative hidden h-14 w-14 sm:block">
          <Image alt="test" src="/test.jpg" fill className="rounded-md" />
        </div>
      </div>
    </div>
  );
}
