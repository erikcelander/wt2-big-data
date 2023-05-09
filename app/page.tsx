import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { getData } from "./data/get_data"
import ScatterGraph from './components/ScatterGraph'
import indexData from './data/index_data.js'
import usePlayers from './hooks/usePlayers'
import GraphComponent from './components/GraphComponent'


const inter = Inter({ subsets: ['latin'] })



export default async function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>Assignment WT2 - Big Data</h1>
        <p className={styles.text}>Expected goals and expected assists</p>
      </div>
      <div className={styles.graph}>
        <GraphComponent />
      </div>
      <div className={styles.grid}>
        <a href="https://www.understat.com" className={styles.card}>
          <h3 className={inter.className} style={{fontSize:16}} >Data from understat.com &rarr;</h3>
        </a>
      </div>
    </main>
  )
}
