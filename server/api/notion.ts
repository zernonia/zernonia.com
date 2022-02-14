import { Client } from "@notionhq/client"
import { NotionProject } from "@/interface"
import type { IncomingMessage, ServerResponse } from "http"
const token = process.env.NOTION_TOKEN
const notion = new Client({ auth: token })

export default async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const response = await notion.databases.query({
      database_id: "2394174cd1d2490dac1697b901d8ef29",
      sorts: [
        {
          property: "created_at",
          direction: "descending",
        },
      ],
    })
    if (response.results) {
      return { data: formatResult(response) }
    }
  } catch (err) {
    res.statusCode = 400
    return { err }
  }
}

type Await<T> = T extends PromiseLike<infer U> ? U : T
type QueryType = Await<ReturnType<typeof notion.databases.query>>
type QueryResultType = QueryType["results"][0]
type ExtractItemType = Extract<QueryResultType, { url: string }>

const formatResult = (query: QueryType) => {
  let arr: NotionProject[] = []
  query.results.forEach((i: ExtractItemType) => {
    let t: NotionProject = {
      name: "",
      tags: [],
      image: "",
      link: "",
      description: "",
      created_at: new Date(),
    }
    if (i.properties["name"]?.type == "title" && i.properties["name"].title?.[0]?.plain_text) {
      Object.keys(i.properties).forEach((prop) => {
        let p = i.properties[prop]
        if (p.type == "title") {
          t[prop] = p.title?.[0]?.plain_text
        } else if (p.type == "rich_text") {
          t[prop] = p.rich_text?.[0]?.plain_text
        } else if (p.type == "multi_select") {
          t[prop] = p.multi_select.map((tag) => tag.name)
        } else if (p.type == "files") {
          if (p.files[0]?.type == "external") {
            t[prop] = p.files?.[0]?.external.url
          } else {
            t[prop] = p.files?.[0]?.file.url
          }
        } else if (p.type == "url") {
          t[prop] = p.url
        } else if (p.type == "date") {
          t[prop] = p.date.start ? new Date(p.date.start) : undefined
        }
      })
      arr.push(t)
    }
  })
  return arr
}
