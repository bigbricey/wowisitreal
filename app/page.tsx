import Link from "next/link";
import { ArrowRight, Shield, Search, Zap, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(circle_at_center,_var(--electric-glow)_0%,_transparent_70%)]">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-electric-blue/20 text-electric-blue text-sm font-bold mb-8">
          <Shield className="w-4 h-4 animate-pulse" />
          CUTTING THROUGH THE AI HYPE SINCE 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">
          IS THAT AI TOOL <br />
          <span className="text-electric-blue drop-shadow-glow">ACTUALLY REAL?</span>
        </h1>

        <p className="text-xl md:text-2xl text-scientific-silver/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          We analyze AI tools so you don't waste money on overhyped garbage.
          Data-driven reviews. No affiliate BS. Just the truth.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            href="/tool"
            className="group bg-electric-blue text-primary-navy font-bold px-10 py-5 rounded-full hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-3 text-lg"
          >
            Scam Score Calculator <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link
            href="/tools"
            className="group glass border border-scientific-silver/20 px-10 py-5 rounded-full hover:border-electric-blue/50 transition-all flex items-center justify-center gap-3 text-lg"
          >
            Verified Tools <CheckCircle className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="glass border border-scientific-silver/10 rounded-2xl p-8 text-left">
          <Search className="w-10 h-10 text-electric-blue mb-4" />
          <h3 className="text-xl font-bold mb-2">Deep Research</h3>
          <p className="text-scientific-silver/60 text-sm">
            We analyze hundreds of user reviews, forum discussions, and real results
            so you get the full picture.
          </p>
        </div>

        <div className="glass border border-scientific-silver/10 rounded-2xl p-8 text-left">
          <Shield className="w-10 h-10 text-electric-blue mb-4" />
          <h3 className="text-xl font-bold mb-2">Scam Detection</h3>
          <p className="text-scientific-silver/60 text-sm">
            Our calculator identifies red flags that most reviewers miss.
            Know before you buy.
          </p>
        </div>

        <div className="glass border border-scientific-silver/10 rounded-2xl p-8 text-left">
          <Zap className="w-10 h-10 text-electric-blue mb-4" />
          <h3 className="text-xl font-bold mb-2">Tools That Work</h3>
          <p className="text-scientific-silver/60 text-sm">
            We curate AI tools that actually deliver results.
            No hype, no fake testimonials.
          </p>
        </div>
      </div>

      {/* Social Proof */}
      <div className="mt-16 text-scientific-silver/40 text-sm">
        <p>Trusted by creators who are tired of getting scammed by AI hype</p>
      </div>
    </div>
  );
}
