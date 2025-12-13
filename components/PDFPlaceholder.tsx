"use client";

import { motion } from "motion/react";
import { FileText, Upload } from "lucide-react";

export function PDFPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="aspect-[8.5/11] w-full rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-8 text-center"
    >
      <motion.div
        animate={{ 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="mb-6"
      >
        <FileText className="w-24 h-24 text-gray-400 dark:text-gray-500" />
      </motion.div>
      
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Resume PDF Not Found
      </h3>
      
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
        Please add your resume.pdf file to the public folder to display it here.
      </p>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg"
      >
        <Upload className="w-4 h-4" />
        <span className="text-sm">Add resume.pdf to /public folder</span>
      </motion.div>
    </motion.div>
  );
}