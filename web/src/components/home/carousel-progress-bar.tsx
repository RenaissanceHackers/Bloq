"use client";

import React from "react";

import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

import { CarouselItem } from "~/components/ui/carousel";
import { Carousel, CarouselContent } from "~/components/ui/carousel";

import type { CarouselApi } from "~/components/ui/carousel";
import { CarouselCard } from "./carousel-card";

const slides = [
  {
    title: "Find login screen references.",
    imageUrl: "/images/hero-banner-1.webp",
  },
  {
    title: "Discover best-in-class apps.",
    imageUrl: "/images/hero-banner-2.webp",
  },
  {
    title: "Find onboarding flows.",
    imageUrl: "/images/hero-banner-3.webp",
  },
  {
    title: "Explore searchbar references.",
    imageUrl: "/images/hero-banner-4.webp",
  },
];

const intervalAutoplay = 8000 as number;

export function CarouselProgressBar() {
  // const mounted = useMounted();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState<number>(slides.length);

  const goToIndex = (index: number) => {
    if (!api) {
      return;
    }
    setCurrent(index);
    api?.scrollTo(index, true);
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const animationControl = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: intervalAutoplay / 1000, ease: "easeInOut" },
    },
  };

  return (
    <section className="w-full  overflow-hidden sm:hidden">
      <Carousel
        className="relative h-full space-y-4"
        opts={{
          loop: false,
          inViewThreshold: 1,
          dragFree: false,
          skipSnaps: true,
        }}
        plugins={[
          Autoplay({
            delay: intervalAutoplay,
            stopOnInteraction: false,
          }),
          ClassNames(),
        ]}
        setApi={setApi}
      >
        <CarouselContent
          className={cn("!fade__container", !!api ? "!fade__is-ready" : "")}
        >
          {slides.map((item) => (
            <CarouselItem key={item.title} className="!fade__slide">
              <CarouselCard />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex transform justify-center">
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className="relative h-[3px] w-12 overflow-hidden rounded-full"
              >
                <div className="absolute h-full w-full bg-muted-foreground/30 dark:bg-muted-foreground/70"></div>
                <motion.div
                  className={cn(
                    "relative z-10 h-full bg-primary",
                    current === index && "animation-progress-bar",
                  )}
                  variants={animationControl}
                  initial="hidden"
                  animate={current === index ? "visible" : "hidden"}
                />
              </button>
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
