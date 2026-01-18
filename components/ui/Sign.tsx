import { forwardRef } from "react";

const Sign = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="126"
        height="22"
        viewBox="0 0 126 22"
        fill="none"
        ref={ref}
      >
        <path
          d="M15 19l-7-7 7-7"
          fill="none"
          stroke="#e3e4d8"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Sign.displayName = "Sign";

export default Sign;
