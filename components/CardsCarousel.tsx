"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "InvoPilot SaaS",
    desc: "Invoicing SaaS built with Supabase and PostgreSQL. Handled Google OAuth2, Razorpay subscriptions, webhooks, and payment state machines.",
    img: "/invopilot_logo.png",
    tags: ["Supabase", "PostgreSQL", "OAuth2", "Razorpay"],
    rounded: "rounded-xl",
    link: "https://invopilot.com",
    github: null
  },
  {
    title: "Luxentra Homes",
    desc: "Next.js landing page with contact form. Handled Vercel deployment, custom domain setup, and DNS configuration.",
    img: "/luxentra_logo.jpg",
    tags: ["Next.js", "React", "Vercel", "DNS"],
    rounded: "rounded-full",
    link: "https://luxentrahomes.com",
    github: null
  },
  {
    title: "Trydent",
    desc: "Shopify storefront production-ready setup. Handled Cloudflare DNS, server troubleshooting, and deployment checks.",
    img: "/trydent_logo.png",
    tags: ["Shopify", "Cloudflare", "DNS"],
    rounded: "rounded-md bg-white p-1",
    link: "https://trydent.in",
    github: null
  },
  {
    title: "Gym Exercises Client",
    desc: "Frontend search application integrating a robust third-party backend API (RapidAPI). Demonstrates clean API data consumption.",
    img: "https://www.google.com/s2/favicons?domain=netlify.com&sz=128",
    tags: ["React", "RapidAPI", "Frontend"],
    rounded: "rounded-lg",
    link: "https://mb-s-gym-exercises.netlify.app/",
    github: "https://github.com/mb-great/gym-exercises"
  },
  {
    title: "Pie Chart Engine",
    desc: "Backend pipeline generating animated pie chart MP4s from raw JSON data. Uses Node Canvas and FFmpeg.",
    img: "https://www.google.com/s2/favicons?domain=github.com&sz=128",
    tags: ["Node.js", "FFmpeg", "Node-Canvas"],
    rounded: "rounded-lg",
    link: null,
    github: "https://github.com/mb-great/pieChartAnimationGenerator"
  }
];

export default function CardsCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="proof" className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-sm font-semibold tracking-wider text-indigo-500 mb-2 block">01 — PROOF NOT PROMISES</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Featured Projects</h2>
        </div>
        <p className="text-foreground/60 max-w-md text-sm font-medium">
          Drag to scroll manually, or let it ride. Includes recent client work and notable personal builds.
        </p>
      </div>

      <div 
        className="relative flex overflow-hidden w-full cursor-grab active:cursor-grabbing mask-edges"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-6 pr-6"
          animate={{ x: isHovered ? "0%" : "-50%" }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate list for seamless infinite loop */}
          {[...PROJECTS, ...PROJECTS].map((proj, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] shrink-0 bg-card border border-border/60 rounded-3xl p-8 hover:bg-accent/30 transition-colors shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`relative w-14 h-14 overflow-hidden shadow-sm shrink-0 ${proj.rounded}`}>
                  <Image 
                    src={proj.img} 
                    alt={proj.title} 
                    fill 
                    sizes="56px"
                    className="object-contain" 
                  />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground tracking-tight line-clamp-1">{proj.title}</h3>
              </div>
              <p className="text-card-foreground/70 leading-relaxed mb-8 flex-grow">
                {proj.desc}
              </p>
              
              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full border border-border/40">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-border/40">
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-foreground text-background text-sm font-medium rounded-xl hover:scale-[1.02] transition-transform">
                      <ExternalLink size={14} /> Visit
                    </a>
                  )}
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent/50 text-foreground text-sm font-medium rounded-xl border border-border/50 hover:bg-accent hover:scale-[1.02] transition-transform">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg> Source
                    </a>
                  )}
                  {!proj.link && !proj.github && (
                    <div className="flex-1 py-2.5 text-center text-sm font-medium text-foreground/40 bg-accent/20 rounded-xl border border-border/20 cursor-not-allowed">
                      Private Repo
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </section>
  );
}
