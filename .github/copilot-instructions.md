# TinyShop Copilot Instructions

This is a Next.js 14 e-commerce demo app using the App Router and TypeScript.

## Coding Standards
- Use TypeScript for all files. No `any` types.
- Use Tailwind CSS for all styling. No inline styles or CSS modules.
- Use the App Router (`app/` directory). No `pages/` directory patterns.
- Prefer `async/await` over `.then()` chains.
- All data fetching functions live in `src/lib/api.ts`.
- All shared types live in `src/lib/types.ts`.

## Component Rules
- Use named exports for all components.
- Props interfaces should be defined inline above the component.
- Use `next/image` for all images and `next/link` for all internal links.

## Naming
- Files: kebab-case
- Components: PascalCase
- Functions: camelCase
- Constants: SCREAMING_SNAKE_CASE