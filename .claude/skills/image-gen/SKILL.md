---
name: image-gen
description: Use this skill when the user asks to generate images for a page, create page headers, or generate thumbnails. Automates image generation using Ollama and processing for the website.
---

# Image Generation

This skill automates the process of generating images for website pages using Ollama's image generation model, then processing them into the required sizes and formats.

## Overview

| Capability | Description |
|------------|-------------|
| Prompt generation | Deep analysis of page content to create descriptive prompts |
| Image generation | Uses `ollama run x/z-image-turbo` at 1200x900 |
| Smart cropping | Detects interesting portions for header slices |
| Multi-size output | Full, standard, header, and thumbnail sizes |

## When to Use This Skill

Use this skill when:
- User asks to "generate an image for this page"
- User wants to "create a header" for a post
- User needs thumbnails/teasers for content
- User mentions "image generation" or "ollama image"

## Image Pipeline

```
┌─────────────────┐
│  Generate       │  ollama run x/z-image-turbo --width 1200 --height 900 "prompt"
│  1200x900       │
└────────┬────────┘
         │
         ├──────────────────────────────────────┐
         │                                      │
         ▼                                      ▼
┌─────────────────┐                    ┌─────────────────┐
│  Full Image     │                    │  Standard       │
│  1200x900       │                    │  Resize to      │
│  (original)     │                    │  1024x768       │
└─────────────────┘                    └────────┬────────┘
                                                │
                        ┌───────────────────────┼───────────────────────┐
                        │                       │                       │
                        ▼                       ▼                       ▼
                ┌─────────────┐          ┌─────────────┐         ┌─────────────┐
                │  Header     │          │  Thumb      │         │  (optional) │
                │  Smart crop │          │  Resize to  │         │  og:image   │
                │  1024x200   │          │  800x600    │         │  1200x630   │
                └─────────────┘          └─────────────┘         └─────────────┘
```

## Process

### Step 1: Analyze Page

1. **Determine category** from file path:
   - `technology/_posts/...` → technology
   - `koken/_posts/...` → koken
   - `zeilen/_posts/...` → zeilen
   - `makes/_posts/...` → makes
   - `about/_posts/...` → about

2. **Extract filename** from post (without date prefix):
   - `2026-04-30-hello-agents.md` → `hello-agents`

3. **Deep analysis** of content:
   - Read front matter (title, tags, excerpt)
   - Read content body
   - Identify key themes, subjects, mood
   - Consider visual metaphors

### Step 2: Generate Prompt

Create a descriptive prompt for image generation:

**Prompt Structure:**
```
[Subject] + [Style/Mood] + [Composition] + [Technical]
```

**Example prompts:**
- "Abstract representation of AI agents collaborating, digital art style, vibrant colors, clean modern composition, minimalist"
- "Sailing boat at sunset, peaceful seascape, warm golden hour lighting, cinematic wide shot, photorealistic"
- "Kitchen scene with fresh ingredients, cooking preparation, natural lighting from window, food photography style"

**Prompt Guidelines:**
- Keep under 100 words
- Be specific but not restrictive
- Avoid text in images (model struggles with text)
- Include style keywords for consistency

### Step 3: Propose Prompt to User

Present the proposed prompt and ask for refinement:

```
Based on "[Title]", I propose this prompt:

"[Generated prompt]"

Would you like to:
1. Use this prompt
2. Refine the prompt
3. Provide your own prompt
```

### Step 4: Generate Image

Run the generation command:

```bash
ollama run x/z-image-turbo --width 1200 --height 900 "your prompt"
```

**Note:** The image will be saved to the current directory or a temp location. Capture this output.

### Step 5: Smart Crop Header

For the 1024x200 header, implement smart cropping:

1. **Analyze the image** using ImageMagick to detect:
   - Areas of high contrast (edges)
   - Color distribution
   - Potential faces/subjects (if detectable)

2. **Score horizontal slices** at different Y positions:
   - Each slice is 1024x200
   - Score based on content density and visual interest

3. **Present options to user**:
   - Show recommended crop position (top/middle/bottom percentage)
   - Allow user to specify exact position
   - Present a preview if possible

**ImageMagick crop commands:**
```bash
# Crop from top
convert input.png -crop 1024x200+0+0 output.png

# Crop from middle
convert input.png -crop 1024x200+0+350 output.png

# Crop from specific Y position
convert input.png -crop 1024x200+0+$Y_OFFSET output.png
```

### Step 6: Process All Sizes

Generate all required sizes:

```bash
# Full image (already generated)
cp generated.png category/images/full/filename.png

# Standard (resize to 1024x768)
magick generated.png -resize 1024x768 category/images/standard/filename.png

# Header (smart crop to 1024x200)
magick generated.png -crop 1024x200+0+$Y_OFFSET category/images/header/filename.png

# Thumbnail (resize to 800x600)
magick generated.png -resize 800x600 category/images/thumb/filename.png
```

