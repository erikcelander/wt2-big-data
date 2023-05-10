'use client'
import { useEffect, useState } from 'react'

/**
 * A custom React Hook that fetches and indexes player data from an API endpoint.
 * @returns {Object} An object with `players` and `loading` properties.
 */
export default function usePlayers() {
  const [players, setPlayers] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data/get')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const { players } = await response.json()
        setPlayers(players)

    

      } catch (error) {
        console.error('Error fetching and indexing data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { players, loading }
}
