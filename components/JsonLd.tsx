export default function JsonLd({
  data,
}: {
  data: Record<string, unknown>;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization schema for the homepage */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vicago Group",
  url: "https://vicagogroup.com",
  logo: "https://vicagogroup.com/logo.png",
  description:
    "Leading agricultural commodity trading company with 45+ years of operational history. We source, finance, and trade premium Nigerian cocoa and Canadian wheat.",
  foundingDate: "1980",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Nigeria",
    },
    {
      "@type": "Country",
      name: "Canada",
    },
  ],
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://vicagogroup.com/contact",
  },
};

/** WebPage schema for sub-pages */
export function webPageSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Vicago Group",
      url: "https://vicagogroup.com",
    },
  };
}
