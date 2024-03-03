import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        one: {
          100: "#FF0465",
          200: "#FF0101",
        },
        two: {
          100: "#344468",
          200: "#FFC700",
        },
        three: {
          100: "#293504",
          200: "#FF4B30",
        },
        four: {
          100: "#FF7F00",
          200: "#FF7F00",
        },
        five: {
          100: "#DA121F",
          200: "#FF0030",
        },
        six: {
          100: "#00614C",
          200: "#FE007A",
        },
        seven: {
          100: "#B20160",
          200: "#FF0000",
        },
        eight: {
          100: "#004A53",
          200: "#00E0FF",
        },
        nine: {
          100: "#3E1575",
          200: "#FF0355",
        },
        ten: {
          100: "#CA486A",
          200: "#FF0000",
        },
      },
      fontFamily: {
        meander: "Meander",
        lostar: "Lostar",
        hipnouma: "Hipnouma"
      },
    },
  },
  plugins: [],
};
export default config;
