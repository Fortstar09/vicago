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
      className={`${animationClass} inline-flex justify-center items-center gap-1.5 rounded-full  bg-lime-400 px-3.5 py-2 text-base mt-4 font-semibold text-black cursor-pointer`}
    >
      {title}
      <span className="inline-flex justify-center items-center p-1 bg-black rounded-full size-7">
        <ArrowUpRight color="oklch(84.1% 0.238 128.85)" size={20} />
      </span>
    </a>
  );
};

export default Button;
