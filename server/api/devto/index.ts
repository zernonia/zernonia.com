import axios from "axios"
import type { IncomingMessage, ServerResponse } from "http"
const token = process.env.GITHUB_TOKEN

export default async (req: IncomingMessage, res: ServerResponse) => {
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
