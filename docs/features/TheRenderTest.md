# Feature: The Render Test Gallery

## Goal
To create a high-end, futuristic gallery that showcases and evaluates the visual and logical output of various LLMs.

## Components

### 1. ViewPort (The Stage)
- **Type:** Server component/Client wrapper.
- **Responsibility:** Renders the selected model's output using a sandboxed `<iframe>`.
- **Data Input:** Raw HTML/JS string.

### 2. Sidebar (The Selector)
- **Type:** Client side interactive navigation.
- **Responsibility:** Lists available benchmarks, categorized by model or theme.
- **UX:** Smooth transitions between selections.

### 3. Inspector (The Details)
- **Tab A: Live Preview:** The running code.
- **Tab B: Source Code:** Syntax-highlighted view of the raw code.
- **Tab C: Metrics:** Radar chart showing scores for Beauty, Coherence, and Precision.

## Data Flow
1. User selects a model from the **Sidebar**.
2. state (active benchmark) updates.
3. **ViewPort** receives the code string and injects it into the `srcDoc` of an `<iframe>`.
4. **Inspector** displays the metadata and code associated with the selected benchmark.

## Database / Schema (JSON)
```json
{
  "benchmarks": [
    {
      "id": "gemini-1-5-pro-fractal",
      "model": "Gemini 1.5 Pro",
      "category": "Fractal",
      "code": "...",
      "scores": {
        "beauty": 9,
        "coherence": 10,
        "precision": 8
      },
      "description": "Animated recursive fractal tree using SVG."
    }
  ]
}
```
## Next Steps
- **Model Contributions:** See [CONTRIBUTING_MODELS.md](../CONTRIBUTING_MODELS.md) for how to add new benchmarks.
