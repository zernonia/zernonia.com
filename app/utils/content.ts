export const site = {
  name: "Zernonia",
  url: "https://zernonia.com",
  title: "Zernonia — Frontend Developer & Open Source Maintainer",
  description:
    "Self-taught frontend developer from Kuala Lumpur, Malaysia. Creator of Reka UI (formerly Radix Vue), core team at shadcn-vue, and builder of open-source tools for the Vue ecosystem.",
  email: "zernonia@gmail.com",
  github: "https://github.com/zernonia",
  linkedin: "https://www.linkedin.com/in/zernonia/",
  twitter: "https://twitter.com/zernonia",
  twitterHandle: "@zernonia",
  location: "Kuala Lumpur, Malaysia",
}

export interface Project {
  name: string
  role: string
  description: string
  link: string
  repo?: string
  tags: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: "Reka UI",
    role: "Creator",
    description:
      "An open-source collection of unstyled, accessible component primitives for building high-quality Vue design systems and web apps. Formerly known as Radix Vue.",
    link: "https://reka-ui.com",
    repo: "https://github.com/unovue/reka-ui",
    tags: ["Vue", "TypeScript", "Accessibility"],
    featured: true,
  },
  {
    name: "shadcn-vue",
    role: "Core team",
    description:
      "The Vue port of shadcn/ui — beautifully designed components you can copy and paste into your apps, built on top of Reka UI and Tailwind CSS.",
    link: "https://shadcn-vue.com",
    repo: "https://github.com/unovue/shadcn-vue",
    tags: ["Vue", "Tailwind CSS", "Design system"],
  },
  {
    name: "Supabase Schema",
    role: "Creator",
    description:
      "A zero-setup visualizer that turns any Supabase project into an interactive database schema diagram. Winner of the Supabase Hackathon.",
    link: "https://supabase-schema.vercel.app",
    repo: "https://github.com/zernonia/supabase-schema",
    tags: ["Vue", "Supabase", "Dataviz"],
  },
  {
    name: "Made with Supabase",
    role: "Creator",
    description:
      "A community showcase collecting hundreds of apps and experiments built with Supabase — submissions, tags, search and all.",
    link: "https://github.com/zernonia/made-with-supabase",
    repo: "https://github.com/zernonia/made-with-supabase",
    tags: ["Nuxt", "Supabase", "Community"],
  },
]

export const stack = [
  "Vue",
  "Nuxt",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
]

export const socials = [
  { label: "GitHub", icon: "simple-icons:github", href: site.github },
  { label: "LinkedIn", icon: "simple-icons:linkedin", href: site.linkedin },
  { label: "X (Twitter)", icon: "simple-icons:x", href: site.twitter },
  { label: "Email", icon: "lucide:mail", href: `mailto:${site.email}` },
]
