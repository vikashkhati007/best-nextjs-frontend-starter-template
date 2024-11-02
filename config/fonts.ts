import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from 'next/font/local';

// Define your font configuration
export const myFont = localFont({
  src: [
    {
      path: '../public/fonts/Ginto-400.woff', // Path to your WOFF file
      weight: '400', // Normal weight
      style: 'normal', // Normal style
    },
  ],
  variable: '--my-custom-font', // CSS variable for use in styles
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
