import "./globals.css"
import Link from "next/link"
import { Metadata } from "next"
import Header from "./widgets/header"
import { cambo } from "./fonts/cambo"
import { leckerliOne } from "./fonts/leckerli-one"

export const metadata: Metadata = {
  title: {
    template: 'CI | %s',
    default: 'Page',
  },
  icons: [
    {
      media: "(prefers-color-scheme: dark)",
      url: "/dark.svg",
      href: "/dark.svg"
    }, {
      media: "(prefers-color-scheme: light)",
      url: "/light.svg",
      href: "/light.svg"
    }
  ]
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={` bg-background text-foreground pb-24 ${cambo.className}`}>
        <Header className={leckerliOne.className} />
        {children}
        <footer className="bg-foreground text-background flex gap-5 items-center justify-center py-2 fixed bottom-0 w-full">
          <span className={leckerliOne.className}>Hey!</span>
          <div className=" flex items-center">
            <span>here is the</span>
            <Link className=" underline italic p-1" href="https://github.com/colleunmax/web-ideas">github</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
