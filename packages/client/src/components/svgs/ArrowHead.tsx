import React, { SVGProps } from "react";

interface ArrowHeadProps extends SVGProps<SVGSVGElement> {}

const ArrowHead: React.FC<ArrowHeadProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={200}
    height={200}
    fill="#fff"
    stroke="#fff"
    strokeWidth={0}
    viewBox="0 0 20.63 20.63"
    {...props}
  >
    <path
      stroke="none"
      d="m5.015 10.79 9.646 9.646c.13.133.302.197.471.197a.653.653 0 0 0 .473-.197l.013-.011a.65.65 0 0 0 .198-.473v-4.68a.661.661 0 0 0-.198-.475l-4.479-4.477 4.479-4.483a.658.658 0 0 0 .198-.473V.682a.671.671 0 0 0-.198-.474l-.013-.012A.659.659 0 0 0 15.132 0a.673.673 0 0 0-.471.196L5.015 9.845a.661.661 0 0 0 0 .945z"
    />
  </svg>
);

export default ArrowHead;
