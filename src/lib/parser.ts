import * as cheerio from "cheerio"

class Parser {
  private $: CheerioStatic

  constructor(svg: string) {
    this.$ = cheerio.load(svg)
  }

  get paths() {
    return this.$("path").map((_, el) => {
      return this.$(el).attr("d")
    })
  }
}

export default Parser
