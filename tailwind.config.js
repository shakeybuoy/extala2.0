module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'one-primary': '#FB3D28',
      'gray-800': "#1F2937",
      'white': '#ffffff',
      'comp': '#28E6FB',

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["none"],
  },

}
