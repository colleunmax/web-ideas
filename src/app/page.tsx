import { Metadata } from "next"
import idea from "@/types/idea"
import Link from "next/link"
import { leckerliOne } from "./fonts/leckerli-one"

const ideas: idea[] = [
  {path: "/handwriting", title:"Handwriting animation", description: "Handwirting text animation (svg)", createdAt: new Date("2025-01-10")},
  {path: "/hover-animation", title:"Hover animation", description: "Some hoveranimation, made with variable fonts", createdAt: new Date("2025-01-24")}
]

const ideasLi = ideas.map(({path, title, description, createdAt}: idea, key) => {
  return <li className=" w-full border-2 border-foreground rounded-lg flex flex-col justify-between" key={key}>
      <div className=" px-5 py-3">
        <h3 className={` text-xl ${leckerliOne.className}`}>{title}</h3>
        {description ? <p>{description}</p> : ""}
        {createdAt ? <span className=" text-sm opacity-65 italic">{createdAt.toDateString()}</span> : ""}
      </div>
      <Link className={` group w-full py-2 bg-foreground text-highlight ${leckerliOne.className}`} href={path}>
        <div className=" duration-150 translate-x-3 group-hover:translate-x-3 flex justify-center gap-3">
          See
          <img className=" group-hover:opacity-100 duration-150 -translate-x-3 group-hover:translate-x-0 opacity-0" width="18" src="./arrow.svg" alt="->" />
        </div>
      </Link>
  </li>
})

export const metadata: Metadata = {
  title: "Colle Ideas"
}

export default function Home() {
  return (
    <main className=" flex flex-col items-center gap-20">
      <h1 className=" pt-12 overflow-hidden flex justify-center w-full">
        <img width="700" className=" min-w-[700px] hidden dark:block" src="./banner-dark.svg" alt="A title with the following text: web ideas - some of my experiments" />
        <img width="700" className=" min-w-[700px] block dark:hidden" src="./banner-light.svg" alt="A title with the following text: web ideas - some of my experiments" />
      </h1>
      <ul className=" w-full max-w-[700px] grid gap-12 px-8 sm:grid-cols-2">
        {ideasLi}
      </ul>
    </main>
  )
}
