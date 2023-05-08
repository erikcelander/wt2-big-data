'use client'
import usePlayers from '../hooks/usePlayers'
import ScatterGraph from './ScatterGraph'
import client from '../data/elasticsearch'
export default async function GraphComponent() {
  const { body } = await client.search({
    index: "players",
    size: 1000, // Adjust this value if you have more than 1000 records
    body: {
      query: {
        match_all: {},
      },
    },
  });

  const filteredPlayers = body.hits.hits.map((hit) => hit._source);

  return <ScatterGraph players={filteredPlayers} />;

}