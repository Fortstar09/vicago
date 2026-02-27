import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactSection from "@/components/otherpages/ContactSection";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vicago Group for commodity trading inquiries, partnership opportunities, or general questions. We're ready to connect you to global agricultural markets.",
  openGraph: {
    title: "Contact Us | Vicago Group",
    description:
      "Reach out for commodity sourcing, trading partnerships, or general inquiries.",
  },
  alternates: {
    canonical: "https://vicagogroup.com/contact",
  },
};

const page = () => {
  return (
    <>
      <ContactSection />
      <Footer />
    </>
  );
};

export default page;
