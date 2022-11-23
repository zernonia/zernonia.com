import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
)

// Umami is hosted on Supabase/Vercel
export default defineEventHandler(async (event) => {
  let today = new Date().getTime()
  let nintyDaysAgo = new Date(today - 90 * 86400000).toUTCString()
  try {
    const { data, error, count } = await supabase
      .from("session")
      .select("created_at", { count: "exact" })
      .eq("website_id", 2)
    // .gte("created_at", nintyDaysAgo)

    if (error) {
      throw error
    }
    return { count }
  } catch (err) {
    return sendError(event, new Error(`${err}`))
  }
})
