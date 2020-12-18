import * as React from "react"
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"

export const COLORS = {
  black: "rgb(20,30,40)",
  white: "#fdfdfd",
  red: "#ea291e",
}

export const THEME_COLORS = {
  dark: {
    text: COLORS.white,
    background: COLORS.black,
    textOpposite: COLORS.black,
  },
  light: {
    text: COLORS.black,
    background: COLORS.white,
    textOpposite: COLORS.white,
  },
}

const BREAKPOINTS_SIZE = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1216px",
  xxl: "1440px",
}

export const BREAKPOINTS = {
  sm: `(min-width: ${BREAKPOINTS_SIZE.sm})`,
  md: `(min-width: ${BREAKPOINTS_SIZE.md})`,
  lg: `(min-width: ${BREAKPOINTS_SIZE.lg})`,
  xl: `(min-width: ${BREAKPOINTS_SIZE.xl})`,
  xxl: `(min-width: ${BREAKPOINTS_SIZE.xxl})`,
}

export const customEase = [0.6, 0.05, -0.01, 0.9]

export const imageCarousel = [
  { id: 1, src: "bukit-barisan" },
  { id: 2, src: "bukit-takuruang" },
  { id: 3, src: "istana-pagaruyung" },
  { id: 4, src: "jawi" },
  { id: 5, src: "jembatan-akar" },
  { id: 6, src: "mesjid-agung-sumbar" },
  { id: 7, src: "pacu-jawi-1" },
  { id: 8, src: "pacu-jawi-2" },
  { id: 9, src: "pacu-jawi-3" },
  { id: 10, src: "pacu-jawi-4" },
  { id: 11, src: "panorama-nyarai" },
  { id: 12, src: "pantai-nirwana" },
  { id: 13, src: "pembuat-cincin" },
  { id: 14, src: "tari-piring" },
]

export const socialMedia = [
  {
    name: "instagram",
    href: "https://instagram.com/travelsumatra",
    component: <Instagram />,
  },
  {
    name: "facebook",
    href: "https://facebook.com/travel-sumatra",
    component: <Facebook />,
  },
  {
    name: "instagram",
    href: "https://twitter.com/travel-sumatra",
    component: <Vimeo />,
  },
]
