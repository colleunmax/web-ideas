"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
    className?: string
}

export default function Header({className}: Props) {
    const pathname = usePathname()
    const isRoot = pathname == "/"

    return <header className={` opacity-75 hover:opacity-100 duration-100 fixed left-8 top-8 border-2 rounded-lg border-foreground text-foreground ${className} ${isRoot ? " -translate-x-[calc(100%_+_2rem)]" : ""}`}>
    <Link className="p-2 flex items-center gap-2" href="/">
        <svg className=" scale-150" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 1C3 1.33333 1 2.4 1 4C1 5.2 3 6.5 4 7" stroke="currentColor"/>
        </svg>
        home
    </Link>
</header>
}