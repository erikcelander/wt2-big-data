/**
 * Processes a given graph type and returns the corresponding data processing and options for the ScatterGraph component.
 * @param {string} graphType - The type of scatter graph to process.
 */
export const processGraphType = (graphType: string) => {
  switch (graphType) {
    case "xG-vs-xA":
      return {
        processData: (player: any) => {
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
                label: (context: any) => {
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
        processData: (player: any) => {
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
                label: (context: any) => {
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
        processData: (player: any) => {
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
                label: (context: any) => {
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
        processData: (player: any) => {
          const keyPassesPer90 = (parseFloat(player["key_passes"]) / parseFloat(player["time"])) * 90
          const xAp90 = (parseFloat(player["xA"]) / parseFloat(player["time"])) * 90
          return {
            x: keyPassesPer90,
            y: xAp90,
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
                text: "Key Passes per 90",
              },
            },
            y: {
              type: "linear",
              title: {
                display: true,
                text: "xA per 90",
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context: any) => {
                  const { datasetIndex, dataIndex } = context
                  const player = context.chart.data.datasets[datasetIndex].data[dataIndex].player
                  const keyPassesPer90 = (parseFloat(player.key_passes) / parseFloat(player.time)) * 90
                  const xAp90 = (parseFloat(player.xA) / parseFloat(player.time)) * 90
                  return `${player.player_name}, Key Passes per 90: ${Math.round(keyPassesPer90 * 100) / 100}, xA per 90: ${Math.round(xAp90 * 100) / 100}`
                },
              },
            },
          },
        }
      }
    case "xGC-vs-xGCp90":
      return {
        processData: (player: any) => {
          const xG = parseFloat(player["xG"])
          const xA = parseFloat(player["xA"])
          const xGC = xG + xA
          const time = parseFloat(player["time"])
          const xGp90 = xG / time * 90
          const xAp90 = xA / time * 90
          const xGCp90 = xGp90 + xAp90
          return {
            x: xGC,
            y: xGCp90,
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
                text: "Expected Goal Contributions (xG + xA)",
              },
            },
            y: {
              type: "linear",
              title: {
                display: true,
                text: "Expected Goal Contributions per 90 (xGp90 + xAp90)",
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context: any) => {
                  const { datasetIndex, dataIndex } = context
                  const player = context.chart.data.datasets[datasetIndex].data[dataIndex].player
                  const xG = parseFloat(player.xG)
                  const xA = parseFloat(player.xA)
                  const xGC = xG + xA
                  const time = parseFloat(player.time)
                  const xGp90 = xG / time * 90
                  const xAp90 = xA / time * 90
                  const xGCp90 = xGp90 + xAp90
                  return `${player.player_name}, xGC: ${Math.round(xGC * 100) / 100}, xGCp90: ${Math.round(xGCp90 * 100) / 100}`
                },
              },
            },
          },
        }
      }
    case "xGC-vs-GC":
      return {
        processData: (player: any) => {
          const xG = parseFloat(player["xG"])
          const xA = parseFloat(player["xA"])
          const xGC = xG + xA
          const goals = parseInt(player["goals"])
          const assists = parseInt(player["assists"])
          const GC = goals + assists
          return {
            x: xGC,
            y: GC,
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
                text: "Expected Goal Contributions (xG + xA)",
              },
            },
            y: {
              type: "linear",
              title: {
                display: true,
                text: "Goal Contributions (Goals + Assists)",
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context: any) => {
                  const { datasetIndex, dataIndex } = context
                  const player = context.chart.data.datasets[datasetIndex].data[dataIndex].player
                  const xG = parseFloat(player.xG)
                  const xA = parseFloat(player.xA)
                  const xGC = xG + xA
                  const goals = parseInt(player.goals)
                  const assists = parseInt(player.assists)
                  const GC = goals + assists
                  return `${player.player_name}, xGC: ${Math.round(xGC * 100) / 100}, GC: ${GC}`
                },
              },
            },
          },
        }
      }
    case "xGCp90-vs-GCp90":
      return {
        processData: (player: any) => {
          const xG = parseFloat(player["xG"])
          const xA = parseFloat(player["xA"])
          const time = parseFloat(player["time"])
          const xGp90 = xG / time * 90
          const xAp90 = xA / time * 90
          const xGCp90 = xGp90 + xAp90
          const goals = parseInt(player["goals"])
          const assists = parseInt(player["assists"])
          const Gp90 = goals / time * 90
          const Ap90 = assists / time * 90
          const GCp90 = Gp90 + Ap90
          return {
            x: xGCp90,
            y: GCp90,
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
                text: "Expected Goal Contributions per 90 (xGp90 + xAp90)",
              },
            },
            y: {
              type: "linear",
              title: {
                display: true,
                text: "Goal Contributions per 90 (Gp90 + Ap90)",
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context: any) => {
                  const { datasetIndex, dataIndex } = context
                  const player = context.chart.data.datasets[datasetIndex].data[dataIndex].player
                  const xG = parseFloat(player.xG)
                  const xA = parseFloat(player.xA)
                  const time = parseFloat(player.time)
                  const xGp90 = xG / time * 90

                  const xAp90 = xA / time * 90
                  const xGCp90 = xGp90 + xAp90
                  const goals = parseInt(player.goals)
                  const assists = parseInt(player.assists)
                  const Gp90 = goals / time * 90
                  const Ap90 = assists / time * 90
                  const GCp90 = Gp90 + Ap90
                  return `${player.player_name}, xGCp90: ${Math.round(xGCp90 * 100) / 100}, GCp90: ${Math.round(GCp90 * 100) / 100}`
                },
              },
            },
          },
        }
      }
    default:
      return {
        processData: (player: any) => {
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
                label: (context: any) => {
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
