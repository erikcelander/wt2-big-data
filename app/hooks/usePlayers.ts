'use client'
import { useEffect, useState } from 'react'

export default function usePlayers() {
  const [players, setPlayers] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data/get')
        if (!response.ok) {
          throw new Error('Failed to fetch filtered players')
        }
        const { players } = await response.json()
        setPlayers(players)

        const indexResponse = await fetch('/api/data/index')
        if (!indexResponse.ok) {
          throw new Error('Failed to index data')
        }

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
