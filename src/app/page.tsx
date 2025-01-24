import { Metadata } from "next"
import idea from "@/types/idea"
import Link from "next/link"

const ideas: idea[] = [
  {path: "/handwriting", title:"Handwriting animation", description: "Handwirting text animation (svg)", createdAt: new Date("2025-01-10")},
  {path: "/hover-animation", title:"Hover animation", description: "Some hoveranimation, made with variable fonts", createdAt: new Date("2025-01-24")}
]

const ideasLi = ideas.map(({path, title, description, createdAt}: idea, key) => {
  return <li className=" p-4" key={key}>
    <Link className="underline" href={path}>
      <h3>{title}</h3>
    </Link>
      {description ? <p>{description}</p> : ""}
      {createdAt ? <span className=" text-sm opacity-65 italic">{createdAt.toDateString()}</span> : ""}
  </li>
})

export const metadata: Metadata = {
  title: "Colle Ideas"
}

export default function Home() {
  return (
    <main className=" flex flex-col items-center">
      <h2 className=" text-2xl font-extrabold my-8 relative before:block before:absolute before:w-5/6 before:h-[2px] before:bg-current before:-bottom-1">Some of my ideas</h2>
      <ul>
        {ideasLi}
      </ul>
    </main>
  )
}
