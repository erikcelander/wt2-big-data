import fs from "fs"
import path from "path"

export async function getFilteredPlayers() {
  const filePath = path.join(process.cwd(), "data", "data.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  const filteredPlayers = JSON.parse(fileContents)
  return filteredPlayers
}
