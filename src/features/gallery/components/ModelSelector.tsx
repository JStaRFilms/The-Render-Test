"use client";

import { Benchmark } from "../types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ModelSelectorProps {
    benchmarks: Benchmark[];
    selectedId: string;
    onSelect: (id: string) => void;
}

export default function ModelSelector({
    benchmarks,
    selectedId,
    onSelect,
}: ModelSelectorProps) {
    return (
        <aside className="w-80 h-screen glass-panel border-r flex flex-col p-6 overflow-y-auto">
            <div className="mb-10">
                <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-2">
                    Contenders
                </h2>
                <div className="h-px w-full bg-gradient-to-r from-accent/50 to-transparent" />
            </div>

            <nav className="space-y-4">
                {benchmarks.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        className={cn(
                            "w-full text-left p-4 rounded-lg transition-all duration-300 group relative overflow-hidden",
                            selectedId === item.id
                                ? "bg-accent/10 border-accent/30 border neon-border"
                                : "hover:bg-white/5 border border-transparent hover:border-white/10"
                        )}
                    >
                        {selectedId === item.id && (
                            <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
                        )}

                        <div className="relative z-10">
                            <span className={cn(
                                "text-xs font-mono uppercase tracking-tighter block mb-1",
                                selectedId === item.id ? "text-accent" : "text-zinc-500"
                            )}>
                                {item.category}
                            </span>
                            <h3 className={cn(
                                "font-bold transition-colors",
                                selectedId === item.id ? "text-white" : "text-zinc-400 group-hover:text-white"
                            )}>
                                {item.model}
                            </h3>
                        </div>

                        {/* Hover Glitch Effect Background (Subtle) */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                ))}
            </nav>

            <div className="mt-auto pt-10">
                <div className="glass-panel p-4 rounded-xl border-dashed border-zinc-700">
                    <p className="text-[10px] font-mono text-zinc-500 text-center leading-relaxed">
                        SYSTEM STATUS: <span className="text-accent">READY</span><br />
                        VERSION: 0.1.0-OMEGA
                    </p>
                </div>
            </div>
        </aside>
    );
}
