import { DevTo } from "interface/devto"

const token = process.env.GITHUB_TOKEN

export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch<DevTo>(
      "https://dev.to/api/articles?username=zernonia",
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    return { data: response }
  } catch (err) {
    return sendError(event, new Error(`${err}`))
  }
})
