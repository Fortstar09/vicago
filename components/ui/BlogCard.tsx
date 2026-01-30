import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

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
    <div className="space-y-2">
      <Image
        src={src}
        alt={title}
        width={400}
        height={500}
        className="h-80 w-full object-cover rounded-xl "
      />
      <h3 className="font-medium text-xl text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mb-5">{subTitle}</p>
      <Button title="View story" link="/" />
    </div>
  );
}
