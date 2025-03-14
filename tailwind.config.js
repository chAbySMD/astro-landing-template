/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,svelte,astro}"],

  theme: {
    container: {
      center: true,
      padding: {
        md: "4rem",
        sm: "3rem",
        xs: "2rem",
      },
    },
    screens: {
      "2xl": { min: "1920px" }, // Десктопы
      xl: { max: "1439px" }, // Ноутбуки, маленькие десктопы
      lg: { max: "1279px" }, // Меньшие ноутбуки, планшеты в горизонтали
      md: { max: "1023px" }, // Планшеты
      sm: { max: "767px" }, // Большие телефоны, планшеты в портрете
      xs: { max: "479px" }, // Мобильные устройства
    },

    extend: {
      colors: {
        fg: "",
        "fg-muted": "",
        bg: "",
        muted: "",
        accent: "",
        secondary: "",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        // 18: "4.5rem",
      },
      borderRadius: {
        // xl: "1rem",
      },
      boxShadow: {
        // soft: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      transitionDuration: {
        fast: "0.1s",
        normal: "0.2s",
        slow: "0.3s",
      },
    },
  },
}
