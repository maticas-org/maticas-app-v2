import React from "react";
import Plot from "react-plotly.js";

interface PlotData {
  lon: number[];
  lat: number[];
  magnitude: number[]; // Determines bubble sizes
}

interface CountryBubblePlotProps {
  data: PlotData;
  country: string;
}

const CountryBubblePlot: React.FC<CountryBubblePlotProps> = ({
  data,
  country,
}) => {
  return (
    <Plot
      data={[
        {
          type: "scattergeo",
          //locationmode: "country names",
          //locations: [country],
          lon: data.lon,
          lat: data.lat,
          text: data.magnitude.map((mag) => `Magnitude: ${mag}`),
          marker: {
            size: data.magnitude,
            sizemode: "diameter",
            sizeref: 2,
            color: data.magnitude,
            colorscale: "Viridis",
            showscale: true,
          },
          mode: "markers",
          name: "Environmental Variable",
        },
      ]}
      layout={{
        geo: {
          scope: "south america",//`${country}`,
          projection: { type: "natural earth" },
          //center: { lat: 4.5709, lon: -74.2973 },
          showland: true,
          showlakes: true, 
          showrivers: true,
          showsubunits: true, 
          subunitcolor: "Blue",
          showcountries: true,
          countrycolor: "Black",
          resolution: 50,
          landcolor: "rgb(217, 217, 217)",
          //countrycolor: "rgb(204, 204, 204)",
        },
        width: 800,
        height: 600,
        title: `Environmental Variable Magnitude in ${country}`,
      }}
    />
  );
};

export default CountryBubblePlot;
