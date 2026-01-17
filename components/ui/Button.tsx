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
      className={`${animationClass} inline-flex justify-center items-center gap-1.5 rounded-full  bg-olive pl-3 pr-1.5 py-2 text-lg mt-4 font-normal text-snow cursor-pointer`}
    >
      {title}
      <span className="inline-flex justify-center items-center p-1.5 bg-black/75 rounded-full size-7">
        <ArrowUpRight color="#fafafa" size={18} />
      </span>
    </a>
  );
};

export default Button;
