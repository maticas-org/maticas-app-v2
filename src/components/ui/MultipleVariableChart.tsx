import React from "react";
import Plot from "react-plotly.js";

import '../../App.css';
import MultipleVariableChartOptions from "./MultipleVariableChartOptions";

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
    paper_bgcolor: 'rgba(255,255,255,0.6)', // Sets the background color of the plotting area with transparency
    plot_bgcolor: 'rgba(255,255,255,0.1)', // Sets the background color inside the plot with transparency
  };

  return (
    <>
    <MultipleVariableChartOptions/>
    <div className="centered-container">
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
    </div>
    <hr></hr>
    </>
  );
};

export default MultipleVariableChart;
