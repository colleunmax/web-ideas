import { Metadata } from "next"
import idea from "@/types/idea"
import Link from "next/link"

const ideas: idea[] = [
  {path: "/handwriting", title:"Handwriting animation", description: "Lorem Ipsum dolor sit amet", createdAt: new Date("2025-01-10")}
]

const ideasLi = ideas.map(({path, title, description, createdAt}: idea, key) => {
  return <li key={key}>
    <Link className="underline" href={path}>
      <h3>{title}</h3>
    </Link>
      {description ? <p>{description}</p> : ""}
      {createdAt ? <span>{createdAt.toDateString()}</span> : ""}
  </li>
})

export const metadata: Metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <main>
      <h2>Some of my ideas</h2>
      <ul>
        {ideasLi}
      </ul>
    </main>
  )
}
