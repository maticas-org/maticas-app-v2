import React from "react";
import Plot from "react-plotly.js";

interface DataSeries {
  x: number[]; // Assuming 'x' is always time
  y: number[];
  name: string; // Name of the series, e.g., "Temperature", "Humidity"
  type?: string;
  mode: "lines" | "markers" | "lines+markers";
  marker: { color: string };
}

interface MultipleVariableChartProps {
  dataSeries: DataSeries[];
  layout: {
    width: number;
    height: number;
    title: string;
  };
}

const MultipleVariableChart: React.FC<MultipleVariableChartProps> = ({
  dataSeries,
  layout,
}) => {
  // Adjusting the layout to potentially include more configuration for multiple data series
  const adjustedLayout = {
    ...layout,
    xaxis: {
      title: "Time",
    },
    yaxis: {
      title: "Arbitrary Units",
    },
  };

  return (
    <Plot
      data={dataSeries.map((series) => ({
        x: series.x,
        y: series.y,
        name: series.name,
        type: series.type || "scatter",
        mode: series.mode,
        marker: series.marker,
      }))}
      layout={adjustedLayout}
    />
  );
};

export default MultipleVariableChart;
