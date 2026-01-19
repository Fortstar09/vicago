import { ArrowUpRight } from "lucide-react";

const Button = ({
  title,
  animationClass,
  link,
}: {
  title: string;
  animationClass?: string;
  link?: string;
}) => {
  return (
    <a
      href={link}
      className={`${animationClass} rounded-full border border-vgbrown px-3 py-2 text-sm font-semibold hover:text-white bg-vgbrown hover:bg-vgbrown/80 cursor-pointer`}
    >
      {title}
    </a>
  );
};

export default Button;
