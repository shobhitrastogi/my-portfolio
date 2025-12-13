"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedPDFViewer } from "@/components/AnimatedPDFViewer";
import { AnimatedActionButton } from "@/components/AnimatedActionButton";
import { TypewriterText } from "@/components/TypewriterText";
import { Copy, Download, Mail, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);
  const email = "shobhit@example.com"; // Replace with your actual email

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleDownloadPDF = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure to add your resume.pdf to the public folder
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    // Open PDF in new tab
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Floating back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </motion.div>
        </Link>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            <TypewriterText text="My Resume" delay={500} />
          </h1>
          <p className="text-gray-300 text-lg">
            Download my latest resume or get in touch
          </p>
        </motion.div>

        {/* PDF Viewer Container */}
        <AnimatedPDFViewer 
          pdfUrl="/resume.pdf"
          className="max-w-4xl mx-auto mb-12"
        />

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Email Button */}
          <AnimatedActionButton
            onClick={handleCopyEmail}
            variant="primary"
          >
            {copied ? (
              <>
                <Copy className="w-5 h-5" />
                Email Copied!
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                Copy Email
              </>
            )}
          </AnimatedActionButton>

          {/* View PDF Button */}
          <AnimatedActionButton
            onClick={handleViewPDF}
            variant="secondary"
          >
            <ExternalLink className="w-5 h-5" />
            View PDF
          </AnimatedActionButton>

          {/* Download Button */}
          <AnimatedActionButton
            onClick={handleDownloadPDF}
            variant="secondary"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </AnimatedActionButton>
        </motion.div>

        {/* Success message for email copy */}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            Email copied to clipboard!
          </motion.div>
        )}
      </div>
    </div>
  );
}