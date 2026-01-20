"use client";

import Link from 'next/link';
import { Menu, X, Shield } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 glass border-b border-scientific-silver/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <Shield className="w-8 h-8 text-electric-blue" />
                        <span className="font-display text-xl font-bold tracking-tighter text-scientific-silver">
                            WOW<span className="text-electric-blue">ISIT</span>REAL
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="text-scientific-silver/70 hover:text-electric-blue px-3 py-2 transition-colors">Home</Link>
                            <Link href="/tool" className="text-scientific-silver/70 hover:text-electric-blue px-3 py-2 transition-colors">Scam Calculator</Link>
                            <Link href="/tools" className="text-scientific-silver/70 hover:text-electric-blue px-3 py-2 transition-colors">Verified Tools</Link>
                            <Link
                                href="/tool"
                                className="bg-electric-blue text-primary-navy font-bold px-6 py-2 rounded-full hover:bg-white transition-all shadow-lg hover:shadow-electric-blue/20"
                            >
                                Test a Tool
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-scientific-silver">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden glass border-b border-scientific-silver/10 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block text-scientific-silver/70 hover:text-electric-blue px-3 py-4">Home</Link>
                        <Link href="/tool" className="block text-scientific-silver/70 hover:text-electric-blue px-3 py-4">Scam Calculator</Link>
                        <Link href="/tools" className="block text-scientific-silver/70 hover:text-electric-blue px-3 py-4">Verified Tools</Link>
                        <Link href="/tool" className="block text-electric-blue font-bold px-3 py-4 border-t border-scientific-silver/10">Test a Tool</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
