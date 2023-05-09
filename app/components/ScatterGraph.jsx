import { Scatter } from "react-chartjs-2"
import { Chart, registerables } from 'chart.js'
import styles from './ScatterGraph.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

Chart.register(...registerables)
export default function ScatterGraph({ players, graphType }) {
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

  const processGraphType = (player) => {
    switch (graphType) {
      case "xG-vs-xA": 
        return {
          processData: (player) => {
            return {
              x: parseFloat(player["xA"]),
              y: parseFloat(player["xG"]),
              player: player,
            }
          },
          options: {
            scales: {
              x: {
                type: "linear",
                position: "bottom",
                title: {
                  display: true,
                  text: "xA",
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
        }
        case "xG-vs-G":
          return {
            processData: (player) => {
              return {
                x: parseFloat(player["goals"]),
                y: parseFloat(player["xG"]),
                player: player,
              }
            },
            options: {
              scales: {
                x: {
                  type: "linear",
                  position: "bottom",
                  title: {
                    display: true,
                    text: "Goals",
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
                      return `${player.player_name}, Goals: ${player.goals}, xG: ${Math.round(player.xG * 100) / 100}`
                    },
                  },
                },
              },
            }
          }    
    case "xA-vs-A":
      return {
        processData: (player) => {
          return {
            x: parseFloat(player["assists"]),
            y: parseFloat(player["xA"]),
            player: player,
          }
        },
        options: {
          scales: {
            x: {
              type: "linear",
              position: "bottom",
              title: {
                display: true,
                text: "Assists",
              },
            },
            y: {
              type: "linear",
              title: {
                display: true,
                text: "xA",
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  const { datasetIndex, dataIndex } = context
                  const player = context.chart.data.datasets[datasetIndex].data[dataIndex].player
                  return `${player.player_name}, Assists: ${player.assists}, xA: ${Math.round(player.xA * 100) / 100}`
                },
              },
            },
          },
        }
      }
        case "KeyPass90-vs-xAp90":
          return {
            processData: (player) => {
              return {
                x: parseFloat(player["xA"]),
                y: parseFloat(player["xG"]),
                player: player,
              }
            },
            options: {
              scales: {
                x: {
                  type: "linear",
                  position: "bottom",
                  title: {
                    display: true,
                    text: "xA",
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
          }
      default:
        return {
          processData: (player) => {
            return {
              x: parseFloat(player["xA"]),
              y: parseFloat(player["xG"]),
              player: player,
            }
          },
          options: {
            scales: {
              x: {
                type: "linear",
                position: "bottom",
                title: {
                  display: true,
                  text: "xA",
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
        }
    }
 
  }

  const { processData, options } = processGraphType()


  Object.entries(playersByLeague).forEach(([league, leaguePlayers], index) => {
    data.datasets.push({
      label: league,
      data: leaguePlayers.map(processData),
      backgroundColor: colors[index],
      pointRadius: 3,
      pointHoverRadius: 5,
    })
  })

  return (
    <div>
      <Scatter data={data} options={options} />
        <div className={styles.grid}>
          <a href="https://www.understat.com" className={styles.card}>
            <h3 className={inter.className} style={{fontSize:16}} >Data from understat.com &rarr;</h3>
          </a>
        </div>
    </div>
  )
}