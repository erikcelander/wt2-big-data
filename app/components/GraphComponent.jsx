'use client'
import dynamic from 'next/dynamic'
import usePlayers from '../hooks/usePlayers'
import { Inter } from 'next/font/google'
import ScatterGraph from './ScatterGraph'
const inter = Inter({ subsets: ['latin'] })

//const DynamicScatterGraph = dynamic(() => import('./ScatterGraph'), { ssr: false })
export default function GraphComponent({ graphType }) {
  const { players, loading } = usePlayers()

  if (loading) {
    return <div className={inter.className}>Loading...</div>
  }

  return <ScatterGraph players={players} graphType={graphType} />
}

