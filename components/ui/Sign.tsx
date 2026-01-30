import { forwardRef } from "react";

const Sign = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        // {...props}
        ref={ref}
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5004 6.79699C15.8164 1.11299 7.91642 -0.203015 3.85642 3.85699M3.85642 3.85699C-0.203575 7.91699 1.11442 15.815 6.79642 21.499M3.85642 3.85699C4.34642 6.30898 6.94443 11.647 13.4164 13.411M13.9224 35.077C18.0944 39.249 26.2144 37.897 32.0564 32.055C37.8964 26.213 39.2504 18.095 35.0764 13.921C32.5604 14.423 27.0684 17.093 25.2544 23.741C22.6644 33.241 16.9424 34.067 13.9204 35.075M13.9244 35.079C9.75243 30.905 11.1044 22.787 16.9464 16.945C22.7884 11.105 30.9064 9.75099 35.0804 13.925"
          stroke="#E3E4D8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Sign.displayName = "Sign";

export default Sign;
