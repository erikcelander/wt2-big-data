import indexData from '<component>/data/index_data'
import { NextResponse } from 'next/server'
export async function GET(req: Request, res: NextResponse) {
  try {
    await indexData()
    return NextResponse.json({ message: 'Data indexed successfully' }, {status: 200})
  } catch (error) {
    console.error('Error indexing data:', error)
    return NextResponse.json({ message: 'Error indexing data' }, {status: 500})
  }
}
