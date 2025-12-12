"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
        {/* Left Side - Text */}
        <motion.div
          className="flex-1 flex flex-col items-start justify-center  text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center flex-wrap">
            <LayoutTextFlip
              text="I am a "
              words={[
                "Full Stack Developer",
                "Front End Developer",
                "Back End Developer",
                "JavaScript Developer",
                "Python Developer",
              ]}
            />
          </div>
        </motion.div>

        {/* Right Side - Image and Name */}
        <div className="flex-1 flex flex-col items-center justify-center mt-12 lg:mt-0">
          <motion.img
            src="/shobhit.jpeg"
            alt="hero"
            className="lg:w-[700px] lg:h-[450px] w-full max-w-[500px] h-auto object-cover rounded-lg shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <motion.h1
            className="title-font sm:text-4xl text-3xl font-medium text-black dark:text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Shobhit Rastogi
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
