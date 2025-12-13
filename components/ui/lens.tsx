"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";

interface LensProps {
  children: React.ReactNode;
  hovering: boolean;
  setHovering: (hovering: boolean) => void;
  lensSize?: number;
  position?: { x: number; y: number };
  className?: string;
}

export const Lens: React.FC<LensProps> = ({
  children,
  hovering,
  setHovering,
  lensSize = 150,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
      {hovering && (
        <motion.div
          className="absolute pointer-events-none z-10 rounded-full"
          style={{
            width: lensSize,
            height: lensSize,
            left: position.x - lensSize / 2,
            top: position.y - lensSize / 2,
            background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
            backdropFilter: "blur(2px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  );
};