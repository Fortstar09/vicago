import { StatBall } from "@/types";

export const stats: StatBall[] = [
  {
    id: "hectares",
    title: "81M+",
    subtitle: "Hectares Planted Areas",
    size: 260,
    position: {
      bottom: "220px",
      left: "5%",
    },
    textClassName: "text-7xl text-white/70 text-stroke",
    background: {
      type: "image",
      value: "/hero-bg.jpg",
    },
  },
  {
    id: "facilities",
    title: "17.6K+",
    subtitle: "Facilities",
    size: 200,
    position: {
      top: "160px",
      left: "30%",
    },
    textClassName: "text-5xl text-white/70 text-stroke",
    background: {
      type: "gradient",
      value: "radial-gradient(circle at top, #2f6b3f, #0b1f14)",
    },
  },
  {
    id: "traceability",
    title: "1.8K+",
    subtitle: "Units Traceability to Plantations",
    size: 160,
    position: {
      top: "160px",
      right: "8%",
    },
    textClassName: "text-4xl text-green-600",
    subTextClassName: "text-xs text-gray-600",
    background: {
      type: "color",
      value: "#fff",
    },
  },
  {
    id: "country",
    title: "20+",
    subtitle: "Country reached",
    size: 300,
    position: {
      bottom: "100px",
      right: "30%",
    },
    textClassName: "text-8xl text-green-800 font-bold",
    subTextClassName: "text-base font-bold text-white",

    background: {
      type: "image",
      value: "/value-bg.jpg",
    },
  },
];
