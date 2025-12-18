"use client";

import { BenchmarkScores } from "../types";

interface ScoreViewProps {
    scores: BenchmarkScores;
    description: string;
}

export default function ScoreView({ scores, description }: ScoreViewProps) {
    const metrics = [
        { label: "Visual Beauty", value: scores.beauty, color: "text-accent" },
        { label: "Logic Coherence", value: scores.coherence, color: "text-accent-purple" },
        { label: "Technical Precision", value: scores.precision, color: "text-white" },
    ];

    return (
        <div className="w-full glass-panel rounded-2xl p-6 mt-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                    <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">
                        Analysis Report
                    </h2>
                    <p className="text-zinc-300 leading-relaxed font-light">
                        {description}
                    </p>
                </div>

                <div className="w-full md:w-80 space-y-4">
                    {metrics.map((metric) => (
                        <div key={metric.label}>
                            <div className="flex justify-between items-end mb-1.5">
                                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                                    {metric.label}
                                </span>
                                <span className={`text-sm font-bold font-mono ${metric.color}`}>
                                    {metric.value}/10
                                </span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-current transition-all duration-1000 ease-out ${metric.color}`}
                                    style={{ width: `${metric.value * 10}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
