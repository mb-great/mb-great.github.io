import Link from "next/link";

export const metadata = {
  title: "Page not found — Moksh Budhiraja",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <span className="inline-block py-1 px-3 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide mb-6 border border-border/50">
          404
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
          This page moved,
          <br />
          <span className="text-foreground/40">or never existed.</span>
        </h1>
        <p className="text-xl text-foreground/60 max-w-xl leading-relaxed mb-10">
          Both happen. If you followed a link from somewhere and it broke, tell me
          and I&apos;ll fix it — that&apos;s the kind of thing I do for a living.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-medium rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center"
          >
            Back to the start
          </Link>
          <a
            href="/tools"
            className="w-full sm:w-auto px-8 py-4 bg-accent/50 text-foreground font-medium rounded-2xl hover:bg-accent border border-border/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
          >
            Free tools
          </a>
          <a
            href="mailto:mb@mokshbudhiraja.com"
            className="w-full sm:w-auto px-8 py-4 text-foreground/70 hover:text-foreground font-medium rounded-2xl transition-colors flex items-center justify-center"
          >
            Report the broken link
          </a>
        </div>
      </div>
    </main>
  );
}
