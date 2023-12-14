import React, { useRef } from "react";
import * as d3 from "d3";

const LineChart: React.FC = () => {
  const lineChart = useRef<SVGSVGElement>(null);

  return (
    <svg
      className="d3-component"
      width="400"
      height="300"
      ref={lineChart}
    ></svg>
  );
};

export default LineChart;
