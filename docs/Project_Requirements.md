# Project_Requirements: The Render Test

## Overview
"The Render Test" is a professional portfolio project designed to evaluate and showcase LLM-generated code outputs. It serves as an "Arena" or "Gallery" where mini-websites (Vanilla JS/SVG/Canvas) produced by different models are hosted side-by-side for comparison.

## Core Objectives
- **Comparison:** Provide a unified interface to view outputs from models like Gemini 1.5 Pro, Claude 3.5 Sonnet, GPT-4o, and DeepSeek V3.
- **Isolation:** Run model-generated code in a sandboxed environment to prevent global variable collisions and security risks.
- **Evaluation:** Include scoring metrics (Beauty, Coherence, Precision) for each model's output.
- **Source Transparency:** Enable easy viewing of the raw code behind each render.

## Functional Requirements
- **Sidebar Selector:** List available model benchmarks.
- **Sandboxed Viewport:** Use `<iframe>` to render the model's output.
- **Code Viewer:** Highlighted code blocks for source inspection.
- **Score Visualization:** Visual breakdown (e.g., Radar Chart) of the benchmark results.
- **Responsive Design:** Futuristic, dark-mode UI that adapts to different screen sizes.

## Technical Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Futuristic/Premium aesthetic)
- **Components:** React Server Components (RSC) by default.
- **Data:** Local JSON `benchmarks.json` as the source of truth for model responses.
- **Deployment:** Vercel.

## Design Inspiration
- **Aesthetic:** J Star Studios (sexy, enticing, futuristic).
- **Theme:** Dark mode, neon accents, glassmorphism, monospace typography.
