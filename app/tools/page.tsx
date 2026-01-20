import Link from "next/link";
import { ExternalLink, CheckCircle, Star, AlertTriangle } from "lucide-react";

interface Tool {
  name: string;
  category: string;
  description: string;
  verdict: "verified" | "caution" | "avoid";
  score: number;
  pros: string[];
  cons: string[];
  price: string;
  link: string;
}

const tools: Tool[] = [
  {
    name: "InstaDoodle",
    category: "AI Video Creator",
    description: "Creates whiteboard-style doodle animations from text prompts. Good for explainer videos, social content, and faceless YouTube channels.",
    verdict: "verified",
    score: 32,
    pros: ["One-time payment ($37)", "30-day refund policy", "81+ real reviews on Trustpilot", "DoodleAI generates images from text"],
    cons: ["AI credits run out (150 included, then pay more)", "Aggressive upsells after purchase ($67 pro version)"],
    price: "$37 one-time",
    link: "https://1a20ao1bngts8ke9xou7rfv1xw.hop.clickbank.net",
  },
];

const getVerdictBadge = (verdict: Tool["verdict"]) => {
  switch (verdict) {
    case "verified":
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-400/10 text-green-400 text-sm font-medium">
          <CheckCircle className="w-4 h-4" /> Verified
        </span>
      );
    case "caution":
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium">
          <AlertTriangle className="w-4 h-4" /> Use Caution
        </span>
      );
    case "avoid":
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-400/10 text-red-400 text-sm font-medium">
          <AlertTriangle className="w-4 h-4" /> Avoid
        </span>
      );
  }
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Verified <span className="text-electric-blue">AI Tools</span>
          </h1>
          <p className="text-xl text-scientific-silver/60 max-w-2xl mx-auto">
            Tools we've researched and verified. No hype, just honest assessments based on real user data.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="glass border border-electric-blue/20 rounded-xl p-4 mb-8 text-center">
          <p className="text-sm text-scientific-silver/60">
            <strong className="text-electric-blue">Disclosure:</strong> Some links below are affiliate links.
            We only recommend tools we've thoroughly researched. Our opinions are not for sale.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="glass border border-scientific-silver/10 rounded-2xl p-6 md:p-8 hover:border-electric-blue/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-bold">{tool.name}</h2>
                    {getVerdictBadge(tool.verdict)}
                  </div>
                  <p className="text-electric-blue text-sm font-medium mb-2">{tool.category}</p>
                  <p className="text-scientific-silver/70 mb-4">{tool.description}</p>

                  {/* Pros & Cons */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-green-400 mb-2">What Works</h4>
                      <ul className="space-y-1">
                        {tool.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-scientific-silver/60 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-orange-400 mb-2">Watch Out For</h4>
                      <ul className="space-y-1">
                        {tool.cons.map((con, i) => (
                          <li key={i} className="text-sm text-scientific-silver/60 flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Score & CTA */}
                <div className="md:w-48 flex flex-col items-center text-center glass border border-scientific-silver/10 rounded-xl p-4">
                  <div className="text-sm text-scientific-silver/60 mb-1">Scam Score</div>
                  <div className={`text-4xl font-bold mb-2 ${
                    tool.score <= 35 ? 'text-green-400' :
                    tool.score <= 60 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {tool.score}%
                  </div>
                  <div className="text-sm text-scientific-silver/60 mb-4">{tool.price}</div>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-electric-blue text-primary-navy font-bold px-4 py-3 rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    View Tool <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="glass border border-scientific-silver/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-3">Want us to investigate a tool?</h3>
            <p className="text-scientific-silver/60 mb-6">
              Drop a comment on our latest video or DM us on X. We'll run it through the gauntlet.
            </p>
            <Link
              href="/tool"
              className="inline-flex items-center gap-2 bg-electric-blue text-primary-navy font-bold px-8 py-4 rounded-full hover:bg-white transition-all"
            >
              Or Test It Yourself <Star className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
