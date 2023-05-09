import styles from './page.module.css'
import Link from 'next/link'
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
        <Link legacyBehavior href="/graphs/xG-vs-xA">
          <a className={styles.card}>
            <h3 className={inter.className}>Expected goals (xG) and assists (xA) &nbsp; &rarr;</h3>
          </a>
        </Link>

          <a href="/graphs/xGxA" className={styles.card}>
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
