import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>Assignment WT2 - Big Data</h1>
        <p className={styles.text}>Stats</p>
      </div>
      <div>
      
      </div>
      <div className={styles.grid}>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.card}>
          <h3>Data from understat.com &rarr;</h3>
        </a>
       </div>
    </main>
  )
}
