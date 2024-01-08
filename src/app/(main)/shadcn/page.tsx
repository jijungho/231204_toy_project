"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { toast } from "sonner";
import Image from "next/image";
import React from "react";
import ShadcnImg from "./components/ShadcnImg";

const image: { src: string; alt: string; heroName: string; name: string }[] = [
  {
    src: "/img/sam-spiderman3.PNG",
    alt: "sam-spiderman",
    name: "Tylenol",
    heroName: "sam-spiderman",
  },
  {
    src: "/img/tom-spicerman-photo.jpg",
    alt: "sam-spiderman",
    name: "StrawBerry",
    heroName: "tom-spiderman",
  },
  {
    src: "/img/peakpx.jpg",
    alt: "sam-spiderman",
    name: "Hoya",
    heroName: "venom",
  },
];

const ShadcnPage = () => {
  return (
    <>
      <div id="main" className="w-full h-full flex  justify-center items-center bg-slate-500">
        <Carousel className="max-w-7xl h-full items-center justify-center flex">
          <CarouselContent className="w-full">
            {image.map((el, idx) => (
              <CarouselItem key={idx}>
                <div className="p-1">
                  <Card>
                    <CardContent className="w-full pt-6">
                      <div className="flex flex-col justify-center">
                        <Image src={el.src} alt={el.alt} width={700} height={500} className="w-full h-[900px]" />
                        <HoverCard>
                          <HoverCardTrigger className="text-center mt-4 cursor-default text-3xl font-bold">{el.name}</HoverCardTrigger>
                          <HoverCardContent className="bg-white text-center absolute bottom-14 left-[-117px] shadow-sm">
                            <span className="text-center mt-4 select-none ">{el.heroName}</span>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="text-center mt-10">
                    <Button
                      variant="outline"
                      className="bg-white hover:bg-slate-800 hover:text-white border-none"
                      onClick={() =>
                        toast("안녕하세요 좋은 아침입니다.", {
                          description: "부연 설명입니다.",
                          action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                          },
                        })
                      }
                    >
                      Show Toast
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div></div>

      <ShadcnImg />
    </>
  );
};

export default ShadcnPage;
