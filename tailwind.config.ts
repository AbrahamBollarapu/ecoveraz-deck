import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        surface: "#F6F7F9",
        ink: "#0B1220",
        sub: "rgba(11,18,32,0.68)",
        line: "rgba(11,18,32,0.10)",
        evz: {
          green: "#0A7C72",
          blue: "#1A365D",
          orange: "#DD6B20",
          charcoal: "#121212"
        },
        good: "#0A7C72",
        warn: "#DD6B20",
        bad: "#E53E3E"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular"]
      },
      boxShadow: {
        card: "0 10px 28px rgba(0,0,0,0.10)",
        soft: "0 6px 18px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
export default config;
