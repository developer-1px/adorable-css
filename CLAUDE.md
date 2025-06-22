# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AdorableCSS is a Figma-first CSS framework that provides a seamless design-code synchronization experience. The project is transitioning to v2.0 with a focus on UnoCSS integration and Figma Auto Layout compatibility.

## Key Architecture

### Multi-Package Structure
- **Root Project**: SvelteKit documentation site with demo pages
- **packages/vite/**: Core AdorableCSS v1 package with Vite plugin
- **packages/v2/**: Next generation AdorableCSS with UnoCSS integration
- **packages/figma-handshake/**: Figma plugin for design-code synchronization
- **examples/**: Integration examples for Next.js and Remix

### Core Components

#### V1 (packages/vite/)
- **Core Rules Engine**: `src/core/rules.ts` - Main CSS rule generation
- **Parser**: `src/core/atomizer.ts` - CSS class parsing logic
- **Value Makers**: `src/core/makeValue.ts` - CSS value generation utilities
- **Vite Plugin**: `src/vite/vite-plugin-adorable-css.ts` - Build integration

#### V2 (packages/v2/)
- **UnoCSS Integration**: `unocss/adorable-css-uno.ts` - UnoCSS preset configuration
- **New Parser**: `unocss/myparser/` - Enhanced parsing with formal grammar  
- **Rule System**: `unocss/rules.ts` and `unocss/rules/` - Updated rule definitions for UnoCSS
- **CDN Build**: `cdn/adorable-css@2.js` - Standalone browser version
- **Figma Plugin**: `../figma-handshake/` - Figma-to-code synchronization

## Common Development Commands

### Root Project (Documentation Site)
```bash
# Development server
npm run dev

# Build documentation site  
npm run build

# Deploy to GitHub Pages
npm run deploy

# Linting and type checking
npm run lint
npm run check

# Type checking in watch mode
npm run check:watch
```

### V1 Package (packages/vite/)
```bash
# Development with watch mode
npm run dev

# Build all packages
npm run build

# Build specific components
npm run build:vite    # Vite plugin
npm run build:cli     # CLI tool
npm run build:v2      # V2 CDN build

# Deploy to npm
npm run deploy
npm run deploy:beta   # Beta release
```

### V2 UnoCSS Package (packages/v2/unocss/)
```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### V2 CDN Package (packages/v2/cdn/)
```bash
# Development with watch mode
npm run dev
```

## Syntax and Features

### AdorableCSS Syntax
The framework uses a Figma-inspired syntax:
- `selector:prop(value)!` - Basic structure
- `400x300` - Fixed dimensions
- `16:9` - Aspect ratios
- `hbox(center)` - Horizontal auto layout
- `vbox(top)` - Vertical auto layout
- `x(center)`, `y(100)` - Constraints and positioning

### Parser Architecture
- **V1**: Custom atomizer in `packages/vite/src/core/atomizer.ts`
- **V2**: Formal grammar parser using Chevrotain in `packages/v2/unocss/myparser/`

## Testing and Quality

### Linting
- ESLint configuration in `eslint.config.js`
- Supports TypeScript, Svelte, and modern JavaScript
- Run with: `npm run lint`

### Type Checking
- TypeScript configuration in `tsconfig.json`
- Svelte type checking with: `npm run check`

## Build System

### Package Managers
- Uses **pnpm** as primary package manager (specified in package.json: "packageManager": "pnpm@10.7.1")
- Monorepo structure with independent packages
- No formal workspace configuration - packages managed independently

### Build Tools
- **tsup** for TypeScript compilation
- **Vite** for development and bundling
- **UnoCSS** for v2 CSS generation

## Integration Points

### UnoCSS Configuration
The project includes `uno.config.ts` that imports the AdorableCSS preset:
```typescript
import { adorableCSS } from './packages/v2/unocss/adorable-css-uno';
```

### Figma Integration
- Figma plugin code in `packages/figma-handshake/`
- Supports bidirectional synchronization between Figma and code
- Code generation utilities for both AdorableCSS and TailwindCSS

## Version Management

### Current State
- **V1**: Stable production version in `packages/vite/`
- **V2**: Active development in `packages/v2/` with UnoCSS integration
- **Branch**: Currently on `v2` branch (main development branch)
- **Main Branch**: `master` (for production releases and PR targets)
- **Homepage**: Now showcases v2 with modern Figma-first design

### Migration Path
- V2 maintains compatibility with existing V1 syntax
- Adds UnoCSS ecosystem integration
- Eliminates conflicts with TailwindCSS

## Testing

### V2 UnoCSS Tests  
The V2 package includes comprehensive test coverage using Vitest:
```bash
# Run v2 UnoCSS tests (from packages/v2/unocss/)
pnpm test

# Watch mode for development
pnpm test:watch

# Run with coverage
pnpm test:coverage
```

**Test Categories:**
- `adorable-uno.test.ts` - Core UnoCSS preset functionality
- `auto-layout.test.ts` - Figma Auto Layout features (hbox, vbox, pack)
- `size-dimensions.test.ts` - Sizing constraints (w, h, fixed dimensions)
- `spacing.test.ts` - Gap, padding, margin utilities
- `typography.test.ts` - Font, text styling, and alignment
- `position-constraints.test.ts` - X/Y positioning and constraints
- `effects.test.ts` - Visual effects (blur, shadow, etc.)
- `fill-stroke.test.ts` - Fill and stroke utilities
- `interactive-states.test.ts` - Hover, active, focus states
- `homepage.test.ts` - Homepage integration examples

### Homepage Integration
- Homepage rebuilt with v2 syntax demonstrating all features
- Reference page available at `/reference` with comprehensive class documentation
- Live examples and generated CSS output

## Key V2 Features

### Figma-First Syntax
- `hbox`, `vbox`, `pack` - Auto Layout containers
- `w(fill)`, `h(hug)` - Figma-like sizing constraints  
- `gap(16)` - Auto Layout spacing
- `gradient(#667eea/#764ba2)` - Modern gradient syntax
- `backdrop(10)` - Backdrop blur effects

### Enhanced Color System
- Full hex color support: `bg(#667eea)`, `c(#333)`
- Opacity support: `bg(#000/.5)` for rgba colors
- Gradient angles: `gradient(#ff0000/#00ff00/90)`

### Modern CSS Features
- `shadow(sm/md/lg/xl)` - Design system shadows
- `transition(.3s)` - Smooth animations
- `aspect(16/9)` - Aspect ratio constraints
- Interactive states: `hover:scale(1.05)`, `active:bg(#333)`

## Development Notes

### Parser Architecture
V2 uses a formal grammar parser built with Chevrotain in `packages/v2/unocss/myparser/` that provides better error handling and extensibility compared to the regex-based V1 parser. The new parser includes:
- `parseAdorableCSS.ts` - Main parsing logic
- `generateCSSFromAdorableCSS.ts` - CSS generation from parsed tokens
- `core.ts` - Core parser utilities

### UnoCSS Integration Points
- Main preset: `packages/v2/unocss/adorable-css-uno.ts`
- Rule definitions: `packages/v2/unocss/rules.ts` and `packages/v2/unocss/rules/`
- Value utilities: `packages/v2/unocss/values/makeValue.ts`

### CDN Distribution
V2 includes a standalone CDN build in `packages/v2/cdn/` that works without build tools, targeting modern browsers with ES2015+ support.