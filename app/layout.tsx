import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE = "https://mokshbudhiraja.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  // Title targets terms people actually search. "Backend engineer" has effectively
  // no commercial search demand; "razorpay integration" and "webhook" do.
  title: "Moksh Budhiraja — Full Stack Developer | Razorpay, Webhooks, Node.js",
  description:
    "Full stack developer in Delhi. Razorpay subscriptions, webhook state machines, OAuth2, queues and deployment. Available for freelance and contract work.",
  keywords: [
    "Razorpay integration developer",
    "Razorpay subscription integration",
    "webhook developer",
    "Node.js backend developer India",
    "Supabase developer",
    "payment gateway integration freelancer",
    "backend engineer Delhi",
  ],
  authors: [{ name: "Moksh Budhiraja", url: SITE }],
  creator: "Moksh Budhiraja",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE,
    siteName: "Moksh Budhiraja",
    title: "Moksh Budhiraja — Full Stack Developer",
    description:
      "Razorpay subscriptions, webhook state machines, queues and deployment. Freelance and contract work.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moksh Budhiraja — Full Stack Developer",
    description:
      "Razorpay subscriptions, webhook state machines, queues and deployment.",
  },
  robots: { index: true, follow: true },
};

// Person schema. Tells search engines who this is rather than making them guess
// from the page text, and is what feeds knowledge-panel style results.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Moksh Budhiraja",
  url: SITE,
  jobTitle: "Full Stack Developer",
  email: "mailto:mb@mokshbudhiraja.com",
  address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  sameAs: ["https://github.com/mb-great", "https://www.linkedin.com/in/mbgreat/"],
  knowsAbout: [
    "Node.js", "Express", "PostgreSQL", "Supabase", "AWS",
    "Razorpay subscriptions", "Webhooks", "OAuth2",
    "Job queues", "Incident response", "Nginx", "PM2",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
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
