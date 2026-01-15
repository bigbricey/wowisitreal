import Link from "next/link";
import { ArrowRight, Microscope, ShieldCheck, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(circle_at_center,_var(--electric-glow)_0%,_transparent_70%)]">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-blue/20 text-electric-blue text-sm font-bold mb-8">
          <Globe className="w-4 h-4 animate-pulse" />
          ESTABLISHING THE NEW REALITY OF 2026
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">
          UNVEILING THE <br />
          <span className="text-electric-blue drop-shadow-glow">INVISIBLE TRUTH</span>
        </h1>

        <p className="text-xl md:text-2xl text-scientific-silver/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          We bridge the gap between radical science and consumer reality.
          High-performance protocols for those who question everything.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            href="/protocols/oxygen-therapy"
            className="group bg-electric-blue text-primary-navy font-bold px-10 py-5 rounded-full hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-3 text-lg"
          >
            Explore Oxygen Protocol <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link
            href="/research"
            className="group glass border border-scientific-silver/20 px-10 py-5 rounded-full hover:border-electric-blue/50 transition-all flex items-center justify-center gap-3 text-lg"
          >
            Research Lab <Microscope className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
        <div className="flex flex-col items-center gap-2">
          <ShieldCheck className="w-8 h-8" />
          <span className="text-[10px] uppercase tracking-widest">Verified Data</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Microscope className="w-8 h-8" />
          <span className="text-[10px] uppercase tracking-widest">Lab Tested</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Globe className="w-8 h-8" />
          <span className="text-[10px] uppercase tracking-widest">Global Specs</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Activity className="w-8 h-8" />
          <span className="text-[10px] uppercase tracking-widest">Real-time Metrics</span>
        </div>
      </div>
    </div>
  );
}

function Activity({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
