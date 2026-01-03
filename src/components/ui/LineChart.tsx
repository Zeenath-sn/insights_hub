"use client";

import { MetricsType } from "@/types/metrics";
import * as d3 from "d3";
import React from "react";

export default function LineChart({
  data,
  initialWidth = 600,
  initialHeight = 340,
}: {
  data: Array<MetricsType>;
  initialWidth?: number;
  initialHeight?: number;
}) {
  const convertStringToDate = (dateString: string) => {
    return new Date(dateString);
  };
  const svgRef = React.useRef<SVGSVGElement | null>(null);
  React.useEffect(() => {
    if (data.length === 0) return;
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const dates = data.map((d: MetricsType) => convertStringToDate(d.date));
    const minDate = d3.min(dates);
    const maxDate = d3.max(dates);
    if (!minDate || !maxDate) return;

    const x = d3
      .scaleTime()
      .domain([minDate, maxDate])
      .range([margin.left, initialWidth - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d: MetricsType) => d.activeUsers) ?? 0])
      .nice()
      .range([initialHeight - margin.bottom, margin.top]);

    const line = d3
      .line<MetricsType>()
      .x((d: MetricsType) => x(convertStringToDate(d.date)))
      .y((d: MetricsType) => y(d.activeUsers));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#778873")
      .attr("stroke-width", 1.5)
      .attr("d", line(data) ?? null);

    svg
      .append("g")
      .call(d3.axisLeft(y).ticks(5))
      .attr("transform", `translate(${margin.left},0)`);

    svg
      .append("g")
      .call(d3.axisBottom(x).tickSizeOuter(0).ticks(6))
      .attr("transform", `translate(0,${initialHeight - margin.bottom})`);

    svg
      .append("text")
      .attr("class", "text-xs ")
      .attr("x", initialWidth / 2)
      .attr("y", initialHeight)
      .text("Date");

    svg
      .append("text")
      .attr("class", "text-xs") // Optional: for styling
      .attr("transform", "rotate(-90)") // Rotates the text 90 degrees
      .attr("y", margin.left - 25) // Adjust Y position relative to left margin
      .attr("x", -(initialHeight / 2 + margin.top)) // Adjust X position (relative to rotated axis)
      .text("Active users"); // The actual title
  }, [data]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${initialWidth} ${initialHeight}`}
      style={{ width: "100%", height: "100%" }}
    ></svg>
  );
}
