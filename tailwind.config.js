/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xm0:"12px",
      xm00:"13px",
      xm: "14px",
      sm1:"15px",
      sm: "18px",
      md: "22px",
      md1: "24px",
      lg: "32px",
    },

    spacing: {
      5: "5px",
      8: "8px",
      10: "10px",
      12: "12px",
      15: "15px",
      16: "16px",
      20: "20px",
      25: "20px",
      4: "4px",
      22: "22px",
      30: "30px",
      32: "32px",
      34: "34px",

      40: "40px",
      50: "50px",
      52: "52px",

      60: "60px",
      66: "66px",
      80: "80px",
      90: "90px",
      100: "100px",
    },
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
    },

    extend: {
      rotate180: {
        transform: 'rotate(180deg)',
      },
      backgroundImage: {
        "custom-gradient10":
          "linear-gradient(rgb(255, 240, 240) 0%, rgb(255, 251, 251) 34.9%, rgb(255, 251, 251) 77.6%, rgb(255, 240, 240) 100%)",
      },
      linearGradientColors: {
        custom: [
          "165.54deg",
          "rgb(20, 19, 51) -33.39%",
          "rgb(32, 34, 97) 15.89%",
          "rgb(84, 60, 151) 55.84%",
          "rgb(105, 57, 162) 74.96%",
        ],
        custom: [
          "rgb(255, 240, 240) 0%",
          "rgb(255, 251, 251) 34.9%",
          "rgb(255, 251, 251) 77.6%",
          "rgb(255, 240, 240) 100%",
        ],
      },
      backgroundColor: {
        rose: "rgb(255, 240, 240)",
      },
      zIndex: {
        80: 80,
      },

      fontFamily: {
        inter: ["Inter", "sans"],
      },

      boxShadow: {
        custom: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      },

      colors: {
        Gray: "#EAEFF7",
        lGray: " #D2D1F9",
        Purple: "#9974F6",
        darkPurple: "#454895",
        brown: "#3e317f",
        white: "#ffffff",
        disabled0: "#6c757d",
        Black: "#0F0F0F",
        Black1:"#333333",
        darkgray: "#747474",
        darkp: "#2D305F",
        Gold: "#FFD700",
        Gold2:" #836B53",
        grayborder: "#e0e0e0",
        whitebg:"#FFFFFFE6",
        bggray:"#F7F7F7",
        gray1:"#808080CC",
        graylight:"#747474",
        brown1:"#c9a673",
        textclr:"#F5F4F2",
        borderClr:"#dee2e6",
        textgray:"#3333334D",
        darkBrown:"#211753",
        lightPurple:'#6858b0',
        verylightPurple: '#d8d1f9'
      
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".gradient-custom": {
          background:
            "linear-gradient(165.54deg, rgb(20, 19, 51) -33.39%, rgb(32, 34, 97) 15.89%, rgb(84, 60, 151) 55.84%, rgb(105, 57, 162) 74.96%)",
        },
        ".gradient-custom1": {
          background:
            "linear-gradient(rgb(255, 240, 240) 0%, rgb(255, 251, 251) 34.9%, rgb(255, 251, 251) 77.6%, rgb(255, 240, 240) 100%)",
        },

        ".gradient-custom2": {
          background:
            "linear-gradient(rgb(255, 240, 240) 0%, rgb(255, 251, 251) 34.9%, rgb(255, 251, 251) 77.6%, rgb(255, 240, 240) 100%)",
        },
        ".gradient-custom3": {
          background:
            "linear-gradient(165.54deg, rgb(254 241 240) -33.39%, rgb(254 241 240) 15.89%, rgb(235 217 243) 55.84%, rgb(254 241 240) 74.96%);",
        },
        
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
