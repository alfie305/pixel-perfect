import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Nunito", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'display-lg': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'mono-sm': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ink: "hsl(var(--ink))",
        paper: "hsl(var(--paper))",
        orange: {
          DEFAULT: "hsl(var(--orange))",
          dark: "hsl(var(--orange-dark))",
        },
        "gray-1": "hsl(var(--gray-1))",
        "gray-2": "hsl(var(--gray-2))",
        "text-body": "hsl(var(--text))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Claymorphism radii
        'clay': '24px',
        'clay-lg': '28px',
        'clay-sm': '20px',
      },
      boxShadow: {
        // Claymorphism shadows - optimized for light mode
        'clay': '8px 8px 16px rgba(0, 0, 0, 0.08), -8px -8px 16px rgba(255, 255, 255, 0.9), inset -1px -1px 2px rgba(0, 0, 0, 0.05), inset 1px 1px 2px rgba(255, 255, 255, 0.9)',
        'clay-sm': '4px 4px 8px rgba(0, 0, 0, 0.06), -4px -4px 8px rgba(255, 255, 255, 0.8), inset -1px -1px 1px rgba(0, 0, 0, 0.03), inset 1px 1px 1px rgba(255, 255, 255, 0.8)',
        'clay-hover': '10px 10px 20px rgba(0, 0, 0, 0.12), -10px -10px 20px rgba(255, 255, 255, 1), inset -1px -1px 2px rgba(0, 0, 0, 0.06), inset 1px 1px 2px rgba(255, 255, 255, 1)',
        'clay-pressed': '3px 3px 6px rgba(0, 0, 0, 0.2) inset, -3px -3px 6px rgba(0, 0, 0, 0.05) inset',
        'clay-button': '6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.7), inset -1px -1px 2px rgba(0, 0, 0, 0.1), inset 1px 1px 2px rgba(255, 255, 255, 0.3)',
        // Glow effects for brand color
        'glow-sm': '0 0 20px rgba(232, 153, 92, 0.3)',
        'glow-md': '0 0 40px rgba(232, 153, 92, 0.4)',
        'lift': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(232, 153, 92, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(232, 153, 92, 0.6)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
