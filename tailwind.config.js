/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      serif: ['Georgia', 'Times New Roman', 'serif'],
      darleston: ['"Darleston"', 'cursive'],
    },
    colors: {
      pink: '#FFC0CB',
      white: '#FFFFFF',
    },
  },
};
export const plugins = [];

