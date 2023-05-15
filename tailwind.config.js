/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xsm': { 'min': '0px', 'max': '576px' },

      'sm': { 'min': '577px', 'max': '767px' },

      'md': { 'min': '768px', 'max': '1023px' },

      'lg': { 'min': '1024px', 'max': '1279px' },

      'xl': { 'min': '1280px', 'max': '1535px' },

      '2xl': { 'min': '1536px' },
    },
    fontSize: {
      'custom-10': 'clamp(9px,0.5208333333333334vw,10px)',
      'custom-12': 'clamp(12px,0.625vw,12px)',
      'custom-14': 'clamp(12px,0.7291666666666666vw,14px)',
      'custom-16': 'clamp(13px,0.8333333333333334vw,16px)',
      'custom-18': 'clamp(16px,0.9375vw,18px)',
      'custom-20': 'clamp(18px,1.0416666666666667vw,20px)',
      'custom-22': 'clamp(18px,1.1458333333333333vw,22px)',
      'custom-24': 'clamp(20px,1.25vw,24px)',
      'custom-26': 'clamp(24px,1.3541666666666667vw,26px)',
      'custom-28': 'clamp(26px,1.4583333333333333vw,28px)',
      'custom-30': 'clamp(28px,1.5625vw,30px)',
      'custom-32': 'clamp(30px,1.6666666666666667vw,32px)',
      'custom-34': 'clamp(32px,1.7708333333333333vw,34px)',
      'custom-36': 'clamp(30px,1.875vw,36px)',
      'custom-38': 'clamp(36px,1.9791666666666667vw,38px)',
    }
  },
  plugins: [],
}