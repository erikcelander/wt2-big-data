import { NextResponse } from 'next/server'
import client from '<component>/app/data/elasticsearch'

/**
 * Fetches players data from Elasticsearch.
 * 
 * @returns An array of players with player data as properties.
 */
export async function GET() {
  try {
    const searchResult = await client.search({
      index: "players",
      body: {
        query: {
          range: {
            games: {
              gte: 20
            }
          }
        },
      },
      size: 1500,
    })


    const players = searchResult.hits.hits.map((hit: any) => ({
      ...hit._source,
      league: hit._source.league.toLowerCase(),
    }))


    return NextResponse.json({ players: players }, { status: 200 })
  } catch (error) {
    console.error("Error fetching players:", error)
    return NextResponse.json({ message: "Error fetching players" }, { status: 500 })
  }
}
