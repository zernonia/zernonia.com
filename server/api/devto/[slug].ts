import { DevToPost } from "interface/devto-post"
const token = process.env.GITHUB_TOKEN

export default defineEventHandler(async (event) => {
  let slug = event.context.params.slug
  if (slug) {
    try {
      const data = await $fetch<DevToPost>(
        `https://dev.to/api/articles/zernonia/${slug}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      return { data }
    } catch (err) {
      return sendError(event, new Error(`${err}`))
    }
  }
})
