# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fax Specialist (faxspecialist.com) is a personal consulting brand website targeting enterprise fax buyers. The site positions the consultant as THE expert with a track record (100K+ customers sold to eFax, 10K+ current customers) and generates leads via contact form (no pricing, no self-service).

## Tech Stack

- **Framework**: Astro (static site generator)
- **Styling**: Tailwind CSS
- **Content**: MDX for case studies and white papers
- **Content Management**: Astro Content Collections
- **Interactive Components**: React (optional, for contact form)
- **Forms**: Formspree or Netlify Forms
- **Deployment**: Railway

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## Design System

### Color Palette (Tailwind custom colors)
| Name        | Hex       | Usage                           |
|-------------|-----------|--------------------------------|
| obsidian    | #0F1419   | Primary text, headers, nav     |
| slate       | #1E2A3A   | Secondary backgrounds, cards   |
| ivory       | #FAFAF9   | Page background                |
| pearl       | #FFFFFF   | Cards, contrast sections       |
| brass       | #A8914A   | CTAs, links, key highlights    |
| brass-dark  | #8B7534   | Hover states                   |
| brass-light | #C4A95A   | Subtle accents                 |
| steel       | #64748B   | Secondary text, captions       |
| mist        | #E2E8F0   | Borders, dividers              |
| success     | #047857   | Confirmation states            |

### Typography
- **Headlines**: Fraunces (serif) - fallback: Georgia
- **Body**: Inter - fallback: system-ui, sans-serif
- **Mono**: JetBrains Mono (if needed)

### Design Principles
1. **Quiet Confidence** - Understated, not flashy
2. **Respect Their Time** - No filler, scannable content
3. **Substance Over Style** - Clean design that doesn't distract
4. **One Clear Path** - Every page leads to contact
5. **Human, Not Corporate** - Personal brand, warm but professional

## Site Structure

```
/                           # Home (hero + credibility + services + CTA)
/services/
  ├── on-premise            # On-Premise Solutions
  ├── cloud                 # Cloud Fax Solutions
  ├── hybrid-migration      # Hybrid & Migration
  └── automation            # Automation & Integration
/about                      # Personal story, philosophy, experience
/resources/
  ├── case-studies/         # Customer success stories (MDX)
  └── white-papers/         # Lead magnets (MDX)
/partners                   # Partner logos (etherfax, faxcore, rightfax, etc.)
/contact                    # Lead capture form
```

## Content Collections Schema

Case studies and white papers use Astro Content Collections with MDX. Each service page follows this structure:
- What it is
- Who it's for
- How I help
- Technologies I work with
- Certifications (HIPAA, SOC2)
- CTA to contact

## Reference Documents

The RTF files in this repository contain detailed specifications:
- `Site Structure.rtf` - Page-by-page content breakdown, folder structure, technical approach
- `Design System.rtf` - Full design system including colors, typography, spacing, components
