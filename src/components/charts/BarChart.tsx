"use client";

import { MetricsType } from "@/features/dashboard/DashboardCharts/ChartsTypes";
import * as d3 from "d3";
import React from "react";

export default function BarChart({
  data,
  initialWidth = 600,
  initialHeight = 340,
}: {
  data: Array<MetricsType>;
  initialWidth?: number;
  initialHeight?: number;
}) {
  const svgRef = React.useRef(null);
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };

  React.useEffect(() => {
    // Guard clause for empty data
    if (data.length === 0) return;

    // Set up SVG and scales
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove(); // Clear previous contents

    const maxRevenue = d3.max(data, (d) => d.revenue) ?? 0;
    // Scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([margin.left, initialWidth - margin.right])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, maxRevenue])
      .range([initialHeight - margin.bottom, margin.top]);

    // Create bars
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.date) ?? 0)
      .attr("y", (d) => yScale(d.revenue))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => initialHeight - margin.bottom - yScale(d.revenue))
      .attr("fill", "#778873");

    // Create y-axis
    svg
      .append("g")
      .call(d3.axisLeft(yScale).ticks(5))
      .attr("transform", `translate(${margin.left},0)`);

    // Create x-axis
    svg
      .append("g")
      .call(d3.axisBottom(xScale).tickSizeOuter(0).ticks(6))
      .attr("transform", `translate(0,${initialHeight - margin.bottom})`);

    // X and Y Axis Labels
    svg
      .append("text")
      .attr("class", "text-xs ")
      .attr("x", initialWidth / 2)
      .attr("y", initialHeight)
      .text("Date");

    svg
      .append("text")
      .attr("class", "text-xs")
      .attr("transform", "rotate(-90)") // Rotates the text 90 degrees
      .attr("y", margin.left - 25) // Adjust Y position relative to left margin
      .attr("x", -(initialHeight / 2 + margin.top)) // Adjust X position (relative to rotated axis)
      .text("Revenue");
  }, [data]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${initialWidth} ${initialHeight}`}
      style={{ width: "100%", height: "100%" }}
    ></svg>
  );
}
