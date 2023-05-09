import asyncio
import certifi
import ssl
import aiohttp
from understat import Understat
import json


async def main():
    ssl_context = ssl.create_default_context(cafile=certifi.where())

    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=ssl_context)) as session:
        understat = Understat(session)
        leagues = ["epl", "la_liga", "ligue_1", "bundesliga", "serie_a"]

        all_players = {}

        for league in leagues:
            players = await understat.get_league_players(league, 2022)
            all_players[league] = players

        # Print the total number of players fetched
        total_players = sum(len(players) for players in all_players.values())
        print(f"Total players fetched: {total_players}")

        # print(json.dumps(all_players, indent=4, sort_keys=True))


        # print(json.dumps(filtered_players, indent=4, sort_keys=True))

        with open("data.json", "w") as outfile:
            json.dump(all_players, outfile)
loop = asyncio.get_event_loop()
loop.run_until_complete(main())

