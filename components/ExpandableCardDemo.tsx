"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/components/ui/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Knowledge, Skills, Career, Success, Growth",
    title: "Education Application",
    src: "/gm.png",
    ctaText: "Live",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
         Gemini Education is a modern learning platform built with Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS. It offers career-focused courses, educational resources, and insightful blogs. With features like authentication, responsive design, and smooth user experience, it empowers students to acquire in-demand skills, enhance knowledge, and achieve academic and professional growth effectively.
        </p>
      );
    },
  },
  {
    description: "Knowledge, Skills, Career, Success, Growth",
    title: "Stella College",
    src: "/sm.png",
    ctaText: "Live",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
         Stella College is a dynamic educational platform designed to provide students with career-focused courses, workshops, and learning resources. Built using modern technologies like Next.js, React, Node.js, Express, MongoDB, and Bootstrap, it offers a responsive, user-friendly interface. Features include secure authentication, interactive course content, and insightful blogs. The platform empowers students to gain practical skills, stay updated with industry trends, and achieve academic and professional growth in a seamless, engaging learning environment.
        </p>
      );
    },
  },

  {
    description: "Order Food Fast, Anywhere",
    title: "Ecommerce Application ",
    src: "/fm.jpeg",
    ctaText: "Live",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
         This Food Ordering Application is a modern, full-stack platform built with Next.js, React, Node.js, Express, and MongoDB. It provides users with a seamless interface to browse restaurants, explore menus, and place orders quickly. Features include user authentication, , responsive design using Bootstrap, and secure payment integration. The application is optimized for performance and usability, empowering users to enjoy a smooth, intuitive, and efficient food ordering experience anytime, anywhere.
        </p>
      );
    },
  },
  {
    description: "Organize Notes Quickly, Anywhere",
    title: "NoteBook Application",
    src: "/im.png",
    ctaText: "Live",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
         iNotebook is a full-stack note-taking web application built with Next.js, React, Node.js, and MongoDB. It allows users to create, edit, and manage personal notes efficiently. Features include secure authentication, responsive design using Bootstrap, and an intuitive interface for easy note organization. The application ensures data safety, fast performance, and seamless user experience, empowering users to keep their notes organized and accessible anytime, anywhere.
        </p>
      );
    },
  },
  {
    description: "Connect Instantly, Anywhere, Anytime",
    title: "Video Call Application",
    src: "ym.jpeg",
    ctaText: "Live",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          This Video Call Application is a real-time communication platform built with Next.js, React, Node.js, and WebRTC. It enables users to connect via secure video and audio calls seamlessly. Features include responsive design using Bootstrap, user authentication, peer-to-peer connections, and smooth, low-latency interactions. Optimized for performance across devices, the application empowers users to communicate, collaborate, and hold virtual meetings efficiently from anywhere, providing a reliable and intuitive online calling experience.
        </p>
      );
    },
  },{
    description: "Stream Videos Fast, Anywhere",
    title: "Youtube Clone",
    src: "ym.png",
    ctaText: "Live",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
        This YouTube Clone is a fast, modern video streaming platform built with Vite, React, and Next.js. It allows users to browse, search, and watch videos seamlessly by fetching data from APIs. Features include responsive design using Bootstrap, smooth video playback, and user-friendly interface. Optimized for performance, the application provides an engaging experience for discovering content and enjoying personalized video streaming anytime, anywhere.
        </p>
      );
    },
  },
];
