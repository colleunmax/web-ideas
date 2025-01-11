import "./globals.css"
import { Metadata } from "next"

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
      <body className=" bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
