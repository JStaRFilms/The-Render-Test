"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeViewProps {
    code: string;
}

export default function CodeView({ code }: CodeViewProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex-1 h-full glass-panel rounded-2xl overflow-hidden flex flex-col relative group">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                    </div>
                    <span className="ml-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        Source Logic
                    </span>
                </div>

                <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors text-zinc-400 hover:text-accent group/btn"
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
            </div>

            <div className="flex-1 overflow-auto bg-black p-6">
                <pre className="font-mono text-sm text-zinc-300 leading-relaxed scrollbar-thin scrollbar-thumb-zinc-800">
                    <code>{code}</code>
                </pre>
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[size:100%_2px,3px_100%]" />
        </div>
    );
}
