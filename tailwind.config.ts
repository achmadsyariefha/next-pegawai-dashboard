import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts, tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: "var(--color-brand)",
        "brand-foreground": "var(--color-brand-foreground)",
        sidebar: "var(--sidebar)",
        "sidebar-foreground": "var(--sidebar-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        "muted-hover": "var(--muted-hover)",
      },
    },
  },
};

export default config;