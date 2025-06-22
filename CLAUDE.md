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
- **Rule System**: `unocss/rules2/` - Updated rule definitions for UnoCSS
- **CDN Build**: `cdn/adorable-css@2.js` - Standalone browser version

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

# Deploy to npm
npm run deploy
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
- Uses **pnpm** as primary package manager
- Workspace configuration for monorepo structure

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
- **Branch**: Working on `v2` branch for next major release

### Migration Path
- V2 maintains compatibility with existing V1 syntax
- Adds UnoCSS ecosystem integration
- Eliminates conflicts with TailwindCSS