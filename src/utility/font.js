// utils/fonts.js
import localFont from 'next/font/local'

export const oneSans = localFont({
  src: '../assets/fonts/AROneSans-VariableFont_ARRR,wght.woff2',
  display: 'swap',
  variable: '--font-openSans',
  weight: '400 500', // Only 400 and 500 weights as per your Google Fonts import
  style: 'normal',
  adjustFontFallback: 'Arial',
})

export const urban = localFont({
  src: '../assets/fonts/Urbanist-VariableFont_wght.woff2',
  display: 'swap',
  variable: '--font-urban',
  weight: '600 900', // Only 600-900 weights as per your import
  style: 'normal',
  adjustFontFallback: 'Arial',
})

export const jakarta = localFont({
  src: '../assets/fonts/PlusJakartaSans-VariableFont_wght.woff2',
  display: 'swap',
  variable: '--font-jakarta',
  weight: '400 700', // Only 400-700 weights as per your import
  style: 'normal',
  adjustFontFallback: 'Arial',
})