import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Moksh Budhiraja - Backend Engineer",
  description: "I build backends that stay up. APIs, queues, databases, deployment - from code to production. Available for freelance and contract work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} relative bg-background text-foreground min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200`} suppressHydrationWarning>
        {/* Ambient background Apple/Samsung style glass effects */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 glow-blur animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 glow-blur animate-pulse" style={{ animationDelay: "2s" }} />
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
