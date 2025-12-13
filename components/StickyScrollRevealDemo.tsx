"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Stella College",
    description:
      "Developed a responsive web application for Stella College featuring career-driven courses and engaging blogs to enhance student awareness and digital experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Gemini Education",
    description:
      "Developed Gemini Education’s full-stack web application, building responsive frontend interfaces, scalable backend APIs, and a structured database to manage courses and educational content efficiently.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Ecommerce Application",
    description:
      "Developed a full-stack food ordering web application with responsive frontend, secure backend APIs, and efficient database management for seamless ordering and user experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "NoteBook Application",
    description:
      "Built a secure full-stack note-taking web application with responsive frontend, user authentication, backend APIs, and efficient database management for organizing personal notes.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  }, {
    title: "Blog Application",
    description:
      "Built a full-stack blog application featuring responsive UI, user authentication, content management, backend APIs, and database integration for creating, publishing, and managing blogs seamlessly.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  }, {
    title: "Video Call application",
    description:
      "Built a real-time video calling application enabling seamless peer-to-peer communication, secure connections, responsive interface, and smooth audio-video interactions across devices.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  }, {
    title: "Youtube Clone",
    description:
      "Built a YouTube-style video streaming web application featuring responsive UI, video browsing, search functionality, and smooth playback for an engaging user experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <>
    <div className="w-full max-w-full mt-8 h-screen py-4 bg-white dark:bg-black transition-colors duration-300">
      <StickyScroll content={content} />
    </div>
    </>
  );
}
