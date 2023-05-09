import styles from './page.module.css'
import { getData } from "./data/get_data"
import ScatterGraph from './components/ScatterGraph'
import indexData from './data/index_data.js'
import usePlayers from './hooks/usePlayers'
import GraphComponent from './components/GraphComponent'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })



export default async function Home() {
/*<div className={styles.graph}>
        <GraphComponent />
      </div>*/

  return (
    <main className={styles.main}>
      <div className={styles.assignment}>
        <h1>Assignment WT2 - Big Data</h1>
      </div>
   
      <div className={styles.content}>
        <div className={styles.description}>
            <p className={styles.text}>European football data visualizations with player data from the top 5 leagues with at least 20 appearances this season:</p>
        </div>

        <div className={styles.grid}>
          <a href="https://www.understat.com" className={styles.card}>
            <h3 className={inter.className} >Expected goals (xG) and assists (xA) &nbsp; &nbsp; &rarr;</h3>
          </a>

          <a href="https://www.understat.com" className={styles.card}>
            <h3 className={inter.className} >Expected goals (xG) and assists (xA) &rarr;</h3>
          </a>
          
          <a href="https://www.understat.com" className={styles.card}>
            <h3 className={inter.className} >Expected goals (xG) and assists (xA) &rarr;</h3>
          </a>
          
          <a href="https://www.understat.com" className={styles.card}>
            <h3 className={inter.className} >Expected goals (xG) and assists (xA) &rarr;</h3>
          </a>
        </div>
      </div>

    
      
     
    </main>
  )
}
