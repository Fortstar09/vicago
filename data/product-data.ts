import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Cocoa beans",
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
    id: 2,
    name: "Wheat – Canadian Western Amber Durum (CWAD)",
    image: "/images/about-wheat.jpg",
    description:
      "Premium Canadian durum, ideal for semolina production, pasta manufacturing and couscous",
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
  {
    id: 3,
    name: "Soybean",
    image:
      "https://i0.wp.com/www.agriculturenigeria.com/wp-content/uploads/2013/05/Soya-Bean-1.jpg",
    description:
      "Premium soybeans sourced from reliable Nigerian farms, ideal for oil extraction and protein production.",
    locate: "Nigeria",
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
  {
    id: 4,
    name: "Wheat – Canada Western Red Spring (CWRS)",
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
