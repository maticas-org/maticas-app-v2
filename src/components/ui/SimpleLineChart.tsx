import React from "react";
import Plot from "react-plotly.js";

interface SimpleLineChartProps {
  data: { x: number[]; y: number[] };
  layout: {
    width: number;
    height: number;
    title: string;
    xaxis: { title: string };
    yaxis: { title: string };
  };
  mode: "lines" | "markers" | "lines+markers";
  marker: { color: string };
}

const SimpleLineChart: React.FC<SimpleLineChartProps> = ({
  data,
  layout,
  mode,
  marker,
}) => {
  return (
    <>
    <div className="centered-container">
    <Plot
      data={[
        {
          x: data.x,
          y: data.y,
          type: "scatter",
          mode: mode,
          marker: marker,
        },
      ]}
      layout={layout}
    />
    </div>
    <hr></hr>
    </>
  );
};

export default SimpleLineChart;
