export default defineEventHandler((event) => {
  setHeader(event, "Cache-Control", "s-maxage=16400, stale-while-revalidate")
})
