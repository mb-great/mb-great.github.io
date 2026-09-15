"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

const CLIENT_PROJECTS = [
  {
    title: "InvoPilot by SaasKnot",
    role: "Maintainer / Developer",
    desc: "Invoicing SaaS built with Supabase and PostgreSQL. Handled Google OAuth2, Razorpay subscriptions, webhooks, and payment state machines.",
    outcome: "Scope: Built the billing engine and payment state machine.",
    img: "/invopilot_logo.png",
    tags: ["Supabase", "PostgreSQL", "OAuth2", "Razorpay", "WordPress"],
    rounded: "rounded-xl",
    link: "https://invopilot.com",
    github: null
  },
  {
    title: "Luxentra Homes",
    role: "Full-Stack Engineer",
    desc: "Next.js landing page with contact form. Handled Vercel deployment, custom domain setup, and DNS configuration.",
    outcome: "Scope: Built the landing page and handled all the domain and DNS setup.",
    img: "/luxentra_logo.jpg",
    tags: ["Next.js", "React", "Vercel", "DNS"],
    rounded: "rounded-full",
    link: "https://luxentrahomes.com",
    github: null
  },
  {
    title: "Trydent",
    role: "Full-Stack Engineer",
    desc: "Shopify storefront production-ready setup. Handled Cloudflare DNS, server troubleshooting, and deployment checks.",
    outcome: "Scope: Got the store live and fixed a bunch of DNS headaches.",
    img: "/trydent_logo.png",
    tags: ["Shopify", "Cloudflare", "DNS"],
    rounded: "rounded-md bg-white p-1",
    link: "https://trydent.in",
    github: null
  },
  {
    title: "Soulfultaara",
    role: "Developer",
    desc: "E-commerce store setup and configuration on Shopify.",
    outcome: "Scope: Built and launched the Shopify store from scratch.",
    img: "/taara_logo.png",
    tags: ["Shopify", "E-commerce"],
    rounded: "rounded-md",
    link: "https://soulfultaara.com",
    github: null
  },
  {
    title: "Astrix Media Group",
    role: "Developer",
    desc: "Corporate website development on WordPress.",
    outcome: "Scope: Built the main company site on WordPress.",
    img: "/astrix_logo.png",
    tags: ["WordPress", "Web Development"],
    rounded: "rounded-md",
    link: "https://astrixmediagroup.com",
    github: null
  }
];

export default function Projects() {
  return (
    <section id="proof" className="max-w-7xl mx-auto py-20 overflow-hidden">
      {/* --- CLIENT WORK --- */}
      <div className="mb-12 px-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-sm font-semibold tracking-wider text-indigo-500 mb-2 block">01 — PROOF NOT PROMISES</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Client Work</h2>
        </div>
      </div>

      <div className="relative w-full pb-10">
        <div 
          className="flex gap-6 px-6 overflow-x-auto snap-x snap-mandatory modern-scrollbar pb-6 w-full"
        >
          {CLIENT_PROJECTS.map((proj, idx) => (
            <div 
              key={idx} 
              className="w-[85vw] sm:w-[380px] md:w-[420px] shrink-0 bg-card border border-border/60 rounded-3xl p-6 md:p-8 hover:bg-accent/30 transition-colors shadow-sm flex flex-col snap-center"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className={`relative h-14 w-14 sm:w-auto sm:min-w-[56px] sm:max-w-[120px] overflow-hidden flex items-center justify-start ${proj.rounded}`}>
                  <Image 
                    src={proj.img} 
                    alt={proj.title} 
                    fill 
                    sizes="(max-width: 768px) 56px, 120px"
                    className="object-contain object-left" 
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-card-foreground tracking-tight line-clamp-2">{proj.title}</h3>
                </div>
              </div>
              <div className="flex-grow flex flex-col mb-8">
                <p className="text-card-foreground/70 leading-relaxed mb-4 text-sm md:text-base">
                  {proj.desc}
                </p>
                <div className="mt-auto p-3 bg-accent/20 rounded-lg border border-border/40">
                  <p className="text-sm font-medium text-indigo-400 leading-snug">
                    {proj.outcome}
                  </p>
                </div>
              </div>
              
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
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 min-h-[44px] bg-foreground text-background text-sm font-medium rounded-xl hover:scale-[1.02] transition-transform">
                      <ExternalLink size={14} /> Visit Client
                    </a>
                  )}
                  {!proj.link && (
                    <div className="flex-1 py-2.5 text-center text-sm font-medium text-foreground/40 bg-accent/20 rounded-xl border border-border/20 cursor-not-allowed">
                      Private
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SIDE PROJECTS: LINK OUT, DON'T DILUTE THE CLIENT WORK --- */}
      <div className="mt-8 px-6 flex justify-center">
        <a
          href="https://github.com/mb-great?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent/50 border border-border/50 text-foreground/70 hover:text-foreground hover:bg-accent text-sm font-medium rounded-full transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
          Side projects and experiments on GitHub
        </a>
      </div>

      <style jsx>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        .modern-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .modern-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .modern-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(99, 102, 241, 0.3);
          border-radius: 20px;
        }
        .modern-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(99, 102, 241, 0.6);
        }
      `}</style>
    </section>
  );
}
