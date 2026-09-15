"use client";

import { motion } from "framer-motion";

const CAREER_DATA = [
  {
    role: "Full-Stack Engineer",
    company: "Independent (Contract)",
    date: "Jul 2025 - Present",
    desc: "Shipping production systems for SaaS, Real Estate, and E-commerce clients.",
    bullets: [
      "Built and deployed InvoPilot (SaaS) using Next.js, Supabase, and Razorpay.",
      "Developed Luxentra Homes frontend with Next.js and Vercel hosting.",
      "Configured Shopify production environments and DNS routing via Cloudflare for Trydent."
    ]
  },
  {
    role: "Backend Engineer",
    company: "Pintude",
    date: "Jul 2024 – Jul 2025",
    desc: "Two of the company's microservices were mine alone for 12 months. Media generation, and a news crawler.",
    bullets: [
      "Card generation service built on async job queues, with retry isolation so a failure in one job didn't cascade across service boundaries.",
      "News crawler on cron. Multilingual classifier, all 17 IPTC categories.",
      "Node Canvas -> S3 for assets. EC2, PM2, Nginx. Ran 12 months in production."
    ]
  },
  {
    role: "Full-Stack Developer (Contract)",
    company: "Infinite Locus",
    date: "Apr 2024 - May 2024",
    desc: "Shopify storefront features and REST API work in a shared Git codebase.",
    bullets: [
      "Delivered Shopify Liquid layouts and storefront features without breaking live pages.",
      "REST APIs in Node.js, Express, Sequelize, MySQL; cleaned up slow queries on high-traffic endpoints."
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
