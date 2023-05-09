import { Scatter } from "react-chartjs-2"
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)
export default function ScatterGraph({ players }) {
  const data = {
    datasets: [],
  }

  const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]

  const playersByLeague = players.reduce((acc, player) => {
    if (!acc[player.league]) {
      acc[player.league] = []
    }
    acc[player.league].push(player)
    return acc
  }, {})

  Object.entries(playersByLeague).forEach(([league, leaguePlayers], index) => {
    data.datasets.push({
      label: league,
      data: leaguePlayers.map((player) => ({
        x: parseFloat(player["xA"]),
        y: parseFloat(player["xG"]),
        player: player,
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
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const { datasetIndex, dataIndex } = context

            const player = context.chart.data.datasets[datasetIndex].data[dataIndex].player
            return `${player.player_name}, xG: ${Math.round(player.xG * 100) / 100}, xA: ${Math.round(player.xA * 100) / 100}`
          },
        },
      },
    },
  }

  return <Scatter data={data} options={options} />
}