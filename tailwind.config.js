// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      filter: {
        dull: "grayscale(50%) brightness(70%)",
      },
      fontFamily: {
        // sans: ["Inter", "sans-serif"],
      },
      colors: {
        codelime: "#dcff50",
        codeblack: "#0e0e0e",
        codelightlime: "#F5FFCB",
        codebutton: "#EAFF96",
        textcolor: "#a3a3a3",
        buttonhovercolor: "#393939",
      },
    },
  },
  plugins: [],
};
