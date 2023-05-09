import { Scatter } from "react-chartjs-2"
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default function ScatterGraph({players}) {
  console.log(players)

  const data = {
    datasets: [],
  }

  const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]

    Object.entries(players).forEach(([league, leaguePlayers], index) => {
      data.datasets.push({
        label: league,
        data: leaguePlayers.map((player) => ({
          x: parseFloat(player["xA"]),
          y: parseFloat(player["xG"]),
        })),
        backgroundColor: colors[index],
        pointRadius: 3,
        pointHoverRadius: 5,
      })
    })
  
    const options = {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: {
            display: true,
            text: "Open Play xA",
          },
        },
        y: {
          type: "linear",
          title: {
            display: true,
            text: "xG",
          },
        },
      },
    }
  
  
  
    return <Scatter data={data} options={options} />
}
