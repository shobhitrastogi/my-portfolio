import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "YouTube Clone",
      image:
        "/ym.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "NoteBook Application",
      image:
        "/im.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Ecommerce Application",
      image:
        "/fm.jpeg ",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Video Call Application",
      image:
        "/ym.jpeg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Courses + Blogs",
      image:
        "/sm.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Education Application",
      image:
        "/gm.png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
   
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
