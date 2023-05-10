import { Scatter } from "react-chartjs-2"
import { Chart, registerables } from 'chart.js'
import styles from './ScatterGraph.module.css'
import Link from 'next/link'
import { processGraphType } from './processGraphType'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

Chart.register(...registerables)

/**
 * A scatter graph component that displays player statistics based on the selected graph type
 * 
 * @param {Object[]} players - Array of player objects containing statistical data
 * @param {String} graphType - Which graph to display
 * @returns 
 */
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


  const { processData, options } = processGraphType(graphType)


  Object.entries(playersByLeague).forEach(([league, leaguePlayers], index) => {
    data.datasets.push({
      label: league,
      data: leaguePlayers.map(processData),
      backgroundColor: colors[index],
      pointRadius: 3,
      pointHoverRadius: 7,
    })
  })

  return (
    <div>
      <Scatter data={data} options={options} />
      
      <div className={styles.grid} style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <Link href="/" className={styles.card}>
          <h3 className={inter.className} style={{ fontSize: 16 }} >Change graph &rarr;</h3>
        </Link>

        <a href="https://www.understat.com" className={styles.card}>
          <h3 className={inter.className} style={{ fontSize: 16 }} >Data from understat.com &rarr;</h3>
        </a>
      </div>
    </div>
  )
}