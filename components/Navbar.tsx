"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl bg-background/60 border-b border-border/40"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-semibold text-lg tracking-tight">MB</span>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#proof" className="text-foreground/70 hover:text-foreground transition-colors">Proof</a>
          <a href="#career" className="text-foreground/70 hover:text-foreground transition-colors">Career</a>
          <a href="mailto:mokshbudhiraja03@gmail.com" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
