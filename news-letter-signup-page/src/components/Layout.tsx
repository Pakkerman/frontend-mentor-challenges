import type { PropsWithChildren } from "react"

export default function layout(props: PropsWithChildren) {
  return (
    <main className="flex h-[100svh] min-h-[768px] w-full flex-col items-center justify-center bg-slate-100 sm:bg-slate-700 ">
      {props.children}
    </main>
  )
}
