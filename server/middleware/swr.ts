import type { IncomingMessage, ServerResponse } from "http"

export default (req: IncomingMessage, res: ServerResponse, next: () => void) => {
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate")
  next()
}
