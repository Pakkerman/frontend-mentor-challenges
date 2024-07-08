import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Logo, Hamburger, CloseIcon } from "./svgs"
import { useResizeOnWidth } from "~/hooks/useResizeOnWidth"

const MENUITEMS = ["home", "destination", "crew", "technology"]

type MenuItemProps = {
  label: string
  idx: number
  selected: boolean
}

const MenuItem = ({ label, idx, selected }: MenuItemProps) => {
  const url = label
  return (
    <div
      className={`
      ${selected ? " border-slate-200" : " border-transparent"}
      group cursor-pointer border-b-2 px-1 font-BarlowCondensed font-light hover:border-slate-300`}
    >
      <Link href={url}>
        <h1 className="text-md leading-[2rem] transition-all group-hover:text-slate-200 sm:leading-[5rem] lg:text-lg lg:leading-[5rem]">
          <span className="pr-2 font-medium  sm:hidden lg:inline">{`0${idx}`}</span>
          {label.toUpperCase()}
        </h1>
      </Link>
    </div>
  )
}

const MobileMenu = ({ pathname }: { pathname: string }) => {
  const [show, setShow] = useState<boolean>(false)
  useResizeOnWidth(640, false, setShow)

  return (
    <>
      <div className="p-6 sm:hidden" onClick={() => setShow(true)}>
        <Hamburger />
      </div>

      {/* Transparent backdrop to serve as tap away to close the mobile menu */}
      {show && (
        <div
          className="fixed left-0 top-0 h-screen w-[100vw]"
          onClick={() => setShow(false)}
        />
      )}
      <div
        className={`
      ${show ? "translate-x-0" : "translate-x-[100%]"}
      fixed right-0 top-0 z-10 h-[100dvh] w-[60%] bg-black/60 backdrop-blur-md transition-all duration-300 sm:hidden`}
      >
        <div
          className="flex h-24 justify-end p-8"
          onClick={() => setShow(false)}
        >
          <CloseIcon />
        </div>

        <div className="flex flex-col space-y-8 px-12 pt-20">
          {MENUITEMS.map((item, idx) => (
            <div key={idx} onClick={() => setShow(false)}>
              <MenuItem
                label={item}
                idx={idx}
                key={idx}
                selected={pathname === "/" + item}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const DesktopMenu = ({ pathname }: { pathname: string }) => {
  return (
    <div className="hidden h-20 items-center space-x-8 bg-slate-600/20 px-12 text-slate-200 backdrop-blur-md sm:flex lg:w-[60%] lg:space-x-12 lg:pl-44">
      {MENUITEMS.map((item, idx) => (
        <MenuItem
          label={item}
          idx={idx}
          key={idx}
          selected={pathname === "/" + item}
        />
      ))}
    </div>
  )
}

export const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <nav className="relative flex h-24 w-[100vw] items-center justify-between  pl-6 lg:h-36 lg:pl-8">
      <div className="absolute left-32 z-20 hidden h-[1px] w-[35vw] bg-slate-200/20 lg:block" />
      <Logo />
      <MobileMenu pathname={pathname} />
      <DesktopMenu pathname={pathname} />
    </nav>
  )
}
