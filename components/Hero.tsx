"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-32 flex flex-col items-start justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide mb-6 border border-border/50">
          AVAILABLE FOR CONTRACT WORK
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-6 text-foreground">
          I build backends <br className="hidden md:block" />
          <span className="text-foreground/40">that stay up.</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl leading-relaxed mb-10 font-medium">
          APIs, queues, databases, deployment — from architecture to production. I ship robust systems for SaaS, E-commerce, and Real Estate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a 
            href="mailto:mokshbudhiraja03@gmail.com" 
            className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-medium rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-sm"
          >
            <Mail size={18} />
            Hire Me
          </a>
          <a 
            href="/Moksh_Resume_v3_fixed.docx" 
            download
            className="w-full sm:w-auto px-8 py-4 bg-accent/50 text-foreground font-medium rounded-2xl hover:bg-accent border border-border/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Download size={18} />
            Download Resume
          </a>
          
          <div className="flex gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
            <a href="https://github.com/mb-great" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-accent/50 hover:bg-accent border border-border/50 transition-colors text-foreground/70 hover:text-foreground">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
            </a>
            <a href="https://linkedin.com/in/moksh-budhiraja" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-accent/50 hover:bg-accent border border-border/50 transition-colors text-foreground/70 hover:text-foreground">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
