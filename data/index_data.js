import client from "./elasticsearch.js"
import { getFilteredPlayers } from "./get_data.js"


export default async function indexData() {
  try {
    const players = await getFilteredPlayers()
    const body = []

    Object.entries(players).forEach(([league, leaguePlayers]) => {
      leaguePlayers.forEach((player) => {
        body.push({
          index: { _index: "players", _id: player.id },
        })
        body.push(player)
      })
    })

    await client.bulk({ refresh: true, body })

  } catch (error) {
    console.error('Error indexing data:', error)
  }

}

