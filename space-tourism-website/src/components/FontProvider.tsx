import { Barlow_Condensed, Barlow, Bellefair } from "next/font/google"

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  preload: true,
  weight: ["300", "500", "700"],
  variable: "--font-barlow-condensed",
})
const bellefair = Bellefair({
  subsets: ["latin"],
  preload: true,
  weight: ["400"],
  variable: "--font-bellefair",
})
const barlow = Barlow({
  subsets: ["latin"],
  preload: true,
  weight: ["400"],
  variable: "--font-barlow",
})

export default function FontProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`
    ${barlow.variable} 
    ${barlow_condensed.variable}
    ${bellefair.variable}`}
    >
      {children}
    </div>
  )
}
