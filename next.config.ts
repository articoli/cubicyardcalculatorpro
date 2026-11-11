import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";
import { execFileSync } from "node:child_process";

/**
 * Cloudflare Pages builds this project with "npx next build", bypassing npm
 * lifecycle scripts. Prepare static featured images before Next copies /public
 * into the static "out" export for either invocation path.
 */
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default function getConfig(phase: string): NextConfig {
  if (phase === PHASE_PRODUCTION_BUILD) {
    execFileSync(process.execPath, ["scripts/prepare-featured-images.mjs"], {
      cwd: process.cwd(),
      stdio: "inherit",
    });
  }
  return config;
}
