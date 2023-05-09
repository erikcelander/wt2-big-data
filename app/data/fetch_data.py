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

        with open("data.json", "w") as outfile:
            json.dump(all_players, outfile)
loop = asyncio.get_event_loop()
loop.run_until_complete(main())

