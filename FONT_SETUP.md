# Brand Font Implementation Guide

## Overview
This website uses two brand fonts:
- **Richmond** - For headings (h1, h2, h3, h4, h5, h6)
- **Effra** - For body content and general text

## Current Setup
The website is configured to use brand fonts with fallbacks:
- **Richmond** → Playfair Display → Georgia → serif
- **Effra** → Inter → system-ui → sans-serif

## How to Add Your Brand Fonts

### 1. Font File Requirements
Place your font files in `/public/fonts/` directory:

```
public/fonts/
├── Richmond-Regular.woff2
├── Richmond-Regular.woff
├── Richmond-Bold.woff2
├── Richmond-Bold.woff
├── Effra-Regular.woff2
├── Effra-Regular.woff
├── Effra-Medium.woff2
├── Effra-Medium.woff
├── Effra-Bold.woff2
└── Effra-Bold.woff
```

### 2. Update CSS Font Declarations
Replace the fallback font declarations in `src/app/globals.css`:

```css
/* Richmond font for headings */
@font-face {
  font-family: 'Richmond';
  src: url('/fonts/Richmond-Regular.woff2') format('woff2'),
       url('/fonts/Richmond-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Richmond';
  src: url('/fonts/Richmond-Bold.woff2') format('woff2'),
       url('/fonts/Richmond-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Effra font for content */
@font-face {
  font-family: 'Effra';
  src: url('/fonts/Effra-Regular.woff2') format('woff2'),
       url('/fonts/Effra-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Effra';
  src: url('/fonts/Effra-Medium.woff2') format('woff2'),
       url('/fonts/Effra-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Effra';
  src: url('/fonts/Effra-Bold.woff2') format('woff2'),
       url('/fonts/Effra-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Usage in Components

### Headings (Richmond Font)
```jsx
// Automatic - all h1-h6 elements use Richmond
<h1 className="text-4xl font-bold">Main Heading</h1>
<h2 className="text-2xl font-semibold">Sub Heading</h2>

// Manual override
<div className="font-heading text-3xl">Custom Heading</div>
```

### Body Content (Effra Font)
```jsx
// Automatic - all body text uses Effra
<p className="text-base">Regular paragraph text</p>
<span className="text-sm">Small text</span>

// Manual override
<div className="font-sans text-lg">Custom content</div>
```

### Font Classes Available
- `font-heading` - Richmond font family
- `font-sans` - Effra font family (default)
- `font-mono` - Monospace font

## Font Weights
- **Richmond**: 400 (Regular), 700 (Bold)
- **Effra**: 400 (Regular), 500 (Medium), 700 (Bold)

## Performance Optimization
- Font files use `font-display: swap` for better loading performance
- WOFF2 format for modern browsers, WOFF for fallback
- Fonts are preloaded and optimized for web use

## Testing
1. Check that headings use Richmond font
2. Verify body text uses Effra font
3. Test fallback fonts work when brand fonts are not loaded
4. Ensure fonts load properly on all devices

## Maintenance
- Keep font files updated in `/public/fonts/`
- Monitor font loading performance
- Update font declarations when new weights/styles are added 