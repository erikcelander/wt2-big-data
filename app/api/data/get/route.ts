import { NextResponse } from 'next/server'
import { getFilteredPlayers as getData } from '<component>/data/get_data'
export async function GET(req: Request, res: NextResponse) {
  try {
    const players = await getData()
    return NextResponse.json({ players: players }, {status: 200})
  } catch (error) {
    console.error('Error fetching players:', error)
    return NextResponse.json({ message: 'Error fetching players' }, {status: 500})
  }
}
