import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { getFilteredPlayers } from "../data_fetching/get_players"


const inter = Inter({ subsets: ['latin'] })


export default async function Home() {
  const filteredPlayers = await getFilteredPlayers();
  //console.log(filteredPlayers)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>Assignment WT2 - Big Data</h1>
        <p className={styles.text}>Stats</p>
      </div>
      <div>
      
      </div>
      <div className={styles.grid}>
        <a href="https://www.understat.com" className={styles.card}>
          <h3>Data from understat.com &rarr;</h3>
        </a>
       </div>
    </main>
  )
}
