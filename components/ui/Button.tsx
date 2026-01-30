import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Button = ({
  title,
  animationClass,
  link,
}: {
  title: string;
  animationClass?: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className={`${animationClass} rounded-full border border-vgbrown px-3 py-2 text-sm font-semibold text-white bg-vgbrown hover:bg-vgbrown/80 cursor-pointer`}
    >
      {title}
    </Link>
  );
};

export default Button;
