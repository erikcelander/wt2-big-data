import styles from './page.module.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })



export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.assignment}>
        <h1>Assignment WT2 - Big Data</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>
          <p>European football data visualizations with player data from the top 5 leagues with at least 20 appearances this season:</p>
        </div>

        <div className={styles.grid}>
      

          <Link href="/graphs/xG-vs-G" className={styles.card}>
            <h3 className={inter.className}>Expected goals (xG) vs goals (G)</h3>
            <h3>&rarr;</h3>
          </Link>

          <Link href="/graphs/xA-vs-A" className={styles.card}>
            <h3 className={inter.className}>Expected assists (xA) vs assists (A)</h3>
            <h3>&rarr;</h3>
          </Link>

          <Link href="/graphs/xG-vs-xA" className={styles.card}>
            <h3 className={inter.className}>Expected goals vs expected assists </h3>
            <h3>&rarr;</h3>
          </Link>

          <Link href="/graphs/KeyPass90-vs-xAp90" className={styles.card}>
            <h3 className={inter.className}>Key passes per 90 vs xA per 90</h3>
            <h3>&rarr;</h3>
          </Link>

          <Link href="/graphs/xGC-vs-GC" className={styles.card}>
            <h3 className={inter.className}>xGC (xG + xA) vs GC (G + A)</h3>
            <h3>&rarr;</h3>
          </Link>

          <Link href="/graphs/xGCp90-vs-GCp90" className={styles.card}>
            <h3 className={inter.className}>xGC per 90 vs GC per 90</h3>
            <h3>&rarr;</h3>
          </Link>

        </div>
      </div>




    </main>
  )
}
