import { useEffect, useRef } from "react";
import * as d3 from "d3";

const GroupedBar = ({ data }: { data: object[] }) => {
  const d3Container = useRef(null);

  const n = 3;
  const m = data?.length || 0;
  const width = 1500;
  const height = 400;
  const margin = { top: 0, right: 0, bottom: 10, left: 0 };

  const bumps = () => [
    data.map((e) => e?.intensity || 0),
    data.map((e) => e?.relevance || 0),
    data.map((e) => e?.likelihood || 0),
  ];

  const xz = d3.range(m);
  const yz = bumps();
  const yMax = d3.max(yz, (y) => d3.max(y));

  const y01z = d3
    .stack()
    .keys(d3.range(n))(d3.transpose(yz)) // stacked yz
    .map((data, i) => data.map(([y0, y1]) => [y0, y1, i]));

  const y1Max = d3.max(y01z, (y) => d3.max(y, (d) => d[1]));

  const x = d3
    .scaleBand()
    .domain(xz)
    .rangeRound([margin.left, width - margin.right])
    .padding(0.08);
  const y = d3
    .scaleLinear()
    .domain([0, y1Max])
    .range([height - margin.bottom, margin.top]);
  const z = d3.scaleSequential(d3.interpolateBlues).domain([-0.5 * n, 1.5 * n]);

  const xAxis = (svg) =>
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(
        d3
          .axisBottom(x)
          .tickSizeOuter(0)
          .tickFormat(() => "")
      );

  useEffect(() => {
    const svg = d3.select(d3Container.current);
    svg.attr("width", 1500).attr("height", 400);

    const rect = svg
      .selectAll("g")
      .data(y01z)
      .join("g")
      .attr("fill", (d, i) => z(i))
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", height - margin.bottom)
      .attr("width", x.bandwidth())
      .attr("height", 0);

    svg.append("g").call(xAxis);

    y.domain([0, yMax]);

    rect
      .transition()
      .duration(500)
      .delay((d, i) => i * 20)
      .attr("x", (d, i) => x(i) + (x.bandwidth() / n) * d[2])
      .attr("width", x.bandwidth() / n)
      .transition()
      .attr("y", (d) => y(d[1] - d[0]))
      .attr("height", (d) => y(0) - y(d[1] - d[0]));
  }, [data]);

  return (
    <>
      <svg
        className="d3-component"
        width="400"
        height="300"
        ref={d3Container}
      ></svg>
    </>
  );
};

export default GroupedBar;
