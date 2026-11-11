import type { Config } from "tailwindcss";
export default {
 content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
 theme: { extend: { colors: { ink:"#18323a", teal:"#137d71", sand:"#f3f0e8" } } },
 plugins: []
} satisfies Config;
