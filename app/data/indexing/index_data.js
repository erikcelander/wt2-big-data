import client from "../elasticsearch.js"
import { getData } from "../get_data.js"

/**
 * Deletes all documents in the "players" index and reindexes the data from "data.json"
 * @returns {Promise<void>}
 */
export default async function indexData() {
  try {
    await client.deleteByQuery({
      index: "players",
      body: {
        query: {
          match_all: {}
        }
      }
    })

    const players = await getData()
    const body = []

    Object.entries(players).forEach(([league, leaguePlayers]) => {
      leaguePlayers.forEach((player) => {
        const playerWithLeague = { ...player, league }
        body.push({
          index: { _index: "players", _id: player.id },
        })
        body.push(playerWithLeague)
      })
    })

    await client.bulk({ refresh: true, body })

  } catch (error) {
    console.error('Error indexing data:', error)
  }
}