### Step 6b: Create WebP Versions

The site uses WebP for better compression. Convert all PNG images:

```bash
# Convert all sizes to WebP at quality 90
cwebp -q 90 category/images/full/filename.png -o category/images/full/filename.webp
cwebp -q 90 category/images/header/filename.png -o category/images/header/filename.webp
cwebp -q 90 category/images/thumb/filename.png -o category/images/thumb/filename.webp
```

**WebP benefits:**
- ~85-90% smaller file sizes
- Better compression than PNG
- Supported by all modern browsers

### Step 7: Handle Existing Images

If images already exist, ask user:

```
Images already exist for this post. What would you like to do?

1. Replace - Overwrite existing images
2. Version - Keep old with timestamp suffix (e.g., filename-20260430.png)
3. Cancel - Stop without making changes
```

### Step 8: Update Front Matter (Optional)

Ask if user wants to update the page's front matter:

```yaml
header:
  teaser: /{category}/images/thumb/filename.png
  image: /{category}/images/header/filename.png
```

## Directory Structure

Each category follows this pattern:

```
{category}/
└── images/
    ├── full/      # Original 1200x900 (PNG + WebP)
    ├── header/    # Cropped 1024x200 (PNG + WebP)
    └── thumb/     # Resized 800x600 (PNG + WebP)
```

**Note:** Both PNG and WebP formats are generated for each size. WebP provides ~85-90% smaller file sizes.

**Note:** Not all categories may have this structure. Create directories if missing.

## Smart Crop Algorithm

The smart crop algorithm should:

1. **Convert to grayscale** for analysis
2. **Detect edges** using Sobel or Canny filter
3. **Calculate edge density** for each horizontal slice
4. **Weight toward center** to avoid extreme crops
5. **Bonus for faces** if face detection available

**Pseudo-algorithm:**
```
for each y in [0, 700] step 50:  # 15 possible slices
    slice = image[y:y+200]
    score = edge_density(slice) * 0.7
    score += center_preference(y) * 0.3
    if faces_detected(slice):
        score += 0.2
    scores.append((y, score))

best_y = max(scores, key=score)
return best_y
```

**Fallback:** If smart crop fails, default to cropping from 33% from top (y=350).

## Example Session

```
User: Generate an image for the Hello Agents article

Assistant: I'll analyze the page and generate an image.

[Reads technology/_posts/2026-04-30-hello-agents.md]

**Category:** technology
**Filename:** hello-agents
**Title:** Hello Agents
**Tags:** AI, agents, LLM

Based on the content about AI agents communicating and collaborating, I propose this prompt:

"Abstract network of AI agents connected by glowing data streams, digital art style, blue and purple color scheme, modern minimalist composition, clean geometric shapes"

Would you like to use this prompt, refine it, or provide your own?

User: Use it, but add "on dark background"

Assistant: Running image generation...

[Runs: ollama run x/z-image-turbo --width 1200 --height 900 "Abstract network of AI agents connected by glowing data streams, digital art style, blue and purple color scheme, modern minimalist composition, clean geometric shapes, on dark background"]

Image generated! Now analyzing for smart crop...

Recommended header crop: 35% from top (captures the main network visualization)

Would you like to:
1. Accept this crop
2. Specify a different position
3. Preview the crop

User: Accept

Assistant: Processing all sizes...

✓ Full: technology/images/full/hello-agents.png (1200x900)
✓ Standard: technology/images/standard/hello-agents.png (1024x768)
✓ Header: technology/images/header/hello-agents.png (1024x200)
✓ Thumb: technology/images/thumb/hello-agents.png (800x600)

Would you like to update the page's front matter with these image paths?

User: Yes

Assistant: Updated front matter in technology/_posts/2026-04-30-hello-agents.md
```

## Common Issues

| Issue | Solution |
|-------|----------|
| Ollama not running | Run `ollama serve` in a separate terminal |
| Model not found | Run `ollama pull x/z-image-turbo` |
| Category folder missing | Create with `mkdir -p {category}/images/{full,header,thumb}` |
| Image too dark/bright | Add lighting keywords to prompt |
| Unwanted text in image | Add "no text" to prompt (may help) |

## Dependencies

- **Ollama** with `x/z-image-turbo` model
- **ImageMagick** for image processing (use `magick` command in v7)
- **cwebp** for WebP conversion (part of webp package)
- **Python with PIL** (optional, for advanced smart crop)

## Related Skills

- `html-css` - For implementing image display on pages
- `jekyll` - For front matter and Jekyll-specific features