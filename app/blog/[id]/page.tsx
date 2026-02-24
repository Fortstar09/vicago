import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import { Mail, MapPin, Share2 } from "lucide-react";

const page = ({ params }: { params: { id: string } }) => {
  // For no w we render the provided article for any id.
  return (
    <main className="min-h-screen  text-emerald-950">
      <article className="max-out relative px-6 pt-28 pb-20">
        <header className="space-y-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/blog/blog-1.jpg"
              alt="VICAGO Canada Origination"
              width={1600}
              height={900}
              className="w-full h-72 object-cover sm:h-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute left-6 bottom-6 text-white z-20">
              <h1 className="text-3xl sm:text-4xl font-normal max-w-4xl leading-tight">
                VICAGO GROUP EXPANDS INTO CANADA, COMMENCES ORIGINATION OF WHEAT
                AND SOYBEANS
              </h1>
              <p className="mt-2 text-sm sm:text-base opacity-90">
                18th February, 2026
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2 bg-vgreen/10 text-vgbrown px-3 py-1 rounded-full">
                <MapPin size={16} /> Canada
              </span>
              <span className="inline-flex items-center gap-2 bg-vgreen/10 text-vgbrown px-3 py-1 rounded-full">
                <Mail size={16} /> info@vicagogroup.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-vgreen text-white hover:bg-vgreen/80">
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>
        </header>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 prose prose-neutral max-w-none space-y-3 text-gray-500 text-sm leading-relaxed">
            <p>
              VICAGO Group, a trusted player in the global commodity trade
              ecosystem, has officially expanded its operations into Canada,
              marking a significant milestone in the company’s international
              growth strategy.
            </p>

            <p>
              With this expansion, VICAGO Group has commenced the origination of
              wheat and soybeans from Canada, strengthening its supply chain
              capabilities and reinforcing its position within global
              agricultural trade corridors.
            </p>

            <p>
              Canada is globally recognized as one of the world’s leading
              producers of high-quality wheat and soybeans. By establishing a
              presence in the Canadian market, VICAGO Group aims to enhance
              sourcing efficiency, ensure product quality consistency, and
              improve reliability for its institutional and industrial buyers
              across key markets.
            </p>

            <p>
              This strategic move reflects VICAGO’s broader commitment to
              building resilient, diversified supply chains in response to
              increasing volatility in global commodity markets. The expansion
              is part of a long-term vision to operate across major agricultural
              production hubs while maintaining strong distribution networks
              into emerging and high-demand markets.
            </p>

            <p>
              Expanding into Canada strengthens our ability to originate
              directly from one of the world’s most reputable grain-producing
              regions. It enhances supply security for our partners and
              reinforces our commitment to building dependable global trade
              infrastructure.
            </p>

            <h3 className="text-lg font-normal text-gray-600 my-4">
              The Canadian origination desk will focus primarily on:
            </h3>
            <ul className=" list-disc list-inside list-disc-green-100">
              <li>
                Wheat (various grades suitable for milling and industrial use).
              </li>
              <li>
                Soybeans (for food processing, feed, and industrial
                applications).
              </li>
            </ul>

            <p>
              VICAGO Group’s expansion aligns with its strategy of moving closer
              to source markets while maintaining strong trade relationships
              across Africa, the Middle East, and other global destinations.
            </p>

            <p>
              As global demand for food security and agricultural inputs
              continues to rise, the company is positioning itself to play a
              more active role in connecting surplus-producing regions with
              demand-driven markets.
            </p>

            <p>
              This development further signals VICAGO Group’s transition from
              regional trade facilitation to a more structured, multi-origin
              global commodity platform.
            </p>

            <div className="mt-8 p-6 bg-green-50 border border-vgreen rounded-lg">
              <h4 className="font-semibold text-lg">Partnership & contact</h4>
              <p className="mt-2">
                For partnership inquiries and institutional engagements,
                stakeholders may contact:
              </p>
              <p className="mt-3 font-medium">
                Email Address: info@vicagogroup.com
              </p>
              <p className="mt-1">
                Website:{" "}
                <a
                  href="https://www.vicagogroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.vicagogroup.com
                </a>
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-xl bg-green-50  hover-lift border border-vgreen">
              <h4 className="font-semibold text-lg">Our Offices</h4>
              <div className="mt-3 space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-medium">Nigeria (Head Office)</p>
                  <p className="text-xs">
                    333 Broad Street, Odode-Idanre, Ondo State, Nigeria
                  </p>
                </div>
                <div>
                  <p className="font-medium">Canadian Office</p>
                  <p className="text-xs">
                    556 Market Avenue, Toronto, Canada, M6B 0B1
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border hover-lift">
              <h4 className="font-semibold text-lg">Quick facts</h4>
              <ul className="mt-3 text-sm space-y-2 list-disc list-inside text-gray-700">
                <li>Origination: Wheat & Soybeans</li>
                <li>Start date: February 2026</li>
                <li>
                  Regions served: Africa, Middle East, Europe, North America
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default page;
