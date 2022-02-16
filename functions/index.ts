export const dateFormatter = (date: Date) => {
  let d = new Date(date)
  if (d) {
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  } else {
    return
  }
}

export const numberFormatter = (num: number) => {
  if (!num) return
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
