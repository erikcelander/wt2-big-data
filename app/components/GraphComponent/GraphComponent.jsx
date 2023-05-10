'use client'
import usePlayers from '../../hooks/usePlayers'
import { Inter } from 'next/font/google'
import ScatterGraph from '../ScatterGraph/ScatterGraph'
const inter = Inter({ subsets: ['latin'] })

/**
 * A component for displaying a scatter graph of xG and xA data for football players.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.graphType - The type of graph to display.
 * 
 * @return {JSX.Element} The rendered ScatterGraph component.
 */
export default function GraphComponent({ graphType }) {
  const { players, loading } = usePlayers()

  if (loading) {
    return <div className={inter.className}>Loading...</div>
  }

  return <ScatterGraph players={players} graphType={graphType} />
}
