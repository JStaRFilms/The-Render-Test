"use client";

import { } from "react";

interface LivePreviewProps {
    code: string;
}

export default function LivePreview({ code }: LivePreviewProps) {
    return (
        <div className="flex-1 h-full glass-panel rounded-2xl overflow-hidden relative group">
            {/* Decorative Border Glow */}
            <div className="absolute inset-0 border border-accent/20 rounded-2xl pointer-events-none group-focus-within:border-accent/50 transition-colors" />

            {/* HUD Elements */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono text-accent/80 uppercase tracking-widest">
                    Live Render Instance
                </span>
            </div>

            <iframe
                title="Live Preview"
                className="w-full h-full border-none bg-black"
                sandbox="allow-scripts allow-modals allow-pointer-lock allow-popups allow-same-origin"
                srcDoc={code}
            />

            {/* Grid Overlay (Subtle) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>
    );
}
