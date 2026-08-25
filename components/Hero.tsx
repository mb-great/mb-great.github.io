"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="max-w-[940px] mx-auto px-7 pt-[72px] pb-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <h1 className="font-heading font-extrabold text-[clamp(44px,7.4vw,80px)] leading-[0.94] tracking-[-0.048em] text-balance">
          Developer?
        </h1>
        <p className="font-mono text-[clamp(13px,1.7vw,16px)] tracking-[0.02em] text-faint mt-2.5">
          nah.. overthinker
        </p>
      </motion.div>

      <motion.p
        className="sig-loop mt-6"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.06 }}
      >
        <span className="sig-steps">
          plan <i>&gt;</i> code <i>&gt;</i> live
        </span>
        <span className="sig-cyc" aria-hidden="true">
          🔁
        </span>
        <a
          href="mailto:mb@mokshbudhiraja.com?subject=bug"
          className="inline-flex items-center min-h-[44px] px-4 rounded-full bg-accent text-accent-foreground font-mono text-[10.5px] tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
        >
          bugs?
        </a>
      </motion.p>

      <motion.p
        className="text-[19px] text-muted max-w-[52ch] leading-relaxed mt-5"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.11 }}
      >
        I work out what you actually need, build it, and hand you something running. Not a
        folder of files and a login you&rsquo;ll never use.
      </motion.p>

      <motion.div
        className="flex gap-2.5 flex-wrap mt-7"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.16 }}
      >
        <a
          href="mailto:mb@mokshbudhiraja.com"
          className="inline-flex items-center min-h-[48px] px-[22px] rounded-[10px] bg-accent text-accent-foreground font-semibold text-[15px] hover:opacity-90 active:translate-y-px transition"
        >
          Start a project
        </a>
        <a
          href="#proof"
          className="inline-flex items-center min-h-[48px] px-[22px] rounded-[10px] border border-border-strong text-foreground font-semibold text-[15px] hover:bg-card transition"
        >
          See the work
        </a>
      </motion.div>

      {/* status rail - the structural idea. A signal reports state. */}
      <motion.div
        className="grid gap-px bg-border border border-border rounded-[20px] overflow-hidden mt-11 sm:grid-cols-3"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.22 }}
      >
        <div className="bg-card px-[22px] py-5">
          <span className="block font-mono text-[10.5px] tracking-[0.13em] uppercase text-faint mb-2">
            Availability
          </span>
          <span className="font-heading font-bold text-[19px] tracking-[-0.02em] flex items-center gap-2">
            <span className="sig-blip" />
            Taking work <small className="font-normal text-[13px] text-muted">from Sept</small>
          </span>
        </div>
        <div className="bg-card px-[22px] py-5">
          <span className="block font-mono text-[10.5px] tracking-[0.13em] uppercase text-faint mb-2">
            Typical reply
          </span>
          <span className="font-heading font-bold text-[19px] tracking-[-0.02em]">
            Under 12h <small className="font-normal text-[13px] text-muted">IST</small>
          </span>
        </div>
        <div className="bg-card px-[22px] py-5">
          <span className="block font-mono text-[10.5px] tracking-[0.13em] uppercase text-faint mb-2">
            Currently building
          </span>
          <span className="font-heading font-bold text-[19px] tracking-[-0.02em]">
            Billing infra <small className="font-normal text-[13px] text-muted">InvoPilot v2</small>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
