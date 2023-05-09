import { NextResponse } from 'next/server'
import { getData as getData } from '<component>/app/data/get_data'
import client from '<component>/app/data/elasticsearch'


export async function GET(req: Request, res: NextResponse) {
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
      size: 1800,
    })

    const searchResponseBody: any = searchResult
    const players = searchResponseBody.hits.hits.map((hit: any) => ({
      ...hit._source,
      league: hit._source.league.toLowerCase(),
    }))


    return NextResponse.json({ players: players }, { status: 200 })
  } catch (error) {
    console.error("Error fetching players:", error)
    return NextResponse.json({ message: "Error fetching players" }, { status: 500 })
  }
}
