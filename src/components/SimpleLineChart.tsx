import React from "react";
import Plot from "react-plotly.js";

const SimpleLineChart: React.FC = () => {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "splines+markers",
          marker: { color: "red" },
        },
      ]}
      layout={{ width: 720, height: 440, title: "A Simple Line Chart" }}
    />
  );
};

export default SimpleLineChart;
