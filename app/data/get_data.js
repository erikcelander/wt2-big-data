import fs from "fs"
import path from "path"

export async function getData() {
  const filePath = path.join(process.cwd(), "app/data", "data.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  const players = JSON.parse(fileContents)
  return players
}
