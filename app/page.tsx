
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { getFilteredPlayers } from "../data/get_data"
import ScatterGraph from './components/ScatterGraph'
import indexData  from '../data/index_data.js'
import usePlayers from './hooks/usePlayers'
import GraphComponent from './components/GraphComponent'


const inter = Inter({ subsets: ['latin'] })



export default async function Home() {



  return (
    <main className={styles.main}>
      <GraphComponent />
    </main>
  )
}

/*
export default async function Home() {
  const filteredPlayers = await getFilteredPlayers();

  await indexData()

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>Assignment WT2 - Big Data</h1>
        <p className={styles.text}>Stats</p>
      </div>
      <div style={{ width: "800px", height: "400px" }}>
        <ScatterGraph players={filteredPlayers} />
      </div>
      <div className={styles.grid}>
        <a href="https://www.understat.com" className={styles.card}>
          <h3>Data from understat.com &rarr;</h3>
        </a>
       </div>
    </main>

  )

}
*/