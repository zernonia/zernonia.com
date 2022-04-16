import axios from "axios"
const token = process.env.GITHUB_TOKEN

export default defineEventHandler(async (event) => {
  let slug = event.context.params.slug
  if (slug) {
    try {
      const response = await axios({
        method: "get",
        url: `https://dev.to/api/articles/zernonia/${slug}`,
        headers: { Authorization: "Bearer " + token },
      })
      return { data: response.data }
    } catch (err) {
      return { err }
    }
  }
})
