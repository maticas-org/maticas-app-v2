import SimpleLineChart from "../components/ui/SimpleLineChart";
import MultipleVariableChart from "../components/ui/MultipleVariableChart";
import CountryBubblePlot from "../components/ui/CountryBubblePlot";

const Analytics: React.FC = () => {
  const plotData = {
    lon: [4.600695, 4.699775], // Example longitude coordinates
    lat: [-74.073885, -74.143885], // Example latitude coordinates
    magnitude: [10, 20], // Example magnitudes for bubble sizes
  };

  return (
    <>
      <div>
        <h1>Analytics</h1>
        <MultipleVariableChart
          dataSeries={[
            {
              x: [1, 2, 3, 4], // Example x-axis values (time)
              y: [20, 21, 19, 22], // Example y-axis values for temperature
              name: "Temperature",
              mode: "lines+markers",
              marker: { color: "red" },
            },
            {
              x: [1, 2, 3, 4], // Same x-axis values for aligned data points
              y: [45, 55, 50, 60], // Example y-axis values for humidity
              name: "Humidity",
              mode: "lines+markers",
              marker: { color: "blue" },
            },
          ]}
          layout={{
            width: 700,
            height: 400,
            title: "Temperature and Humidity Over Time",
          }}
        />
        <SimpleLineChart
          data={{
            x: [1, 2, 3, 4], // Example x-axis values (time)
            y: [20, 21, 19, 22], // Example y-axis values
          }}
          layout={{
            width: 700,
            height: 400,
            title: "Temperature Over Time",
            xaxis: { title: "Time" },
            yaxis: { title: "Temperature (°C)" },
          }}
          mode="lines+markers"
          marker={{ color: "red" }}
        />
      </div>
      <div>
        <CountryBubblePlot data={plotData} country="COL" />
      </div>
    </>
  );
};

export default Analytics;
