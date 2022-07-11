import "chart.js/auto";
import { Chart } from "react-chartjs-2";

function DoughnutChart() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "months",
        data: [12, 19, 20, 50, 23],
        backgroundColor: ["red", "blue", "yellow", "green", "purple"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="mt-5">
      <h1>DoughnutChart</h1>
      <Chart type="doughnut" data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
