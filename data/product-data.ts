import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Nigeria Cocoa",
    image: "/images/about-cocoa.jpg",
    description:
      "High-quality cocoa beans sourced directly from Nigerian farms, meeting international standards for chocolate and confectionery production.",
    locate: "Nigeria",
    features: [
      "Premium grade quality",
      "International compliance",
      "Direct farm sourcing",
      "Consistent supply chain",
    ],
    specification: [
      { title: "Moisture", value: "≤ 7.5%" },
      { title: "Fat Content", value: "≥ 50%" },
      { title: "pH Level", value: "5.3 - 5.8" },
      { title: "Origin", value: "West Africa" },
    ],
  },

  {
    id: 1,
    name: "Premium Canadian Wheat",
    image: "/images/about-wheat.jpg",
    description:
      "Premium wheat varieties from Canadian farms, perfect for milling, baking, and food processing applications worldwide.",
    locate: "Canada",
    features: [
      "Multiple wheat varieties",
      "Food-grade quality",
      "High protein content",
      "Reliable logistics",
    ],
    specification: [
      { title: "Protein", value: "≤ 11.5%" },
      { title: "Test Weight", value: "≥ 76kg/hl" },
      { title: "Moisture", value: "≤ 14.5%" },
      { title: "Origin", value: "Western Canada" },
    ],
  },
];
