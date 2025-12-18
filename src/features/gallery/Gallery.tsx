"use client";

import { useState } from "react";
import { BenchmarkData, Benchmark } from "./types";
import ModelSelector from "./components/ModelSelector";
import LivePreview from "./components/LivePreview";
import CodeView from "./components/CodeView";
import ScoreView from "./components/ScoreView";

interface GalleryProps {
    data: BenchmarkData;
}

export default function Gallery({ data }: GalleryProps) {
    const [selectedId, setSelectedId] = useState(data.benchmarks[0]?.id || "");
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

    const selectedBenchmark = data.benchmarks.find((b: Benchmark) => b.id === selectedId);

    if (!selectedBenchmark) {
        return <div className="p-20 text-accent font-mono">CRITICAL ERROR: NO BENCHMARKS LOADED</div>;
    }

    return (
        <div className="flex h-screen bg-background overflow-hidden">
            <ModelSelector
                benchmarks={data.benchmarks}
                selectedId={selectedId}
                onSelect={(id) => setSelectedId(id)}
            />

            <main className="flex-1 flex flex-col p-8 overflow-y-auto">
                <header className="mb-8 flex items-end justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
                            {selectedBenchmark.model}
                        </h1>
                        <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                            <span>Instance: {selectedBenchmark.id}</span>
                            <span className="w-1 h-1 rounded-full bg-zinc-700" />
                            <span>Category: {selectedBenchmark.category}</span>
                        </div>
                    </div>

                    <div className="flex gap-1 glass-panel p-1 rounded-xl">
                        <button
                            onClick={() => setActiveTab("preview")}
                            className={`px-6 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${activeTab === "preview"
                                ? "bg-accent text-black font-bold"
                                : "text-zinc-500 hover:text-white"
                                }`}
                        >
                            Live Preview
                        </button>
                        <button
                            onClick={() => setActiveTab("code")}
                            className={`px-6 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${activeTab === "code"
                                ? "bg-accent text-black font-bold"
                                : "text-zinc-500 hover:text-white"
                                }`}
                        >
                            Source Code
                        </button>
                    </div>
                </header>

                <div className="flex-1 min-h-0 flex flex-col">
                    {activeTab === "preview" ? (
                        <LivePreview code={selectedBenchmark.code} />
                    ) : (
                        <CodeView code={selectedBenchmark.code} />
                    )}

                    <ScoreView
                        scores={selectedBenchmark.scores}
                        description={selectedBenchmark.description}
                    />
                </div>
            </main>
        </div>
    );
}
