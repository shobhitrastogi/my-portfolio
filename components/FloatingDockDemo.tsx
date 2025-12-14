"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconExchange,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  // Dock links configuration
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "About Us",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/about",
    },
    {
      title: "Projects",
      icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/projects",
    },
    {
      title: "Contact Us",
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
          className="object-contain"
        />
      ),
      href: "/contact",
    },
    {
      title: "Resume",
      icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/resume",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/shobhit-rastogi-/",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/shobhitrastogi",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove in production
        items={links}
        aria-label="Floating navigation dock"
      />
    </div>
  );
}
