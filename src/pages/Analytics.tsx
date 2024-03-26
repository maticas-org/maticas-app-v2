import Background                   from "../components/common/Background";
import CountryBubblePlot            from "../components/ui/CountryBubblePlot";
import MultipleVariableChart        from "../components/ui/MultipleVariableChart";

const Analytics: React.FC = () => {
  const plotData = {
    lon: [-74.073885, -74.143885], // Example longitude coordinates
    lat: [4.600695, 4.699775], // Example latitude coordinates
    magnitude: [100, 200], // Example magnitudes for bubble sizes
  };


  return (
    <>
      <Background>
      <div>
        <h1 className="centered-container" style={{ marginTop: "20px", marginBottom : "50px" }}>
          Analytics
        </h1>
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
            width : window.innerWidth * 0.95,
            height : window.outerHeight * 0.4,
            title: "Temperature and Humidity Over Time",
          }}
        />

        <MultipleVariableChart
          dataSeries={[
            {
              x: [1, 2, 3, 4], // Example x-axis values (time)
              y: [20, 21, 19, 22], // Example y-axis values for temperature
              name: "Temperature",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{
            width : window.innerWidth * 0.95,
            height : window.outerHeight * 0.4,
            title: "Temperature Over Time",
          }}
        />
      </div>
      <div>
        <CountryBubblePlot data={plotData} country="COL" />
      </div>
      </Background>      
    </>
  );
};

export default Analytics;
