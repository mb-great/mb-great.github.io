"use client";

import { motion } from "framer-motion";

const CAREER_DATA = [
  {
    role: "Full-Stack Engineer - Consulting & Contract Work",
    company: "Freelance",
    date: "Jul 2025 - Present",
    desc: "Shipping production systems for SaaS, Real Estate, and E-commerce clients.",
    bullets: [
      "Built and deployed InvoPilot (SaaS) using Next.js, Supabase, and Razorpay.",
      "Developed Luxentra Homes frontend with Next.js and Vercel hosting.",
      "Configured Shopify production environments and DNS routing via Cloudflare for Trydent."
    ]
  },
  {
    role: "Software Engineer",
    company: "Pintude",
    date: "Apr 2025 - Jun 2025",
    desc: "Built scalable UI components and state management for a data-heavy application.",
    bullets: [
      "Reduced rendering delays by 35% using React functional components and hooks.",
      "Integrated Redux for global state, ensuring consistent data flow.",
      "Converted high-fidelity Figma mockups into responsive, accessible code."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Infinite Locus",
    date: "Jan 2025 - Apr 2025",
    desc: "Full-stack development utilizing the MERN stack with AWS integrations.",
    bullets: [
      "Engineered a scalable RESTful backend utilizing Node.js and Express.",
      "Integrated AWS S3 for secure, high-availability media storage.",
      "Implemented JWT authentication to secure endpoints."
    ]
  }
];

export default function Timeline() {
  return (
    <section id="career" className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16">
        <span className="text-sm font-semibold tracking-wider text-indigo-500 mb-2 block">02 — HISTORY</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Career Timeline</h2>
      </div>

      <div className="relative border-l border-border/60 ml-4 md:ml-6 space-y-12">
        {CAREER_DATA.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-background" />
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
              <h3 className="text-2xl font-bold text-foreground">{item.role}</h3>
              <span className="text-sm font-medium text-foreground/50 shrink-0">{item.date}</span>
            </div>
            <h4 className="text-lg font-medium text-indigo-500 mb-4">{item.company}</h4>
            
            <p className="text-foreground/80 mb-4 font-medium">{item.desc}</p>
            
            <ul className="space-y-2">
              {item.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="text-foreground/60 flex items-start">
                  <span className="mr-2 text-indigo-500/50">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
