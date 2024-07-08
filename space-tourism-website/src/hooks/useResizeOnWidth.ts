import { useEffect } from "react"

export const useResizeOnWidth = (
  width: number,
  setTo: boolean,
  callback: (state: boolean) => void
) => {
  const handleResize = (event: Event) => {
    const { innerWidth } = event.target as Window
    if (innerWidth < width) return
    callback(setTo)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      removeEventListener("resize", handleResize)
    }
  }, [])
}
