"use client";

import { motion } from "framer-motion";

export function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <motion.div
        className="absolute -top-1/2 -left-1/4 h-[800px] w-[800px] rounded-full bg-indigo-600/20 blur-[120px] animate-mesh-drift"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[100px] animate-mesh-drift"
        style={{ animationDelay: "-5s" }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[80px] animate-mesh-drift"
        style={{ animationDelay: "-10s" }}
      />
    </div>
  );
}
