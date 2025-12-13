"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedActionButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
}

export function AnimatedActionButton({ 
  onClick, 
  children, 
  variant = "primary", 
  className = "",
  disabled = false 
}: AnimatedActionButtonProps) {
  const baseClasses = "relative overflow-hidden px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white",
    secondary: "bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background overlay */}
      <motion.div
        className={`absolute inset-0 opacity-0 ${
          variant === "primary" 
            ? "bg-gradient-to-r from-pink-600 to-purple-600" 
            : "bg-gradient-to-r from-teal-600 to-blue-600"
        }`}
        whileHover={{ opacity: disabled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full scale-0"
        whileTap={{ scale: disabled ? 0 : 4, opacity: [0.5, 0] }}
        transition={{ duration: 0.6 }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Button content */}
      <motion.div
        className="relative z-10 flex items-center gap-2"
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full blur-lg opacity-0 ${
          variant === "primary"
            ? "bg-gradient-to-r from-purple-500 to-pink-500"
            : "bg-gradient-to-r from-blue-500 to-teal-500"
        }`}
        whileHover={{ opacity: disabled ? 0 : 0.6 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}