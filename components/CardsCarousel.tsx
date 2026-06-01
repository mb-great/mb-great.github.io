"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const CLIENT_PROJECTS = [
  {
    title: "InvoPilot SaaS",
    desc: "Invoicing SaaS built with Supabase and PostgreSQL. Handled Google OAuth2, Razorpay subscriptions, webhooks, and payment state machines.",
    img: "/invopilot_logo.png",
    tags: ["Supabase", "PostgreSQL", "OAuth2", "Razorpay"],
    rounded: "rounded-xl"
  },
  {
    title: "Luxentra Homes",
    desc: "Next.js landing page with contact form. Handled Vercel deployment, custom domain setup, and DNS configuration.",
    img: "/luxentra_logo.jpg",
    tags: ["Next.js", "React", "Vercel", "DNS"],
    rounded: "rounded-full"
  },
  {
    title: "Trydent",
    desc: "Shopify storefront production-ready setup. Handled Cloudflare DNS, server troubleshooting, and deployment checks.",
    img: "/trydent_logo.png",
    tags: ["Shopify", "Cloudflare", "DNS"],
    rounded: "rounded-md bg-white p-1"
  }
];

export default function CardsCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="proof" className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      <div className="mb-12">
        <span className="text-sm font-semibold tracking-wider text-indigo-500 mb-2 block">01 — PROOF NOT PROMISES</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Client Work</h2>
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
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate list for seamless infinite loop */}
          {[...CLIENT_PROJECTS, ...CLIENT_PROJECTS].map((proj, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] shrink-0 bg-card border border-border/60 rounded-3xl p-8 hover:bg-accent/30 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`relative w-14 h-14 overflow-hidden shadow-sm ${proj.rounded}`}>
                  <Image src={proj.img} alt={proj.title} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground tracking-tight">{proj.title}</h3>
              </div>
              <p className="text-card-foreground/70 leading-relaxed mb-8">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full border border-border/40">
                    {tag}
                  </span>
                ))}
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
