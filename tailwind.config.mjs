/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#060816",
          900: "#0a1020",
          800: "#11182b"
        },
        accent: {
          DEFAULT: "#007fff",
          soft: "#4da6ff",
          deep: "#005fcc"
        },
        steel: "#8fa1c7"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0, 127, 255, 0.2), 0 16px 40px rgba(7, 10, 20, 0.4)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(143, 161, 199, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(143, 161, 199, 0.08) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"]
      }
    }
  },
  plugins: []
};
