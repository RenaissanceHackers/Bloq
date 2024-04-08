"use client";

import React from "react";

import Autoplay from "embla-carousel-autoplay";

import { CarouselItem } from "~/components/ui/carousel";

import { Carousel, CarouselContent } from "~/components/ui/carousel";
import { CarouselNext, CarouselPrevious } from "~/components/ui/carousel";

import { CarouselCard } from "./carousel-card";

export function CarouselList() {
  return (
    <div className="mx-auto hidden px-3 transition-all duration-300 md:block lg:max-w-6xl">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 8000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 10 }, (_, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2"
            >
              <CarouselCard index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
      </Carousel>
    </div>
  );
}
