import { useEffect, useState } from "react"

import { Button } from "./Button"
import { MenuItem } from "./MenuItem"
import { MobileMenu } from "./MobileMenu"
import { Logo, MenuIcon } from "./icons/Icons"

const DesktopNav = () => {
  return (
    <div className="hidden h-full items-center md:flex md:space-x-4 lg:space-x-6">
      <div className="w-24 transition-all lg:w-28">
        <Logo />
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-6 transition-all lg:space-x-10">
          <MenuItem
            label={"Features"}
            subItems={["Todo List", "Calendar", "Reminders", "Planning"]}
            mode={"desktop"}
          />
          <MenuItem
            label={"Company"}
            subItems={["History", "Our Team", "Blog"]}
            mode={"desktop"}
          />
          <MenuItem label={"Careers"} mode={"none"} />
          <MenuItem label={"About"} mode={"none"} />
        </div>
        <div className=" hidden items-center  space-x-6 md:flex">
          <MenuItem label={"Login"} mode={"none"} />
          <Button text={"Register"} />
        </div>
      </div>
    </div>
  )
}

type BackdropProps = {
  show: boolean
  toggleShow: (state: boolean) => void
}

const Backdrop = ({ show, toggleShow }: BackdropProps) => {
  return (
    <div
      className={` ${
        show
          ? "pointer-events-auto opacity-70"
          : "pointer-events-none opacity-0"
      }
      fixed left-0 top-0 z-10 h-[100dvh] w-[100vw] bg-AlmostBlack transition-all duration-300`}
      onClick={() => toggleShow(false)}
    />
  )
}

const MobileNav = () => {
  const [show, toggleShow] = useState<boolean>(false)

  const handleResize = (event: Event): void => {
    const target = event.target as Window
    if (target.innerWidth < 768) return
    toggleShow(false)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div className="flex h-full w-full items-center justify-between md:hidden">
        <Logo />
        <div
          className="cursor-pointer transition-all hover:scale-110 md:translate-x-[200px]"
          onClick={() => toggleShow(true)}
        >
          <MenuIcon />
        </div>
      </div>
      <Backdrop show={show} toggleShow={toggleShow} />
      <MobileMenu show={show} toggleShow={toggleShow} />
    </>
  )
}

export const Navbar = () => {
  return (
    <nav className="h-20 px-8 py-6">
      <DesktopNav />
      <MobileNav />
    </nav>
  )
}
