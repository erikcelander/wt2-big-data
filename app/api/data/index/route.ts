import indexData from '<component>/app/data/indexing/index_data'
import { NextResponse } from 'next/server'

/**
 *
 * Indexes data and returns a JSON response indicating success or failure
 * @throws {Error} - Throws an error if there's an issue indexing data
 */
export async function GET() {
  try {
    await indexData()
    return NextResponse.json({ message: 'Data indexed successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error indexing data:', error)
    return NextResponse.json({ message: 'Error indexing data' }, { status: 500 })
  }
}