import { StatBall } from "@/types";

export const stats: StatBall[] = [
  {
    id: "hectares",
    title: "81M+",
    subtitle: "Hectares Planted Areas",
    size: 270,
    position: {
      bottom: "220px",
      left: "4%",
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
    size: 300,
    position: {
      top: "40%",
      left: "35%",
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
    size: 360,
    position: {
      bottom: "50px",
      right: "3%",
    },
    textClassName: "text-8xl text-green-600",
    subTextClassName: "text-sm text-gray-600",
    background: {
      type: "color",
      value: "#fff",
    },
  },
];
