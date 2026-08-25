"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-[940px] mx-auto px-7 h-[66px] flex items-center justify-between gap-4">
        <span className="font-heading font-extrabold text-[17px] tracking-[-0.03em]">
          Moksh Budhiraja
        </span>

        <div className="flex gap-0.5 items-center">
          <a
            href="#proof"
            className="hidden sm:inline-flex items-center min-h-[44px] px-[13px] rounded-[10px] text-muted text-[14.5px] font-medium hover:text-accent hover:bg-accent-wash transition"
          >
            Work
          </a>
          <a
            href="#career"
            className="hidden sm:inline-flex items-center min-h-[44px] px-[13px] rounded-[10px] text-muted text-[14.5px] font-medium hover:text-accent hover:bg-accent-wash transition"
          >
            Career
          </a>
          <a
            href="/tools"
            className="hidden sm:inline-flex items-center min-h-[44px] px-[13px] rounded-[10px] text-muted text-[14.5px] font-medium hover:text-accent hover:bg-accent-wash transition"
          >
            Tools
          </a>
          <a
            href="mailto:mb@mokshbudhiraja.com"
            className="inline-flex items-center gap-[7px] min-h-[44px] px-[14px] rounded-full bg-live-wash text-live font-mono text-[10px] tracking-[0.11em] uppercase border border-live/20"
          >
            <span className="sig-blip" />
            Open for work
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
