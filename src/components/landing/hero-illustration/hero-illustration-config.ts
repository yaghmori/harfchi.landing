/** Reference composite size (`public/brand/hero/final.webp`). */
export const HERO_ILLUSTRATION_CANVAS = {
  width: 1672,
  height: 941,
} as const;

export type HeroIllustrationMotion =
  | "enter"
  | "float"
  | "sway"
  | "pulse"
  | "bob"
  | "bounce"
  | "spin"
  | "spin-reverse"
  | "wiggle";


export type HeroIllustrationLayer = {
  id: string;
  src: string;
  alt: string;
  /** Native asset dimensions (px). */
  width: number;
  height: number;
  /** Top-left on the reference canvas (px). */
  x: number;
  y: number;
  zIndex: number;
  motion: HeroIllustrationMotion;
  /** Stagger for entrance (seconds). */
  delay?: number;
  /** Loop duration override (seconds). */
  duration?: number;
};

const hero = (file: string) => `/brand/hero/${file}`;

/**
 * Layer positions aligned to `final.webp` (see `scripts/detect-hero-positions.mjs`).
 * Paint order: back → front via `zIndex`.
 */
export const HERO_ILLUSTRATION_LAYERS: HeroIllustrationLayer[] = [
  {
    id: "pencil",
    src: hero("pencil.webp"),
    alt: "",
    width: 540,
    height: 500,
    x: 380,
    y: 480,
    zIndex: 100,
    motion: "float",
    delay: 0.05,
    duration: 5.5,
  },
  {
    id: "main",
    src: hero("main.webp"),
    alt: "صحنه بازی حرف چی",
    width: 1244,
    height: 988,
    x: 220,
    y: 2,
    zIndex: 10,
    motion: "enter",
    delay: 0,
  },
  {
    id: "flower",
    src: hero("flower.webp"),
    alt: "",
    width: 188,
    height: 254,
    x: 35,
    y: 621,
    zIndex: 20,
    motion: "sway",
    delay: 0.35,
    duration: 4.2,
  },
  {
    id: "friendly-game-sign",
    src: hero("friendly-game-sign.webp"),
    alt: "",
    width: 224,
    height: 222,
    x: 81,
    y: 352,
    zIndex: 25,
    motion: "bob",
    delay: 0.45,
    duration: 3.8,
  },
  {
    id: "classic-game-sign",
    src: hero("classic-game-sign.webp"),
    alt: "",
    width: 290,
    height: 286,
    x: 100,
    y: 156,
    zIndex: 26,
    motion: "bob",
    delay: 0.4,
    duration: 4.4,
  },
  {
    id: "trophy",
    src: hero("trophy.webp"),
    alt: "",
    width: 320,
    height: 433,
    x: 1405,
    y: 582,
    zIndex: 30,
    motion: "wiggle",
    delay: 0.5,
    duration: 6.2,
  },
  {
    id: "gift",
    src: hero("gift.webp"),
    alt: "",
    width: 280,
    height: 366,
    x: 1050,
    y: 600,
    zIndex: 35,
    motion: "float",
    delay: 0.55,
    duration: 4.6,
  },
  {
    id: "letter-ta",
    src: hero("ta.webp"),
    alt: "",
    width: 124,
    height: 124,
    x: -50,
    y: 331,
    zIndex: 40,
    motion: "float",
    delay: 0.6,
    duration: 3.4,
  },
  {
    id: "letter-gaf",
    src: hero("gaf.webp"),
    alt: "",
    width: 115,
    height: 108,
    x: -50,
    y: 504,
    zIndex: 41,
    motion: "float",
    delay: 0.72,
    duration: 3.9,
  },
  {
    id: "letter-sheen",
    src: hero("sheen.webp"),
    alt: "",
    width: 156,
    height: 151,
    x: 340,
    y: 8,
    zIndex: 42,
    motion: "float",
    delay: 0.65,
    duration: 3.6,
  },
  {
    id: "letter-pe",
    src: hero("pe.webp"),
    alt: "",
    width: 149,
    height: 150,
    x: 1250,
    y: 18,
    zIndex: 43,
    motion: "float",
    delay: 0.7,
    duration: 3.2,
  },
  {
    id: "letter-vav",
    src: hero("vav.webp"),
    alt: "",
    width: 124,
    height: 125,
    x: 1435,
    y: 405,
    zIndex: 44,
    motion: "float",
    delay: 0.78,
    duration: 3.7,
  },
  {
    id: "coin",
    src: hero("coin.webp"),
    alt: "",
    width: 151,
    height: 208,
    x: 1366,
    y: 187,
    zIndex: 50,
    motion: "bounce",
    delay: 0.85,
    duration: 2.8,
  },
  {
    id: "star",
    src: hero("star.webp"),
    alt: "",
    width: 55,
    height: 62,
    x: 1268,
    y: -150,
    zIndex: 55,
    motion: "pulse",
    delay: 0.9,
    duration: 2.2,
  },
];
