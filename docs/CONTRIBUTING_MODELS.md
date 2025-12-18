# Adding New Models to The Render Test

This guide provides instructions for integrating new LLM-generated code into the Render Test gallery.

## 1. Code Preparation
New benchmarks must be self-contained SPAs (single HTML files) that include all necessary CSS and JS.

- **Naming Convention:** `index-[model-id].html` (e.g., `index-gpt4o.html`).
- **Dependencies:** No external CDN dependencies unless absolutely necessary. Vanilla JS and raw SVG/Canvas are preferred to showcase pure model capability.
- **Interactivity:** Ensure the code is responsive and handles window resizing.

## 2. Data Integration
Update `src/data/benchmarks.json` to include the new entry.

```json
{
  "benchmarks": [
    ...
    {
      "id": "model-id",
      "model": "Display Name",
      "category": "Visual Category",
      "code": "FULL_HTML_STRING",
      "scores": {
        "beauty": 0-10,
        "coherence": 0-10,
        "precision": 0-10
      },
      "description": "Short description of the output."
    }
  ]
}
```

> [!TIP]
> Use a script to read the HTML file content and escape it into the JSON string to avoid manual formatting errors.

## 3. Git Workflow (VibeCode Standard)
To keep the main branch clean:
1. Create a new branch for the model: `git checkout -b model-[id]`.
2. Commit the `index-[id].html` to the root of that branch.
3. Use the consolidation script/tool to merge that content into the `main` branch's `benchmarks.json`.

## 4. Verification
After adding a model:
- Verify the sidebar entry appears.
- Test the "Live Preview" for rendering correctness.
- Check "Source Code" to ensure the full source is visible.
- Ensure internal navigation within the model's SPA doesn't break the parent gallery navigation.
