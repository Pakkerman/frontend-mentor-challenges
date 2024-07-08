import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the home page
    void router.replace("/home")
  })

  // return a empty blank div, or the footer will flash a second then redirect to '/home'
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-slate-800" />
  )
}
