import fs from "fs"
import path from "path"

/**
 * Retrieves data from a JSON file.
 *
 * @returns {Promise<Array>} An array of player objects.
 */
export async function getData() {
  const filePath = path.join(process.cwd(), "app/data", "data.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  const players = JSON.parse(fileContents)
  return players
}
