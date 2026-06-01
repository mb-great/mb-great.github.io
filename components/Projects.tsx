"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Dumbbell, PieChart, ChevronDown, ChevronUp } from "lucide-react";

const CLIENT_PROJECTS = [
  {
    title: "InvoPilot by SaasKnot",
    role: "Maintainer / Developer",
    desc: "Invoicing SaaS built with Supabase and PostgreSQL. Handled Google OAuth2, Razorpay subscriptions, webhooks, and payment state machines.",
    img: "/invopilot_logo.png",
    tags: ["Supabase", "PostgreSQL", "OAuth2", "Razorpay"],
    rounded: "rounded-xl",
    link: "https://invopilot.com",
    github: null
  },
  {
    title: "Luxentra Homes",
    role: "Full-Stack Engineer",
    desc: "Next.js landing page with contact form. Handled Vercel deployment, custom domain setup, and DNS configuration.",
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
    img: "/trydent_logo.png",
    tags: ["Shopify", "Cloudflare", "DNS"],
    rounded: "rounded-md bg-white p-1",
    link: "https://trydent.in",
    github: null
  }
];

const PERSONAL_PROJECTS = [
  {
    title: "Gym Exercises Client",
    desc: "Frontend search application integrating a robust third-party backend API (RapidAPI). Demonstrates clean API data consumption.",
    icon: Dumbbell,
    tags: ["React", "RapidAPI", "Frontend"],
    rounded: "rounded-lg bg-indigo-500/10 text-indigo-500",
    link: "https://mb-s-gym-exercises.netlify.app/",
    github: "https://github.com/mb-great/gym-exercises"
  },
  {
    title: "Pie Chart Engine",
    desc: "Backend pipeline generating animated pie chart MP4s from raw JSON data. Uses Node Canvas and FFmpeg.",
    icon: PieChart,
    tags: ["Node.js", "FFmpeg", "Node-Canvas"],
    rounded: "rounded-lg bg-purple-500/10 text-purple-500",
    link: null,
    github: "https://github.com/mb-great/pieChartAnimationGenerator"
  }
];

export default function Projects() {
  const [showAllPersonal, setShowAllPersonal] = useState(false);

  const displayedPersonalProjects = showAllPersonal 
    ? PERSONAL_PROJECTS 
    : PERSONAL_PROJECTS.slice(0, 3);

  return (
    <section id="proof" className="max-w-7xl mx-auto py-20 overflow-hidden">
      {/* --- CLIENT WORK (INFINITE CAROUSEL) --- */}
      <div className="mb-12 px-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-sm font-semibold tracking-wider text-indigo-500 mb-2 block">01 — PROOF NOT PROMISES</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Client Work</h2>
        </div>
        <p className="text-foreground/60 max-w-md text-sm font-medium">
          Infinite scroll. Pauses on hover so you can actually read it.
        </p>
      </div>

      <div className="relative flex overflow-hidden w-full group mask-edges pb-20">
        <div className="flex gap-6 pr-6 animate-marquee group-hover:[animation-play-state:paused] hover:[animation-play-state:paused] w-max">
          {[...CLIENT_PROJECTS, ...CLIENT_PROJECTS, ...CLIENT_PROJECTS].map((proj, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] shrink-0 bg-card border border-border/60 rounded-3xl p-8 hover:bg-accent/30 transition-colors shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`relative w-14 h-14 overflow-hidden shadow-sm shrink-0 flex items-center justify-center ${proj.rounded}`}>
                  <Image 
                    src={proj.img} 
                    alt={proj.title} 
                    fill 
                    sizes="56px"
                    className="object-contain" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground tracking-tight line-clamp-1">{proj.title}</h3>
                  <span className="text-indigo-500 text-sm font-semibold tracking-wide">{proj.role}</span>
                </div>
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

      {/* --- PERSONAL PROJECTS (GRID + VIEW MORE) --- */}
      <div className="mt-16 px-6">
        <div className="mb-12">
          <span className="text-sm font-semibold tracking-wider text-indigo-500 mb-2 block">02 — EXPERIMENTS</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Personal Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPersonalProjects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <div 
                key={idx} 
                className="bg-card border border-border/60 rounded-3xl p-8 hover:bg-accent/30 transition-colors shadow-sm flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 flex items-center justify-center shadow-sm shrink-0 ${proj.rounded}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground tracking-tight line-clamp-1">{proj.title}</h3>
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
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-foreground text-background text-sm font-medium rounded-xl hover:scale-[1.02] transition-transform">
                        <ExternalLink size={14} /> Visit
                      </a>
                    )}
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-accent/50 text-foreground text-sm font-medium rounded-xl border border-border/50 hover:bg-accent hover:scale-[1.02] transition-transform">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg> Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {PERSONAL_PROJECTS.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button 
              onClick={() => setShowAllPersonal(!showAllPersonal)}
              className="px-6 py-3 bg-accent border border-border text-foreground font-medium rounded-full hover:bg-accent/80 transition-colors flex items-center gap-2"
            >
              {showAllPersonal ? (
                <>View Less <ChevronUp size={16} /></>
              ) : (
                <>View All Projects <ChevronDown size={16} /></>
              )}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
