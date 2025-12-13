"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function SkillsDemo() {
  return (
    <div className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      className={cn(
        "relative group cursor-pointer",
        "bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800",
        "border border-gray-200 dark:border-neutral-700",
        "rounded-2xl p-6",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "overflow-hidden"
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`
        }}
      />
      
      {/* Skill icon */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div 
          className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: skill.color }}
        >
          {skill.icon}
        </div>
        
        <h3 className="text-lg font-semibold text-black dark:text-white mb-1">
          {skill.name}
        </h3>
        
        <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          {skill.category}
        </span>
      </div>

      {/* Hover effect border */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, transparent, ${skill.color}20, transparent)`,
          border: `1px solid ${skill.color}40`
        }}
      />
    </motion.div>
  );
};

const skills: Skill[] = [
  {
    name: "HTML",
    icon: "🌐",
    color: "#E34F26",
    category: "Frontend"
  },
  {
    name: "CSS",
    icon: "🎨",
    color: "#1572B6",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "#F7DF1E",
    category: "Frontend"
  },
  {
    name: "React",
    icon: "⚛️",
    color: "#61DAFB",
    category: "Frontend"
  },
  {
    name: "Next.js",
    icon: "▲",
    color: "#000000",
    category: "Frontend"
  },
  {
    name: "Python",
    icon: "🐍",
    color: "#3776AB",
    category: "Backend"
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "#339933",
    category: "Backend"
  },
  {
    name: "Express",
    icon: "🚀",
    color: "#000000",
    category: "Backend"
  },
  {
    name: "FastAPI",
    icon: "⚡",
    color: "#009688",
    category: "Backend"
  },
  {
    name: "Docker",
    icon: "🐳",
    color: "#2496ED",
    category: "DevOps"
  },
  {
    name: "Kubernetes",
    icon: "☸️",
    color: "#326CE5",
    category: "DevOps"
  },
  {
    name: "AWS",
    icon: "☁️",
    color: "#FF9900",
    category: "Cloud"
  },
  {
    name: "Azure",
    icon: "🔷",
    color: "#0078D4",
    category: "Cloud"
  }
];