export default defineEventHandler((event) => {
  setHeader(event, "Cache-Control", "s-maxage=86400, stale-while-revalidate")
})
