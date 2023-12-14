import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

type D3ChartProps = object;

const D3Chart: React.FC = ({ data }: D3ChartProps) => {
  const d3Container1 = useRef<SVGSVGElement>(null);
  const d3Container2 = useRef<SVGSVGElement>(null);
  const d3Container3 = useRef<SVGSVGElement>(null);

  useEffect(() => {
    function getGraphs(container: object, measure: string) {
      const svg = d3.select(container.current);
      svg.attr("width", 1500).attr("height", 400);
      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 35)
        .attr("y", (d, i) => 400 - 5 * d[measure])
        .attr("width", 30)
        .attr("height", (d, i) => d[measure] * 5)
        .attr("fill", "green");
      svg
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d[measure])
        .attr("x", (d, i) => i * 35)
        .attr("y", (d, i) => 400 - 5 * d[measure] - 3);
    }

    getGraphs(d3Container1, "intensity");
    getGraphs(d3Container2, "relevance");
    getGraphs(d3Container3, "likelihood");
  }, [data]);

  return (
    <>
      <svg
        className="d3-component"
        width="400"
        height="300"
        ref={d3Container1}
      ></svg>

      <svg
        className="d3-component"
        width="400"
        height="300"
        ref={d3Container2}
      ></svg>

      <svg
        className="d3-component"
        width="400"
        height="300"
        ref={d3Container3}
      ></svg>
    </>
  );
};

export default D3Chart;
