import asyncio
import json
import ssl

import aiohttp
import certifi

from understat import Understat

async def main():    
  
    ssl_context = ssl.create_default_context(cafile=certifi.where())

    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=ssl_context)) as session:
        understat = Understat(session)

        # Fetch player data for a specific league (e.g., English Premier League)
        epl = await understat.get_league_players("epl", 2022)
        print(json.dumps(epl, indent=4, sort_keys=True))

loop = asyncio.get_event_loop()
loop.run_until_complete(main())
