/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          50: "#EEF2F8",
          100: "#D6E0EE",
          200: "#A6BBDB",
          300: "#6C8FC0",
          400: "#3A60A0",
          500: "#173E78",
          600: "#0F2D5C",
          700: "#0A2147",
          800: "#081A39",
          900: "#0A1F44",
          950: "#060F25",
        },
        flame: {
          50: "#FFF4E5",
          100: "#FFE3BD",
          200: "#FFC97A",
          300: "#FFAD42",
          400: "#FF9A1F",
          500: "#FF8A00",
          600: "#E67700",
          700: "#C26200",
          800: "#9C4E00",
          900: "#7A3D00",
        },
        ink: "#0E1521",
        mist: "#F4F6FA",
      },
      fontFamily: {
        display: ["'Poppins'", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["'Poppins'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        flame: "0 12px 32px -8px rgba(255, 138, 0, 0.45)",
        navy: "0 16px 40px -12px rgba(10, 31, 68, 0.5)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.04) rotate(-1deg)" },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        flicker: "flicker 3.2s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 5s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
