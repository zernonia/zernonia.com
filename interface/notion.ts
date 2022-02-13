export interface Project {
  data: NotionProject[]
}

export interface NotionProject {
  name: string
  tags: string[]
  image: string
  link: string
  description: string
  created_at: Date
}
