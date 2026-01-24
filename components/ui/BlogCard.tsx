import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function BlogCard({
  title,
  subTitle,
  src = "/hero-bg.jpg",
}: {
  title: string;
  subTitle: string;
  src?: string;
}) {
  return (
    <div className="tc-card">
      <div className="relative overflow-hidden rounded-xl">
        <div className="clip-mask ">
          <Image
            src={src}
            alt={title}
            width={400}
            height={500}
            className="h-90 w-full object-cover"
          />
        </div>

        {/* Arrow */}
        <div className="absolute bottom-0 right-0">
          <div className="flex size-12 items-center justify-center rounded-full bg-vgbrown shadow">
            <ArrowUpRight size={28} strokeWidth={2.5} color="#fafafa" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-3">
        <h3 className="font-medium text-2xl text-gray-900">{title}</h3>
        <p className="text-base text-gray-500">{subTitle}</p>

        {/* Tags */}
        {/* <div className="flex gap-2 pt-2">
          <span className="rounded-xs border border-orange-300 bg-orange-100 px-2 py-0.5 text-xs text-orange-700">
            Branding
          </span>
          <span className="rounded-xs border border-green-300 bg-green-100 px-2 py-0.5 text-xs text-green-700">
            Packaging
          </span>
          <span className="rounded-xs border border-purple-300 bg-purple-100 px-2 py-0.5 text-xs text-purple-700">
            Marketing
          </span>
        </div> */}
      </div>
    </div>
  );
}
