import axios from "axios"
import type { IncomingMessage, ServerResponse } from "http"
const token = process.env.GITHUB_TOKEN

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { pathname } = new URL(req.url!, "https://example.org/")
  const slug = pathname.split("/")[1]

  if (slug) {
    try {
      const response = await axios({
        method: "get",
        url: `https://dev.to/api/articles/zernonia/${slug}`,
        headers: { Authorization: "Bearer " + token },
      })
      return { data: response.data }
    } catch (err) {
      res.statusCode = 400
      return { err }
    }
  } else {
    try {
      const response = await axios({
        method: "get",
        url: "https://dev.to/api/articles?username=zernonia",
        headers: { Authorization: "Bearer " + token },
      })
      return { data: response.data }
    } catch (err) {
      res.statusCode = 400
      return { err }
    }
  }
}
