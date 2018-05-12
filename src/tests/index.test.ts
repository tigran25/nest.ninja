import NestNinja from ".."
import * as path from "path"
import * as fs from "fs"

const svg = fs.readFileSync(path.join(__dirname, "fixtures", "flat-simple.svg"))

describe("NestNinja", () => {
  it("gets .paths", () => {
    const ninja = new NestNinja(svg.toString())
    expect(ninja.paths.length).toBe(5)
  })
})
