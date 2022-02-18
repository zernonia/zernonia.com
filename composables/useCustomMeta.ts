export const useCustomMeta = () => {
  let defaultDesc =
    "Zernonia - Self-taught Frontend Developer from Malaysia. I love building fun projects during my free time!"
  let defaultImage = "https://zernonia.com/og.png"

  const setMeta = (title: string, desc = defaultDesc, image = defaultImage) => {
    useMeta({
      title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: desc },
        { name: "og:title", content: title },
        { name: "og:site_name", content: "Zernonia" },
        { name: "og:description", content: desc },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://www.zernonia.com/" },
        { name: "og:image", content: image },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@zernonia" },
        { name: "twitter:creator", content: "@zernonia" },
        { name: "twitter:title", content: "Zernonia" },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: image },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    })
  }

  return {
    setMeta,
  }
}
