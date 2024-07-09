import { useEffect, useState } from "react"
import { ArrowUpIcon } from "./icons/Icons"
import Link from "next/link"

import {
  TodoIcon,
  CalendarIcon,
  RemaindersIcon,
  PlanningIcon,
} from "./icons/Icons"

const ICONS: Record<string, JSX.Element> = {
  "Todo List": <TodoIcon />,
  Calendar: <CalendarIcon />,
  Reminders: <RemaindersIcon />,
  Planning: <PlanningIcon />,
}

type SubItemProps = {
  label: string
}
export const SubItem = ({ label }: SubItemProps) => {
  return (
    <div className="flex space-x-2 text-MediumGray">
      {ICONS[label] && <div className="w-4">{ICONS[label]}</div>}
      <Link href="#">
        <p className="truncate">{label}</p>
      </Link>
    </div>
  )
}

type MenuLabelProps = {
  label: string
}

const MenuLabel = ({ label }: MenuLabelProps) => {
  return (
    <div className="cursor-pointer py-2">
      <h1>{label}</h1>
    </div>
  )
}

type SubMenuProps = {
  label: string
  subItems?: Array<string>
  mode: "mobile" | "desktop" | "none"
}

export const MenuItem = ({ label, subItems = [], mode }: SubMenuProps) => {
  const [open, setOpen] = useState(false)

  const handleResize = (event: Event): void => {
    const { innerWidth } = event.target as Window
    if (mode === "mobile" && innerWidth > 768) setOpen(false)
    if (mode === "desktop" && innerWidth <= 768) setOpen(false)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // desktop
  if (mode === "desktop")
    return (
      <div className="relative">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center space-x-2"
        >
          <MenuLabel label={label} />
          <div className={`${open ? "rotate-0" : "rotate-180"} transition-all`}>
            <ArrowUpIcon />
          </div>
        </div>
        <div
          className={`
          ${open ? "opacity-100" : "pointer-events-none opacity-0"} absolute
          z-20 min-h-min space-y-4 rounded-lg bg-AlmostWhite px-8 py-6 drop-shadow-2xl  transition-all`}
        >
          {subItems.map((item, idx) => (
            <SubItem key={idx} label={item} />
          ))}
        </div>
        {/* This is bit of a hack, using a transparent backdrop that cover the screen to act as click away,
        so that when user is not clicking within the subitem frame it will close */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed left-0 top-0 z-10 h-screen w-screen"
          />
        )}
      </div>
    )
  // Mobile
  if (mode === "mobile")
    return (
      <>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center space-x-2"
        >
          <MenuLabel label={label} />
          <div className={`${open ? "rotate-0" : "rotate-180"} transition-all`}>
            <ArrowUpIcon />
          </div>
        </div>
        <div
          className={`
        ${open ? "" : "h-0"}
          overflow-hidden transition-all duration-300`}
        >
          <div className=" w-full flex-col space-y-4 p-6 transition-all duration-300 ">
            {subItems.map((item, idx) => (
              <SubItem key={idx} label={item} />
            ))}
          </div>
        </div>
      </>
    )

  return (
    <Link href="#">
      <MenuLabel label={label} />
    </Link>
  )
}
