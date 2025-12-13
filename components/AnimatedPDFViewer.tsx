"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { PDFPlaceholder } from "./PDFPlaceholder";

interface AnimatedPDFViewerProps {
  pdfUrl: string;
  className?: string;
}

export function AnimatedPDFViewer({ pdfUrl, className = "" }: AnimatedPDFViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loadingTimeout, setLoadingTimeout] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);

    // Set a timeout to show alternative if PDF doesn't load
    const timeout = setTimeout(() => {
      if (!isLoaded) {
        setLoadingTimeout(true);
      }
    }, 3000); // 3 seconds timeout

    return () => clearTimeout(timeout);
  }, [isLoaded]);

  return (
    <div className={`relative ${className}`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main PDF container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2 
        }}
        className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-75"
          style={{
            background: "linear-gradient(45deg, transparent, transparent)",
            padding: "2px",
          }}
          animate={{
            background: [
              "linear-gradient(45deg, #8b5cf6, transparent, #ec4899, transparent, #3b82f6, transparent)",
              "linear-gradient(45deg, #3b82f6, transparent, #8b5cf6, transparent, #ec4899, transparent)",
              "linear-gradient(45deg, #ec4899, transparent, #3b82f6, transparent, #8b5cf6, transparent)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-full h-full bg-black rounded-2xl" />
        </motion.div>

        {/* PDF iframe container */}
        <div className="relative z-10 aspect-[8.5/11] w-full rounded-lg overflow-hidden bg-white shadow-inner">
          {/* Loading overlay */}
          {!isLoaded && !hasError && !loadingTimeout && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center z-20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full mb-4"
              />
              <p className="text-gray-600 text-sm">Loading PDF...</p>
            </motion.div>
          )}

          {/* PDF iframe or alternative view */}
          {hasError || loadingTimeout ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-gray-50 to-gray-100">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </motion.div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Resume PDF Available</h3>
              <p className="text-gray-600 mb-6 max-w-sm">
                The PDF is ready for download. Some browsers don't display PDFs inline, but you can download it directly.
              </p>
              
              <motion.a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open PDF in New Tab
              </motion.a>
            </div>
          ) : (
            <motion.iframe
              src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full h-full border-0"
              title="Resume PDF"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full opacity-80"
          animate={{
            y: [0, 10, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-2xl blur-xl -z-10"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}