import { React } from "../hooks/CusModules";
import Chart from "react-apexcharts";
import { Box } from "../hooks/CusMaterialComponents";

function Dashboard() {
  const dashboardData1 = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
      },
    },
    series: [
      {
        name: "Users",
        data: [35, 50, 49, 60, 70, 91, 125],
      },
      //   {
      //     name: "Series 2",
      //     data: [25, 30, 40, 50, 55, 60, 70],
      //   },
      // Add more series as needed
    ],
  };

  const pieChartData = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      labels: ["Available", "Offer", "Most healthy", "Upcoming", "OutOfStock"],
    },
    series: [30, 40, 20, 10, 15],
  };

  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      <Box className="dashboard-div">
        <Chart
        className="chart-div"
          options={pieChartData.options}
          series={pieChartData.series}
          type="pie"
        //   width={500}
        //   height={320}
        />

        <Chart
          className="chart-div"
          options={dashboardData1.options}
          series={dashboardData1.series}
          type="area"
        //   width={500}
        //   height={320}
        />
      </Box>
    </div>
  );
}

export default Dashboard;
