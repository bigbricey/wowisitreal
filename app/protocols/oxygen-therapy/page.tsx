"use client";

import { Check, ArrowRight, Zap, Brain, Activity, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function OxygenTherapy() {
    const sciencePoints = [
        {
            title: "Cellular Regeneration",
            icon: <Zap className="w-8 h-8 text-electric-blue" />,
            desc: "Increased oxygen pressure triggers massive stem cell release for rapid tissue repair."
        },
        {
            title: "Brain Fog Elimination",
            icon: <Brain className="w-8 h-8 text-electric-blue" />,
            desc: "Hyper-oxygenated blood plasma crosses the blood-brain barrier to fuel cognitive performance."
        },
        {
            title: "Systemic Recovery",
            icon: <Activity className="w-8 h-8 text-electric-blue" />,
            desc: "Reduce inflammation at the DNA level by suppressing production of pro-inflammatory cytokines."
        }
    ];

    const chambers = [
        { name: "Apex Pro Soft Shell", price: "$4,500", rating: "4.8/5", delivery: "7 Days" },
        { name: "Titan Hard Shell", price: "$12,000", rating: "5.0/5", delivery: "14 Days" },
        { name: "Zenith Multi-Place", price: "$28,000", rating: "4.9/5", delivery: "21 Days" },
    ];

    return (
        <div className="min-h-screen bg-primary-navy overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-electric-blue/20 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-electric-blue font-display font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                            Advanced Human Protocol #001
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Is Oxygen the <br />
                            <span className="text-electric-blue drop-shadow-glow">Fountain of Youth?</span>
                        </h1>
                        <p className="text-xl text-scientific-silver/60 max-w-2xl mx-auto mb-10">
                            The science of Hyperbaric Oxygen Therapy (HBOT) is no longer a secret. Discover how pressurized oxygen is reversing biological age and supercharging recovery.
                        </p>

                        {/* Video Placeholder */}
                        <div className="w-full max-w-4xl mx-auto aspect-video rounded-3xl glass overflow-hidden flex items-center justify-center relative border border-scientific-silver/20 shadow-2xl">
                            <div className="text-scientific-silver/40 flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-electric-blue flex items-center justify-center text-primary-navy">
                                    <ArrowRight className="w-8 h-8" />
                                </div>
                                <p className="font-display font-bold uppercase tracking-widest text-xs">AI Visualization Loading...</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Science Section */}
            <section className="py-24 px-4 bg-primary-light/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {sciencePoints.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 rounded-2xl glass border border-scientific-silver/5 hover:border-electric-blue/30 transition-all group"
                            >
                                <div className="mb-6 group-hover:scale-110 transition-transform">{point.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                                <p className="text-scientific-silver/60 leading-relaxed">{point.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Affiliate Table */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Verified Chambers</h2>
                        <p className="text-scientific-silver/60">Selected based on FDA compliance and cellular pressure delta metrics.</p>
                    </div>

                    <div className="overflow-x-auto rounded-3xl glass border border-scientific-silver/10">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-scientific-silver/10">
                                    <th className="px-8 py-6 text-scientific-silver/40 font-display text-sm uppercase">Product</th>
                                    <th className="px-8 py-6 text-scientific-silver/40 font-display text-sm uppercase">Price</th>
                                    <th className="px-8 py-6 text-scientific-silver/40 font-display text-sm uppercase">Rating</th>
                                    <th className="px-8 py-6 text-scientific-silver/40 font-display text-sm uppercase text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-scientific-silver/5">
                                {chambers.map((chamber, i) => (
                                    <tr key={i} className="hover:bg-scientific-silver/5 transition-colors group">
                                        <td className="px-8 py-6 font-bold">{chamber.name}</td>
                                        <td className="px-8 py-6 text-electric-blue font-bold">{chamber.price}</td>
                                        <td className="px-8 py-6 text-scientific-silver/60">{chamber.rating}</td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="bg-scientific-silver/10 hover:bg-electric-blue hover:text-primary-navy px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 ml-auto">
                                                Check Price <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Lead Capture */}
            <section className="py-24 px-4 bg-electric-blue/5">
                <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-[40px] border border-electric-blue/20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Download the Protocol</h2>
                    <p className="text-xl text-scientific-silver/60 mb-10">
                        Get our complete 45-page blueprint on Hyperbaric Optimization, including timing, pressure settings, and safety kits.
                    </p>

                    <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your research email..."
                            className="flex-1 bg-primary-navy border border-scientific-silver/20 rounded-full px-8 py-4 focus:outline-none focus:border-electric-blue transition-colors text-scientific-silver"
                            required
                        />
                        <button className="bg-electric-blue text-primary-navy font-bold px-10 py-4 rounded-full hover:bg-white transition-all shadow-xl flex items-center justify-center gap-2 whitespace-nowrap">
                            Unlock PDF <Download className="w-5 h-5" />
                        </button>
                    </form>

                    <p className="mt-8 text-xs text-scientific-silver/30 flex items-center justify-center gap-2">
                        <Check className="w-3 h-3 text-electric-blue" /> Your data is secured with Supabase encryption.
                    </p>
                </div>
            </section>

            {/* Legal Shield */}
            <footer className="py-12 px-4 border-t border-scientific-silver/10">
                <div className="max-w-7xl mx-auto text-center text-xs text-scientific-silver/40 uppercase tracking-[0.3em]">
                    <p className="mb-4">© 2026 Wow Is It Real Research Lab</p>
                    <p className="max-w-3xl mx-auto leading-loose">
                        Disclaimer: Educational purposes only. Not medical advice. Always consult with a licensed physician before starting any pressure-based biological protocol. Affiliate links help fund our deep-tissue research.
                    </p>
                </div>
            </footer>
        </div>
    );
}
