# Decisions

- Allow esbuild, sharp, and unrs-resolver build scripts via `pnpm-workspace.yaml` `allowBuilds: true` so Next.js, image optimization, and the unrs resolver can compile native binaries locally.
- Social media icons come from `react-icons/fa6` (Font Awesome 6) rather than hand-written SVGs.
- Never remove the blog feature (routes, MDX pipeline, navbar). Only delete or replace post files in `content/`.

