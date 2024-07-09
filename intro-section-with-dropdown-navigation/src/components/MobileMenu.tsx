import { Button } from "./Button"
import { MenuItem } from "./MenuItem"
import { CloseMenuIcon } from "./icons/Icons"

type MobileMenuProps = {
  show: boolean
  toggleShow: (state: boolean) => void
}

export const MobileMenu = ({ show, toggleShow }: MobileMenuProps) => {
  return (
    <div
      className={`
    ${show ? "translate-x-0" : " translate-x-[100%]"}
    fixed right-0 top-0 z-20 h-[100dvh] min-h-[500px] w-[75vw] max-w-[250px] overflow-y-scroll bg-AlmostWhite p-4 text-MediumGray transition-transform duration-300`}
    >
      <div className="flex h-16 w-full items-start justify-end p-2">
        <div
          className="cursor-pointer transition-all hover:scale-110"
          onClick={() => toggleShow(false)}
        >
          <CloseMenuIcon />
        </div>
      </div>
      <MenuItem
        label={"Features"}
        subItems={["Todo List", "Calendar", "Reminders", "Planning"]}
        mode={"mobile"}
      />
      <MenuItem
        label={"Company"}
        subItems={["History", "Our Team", "Blog"]}
        mode={"mobile"}
      />
      <MenuItem label={"Careers"} mode={"none"} />
      <MenuItem label={"About"} mode={"none"} />
      <ul className="flex h-28 flex-col items-center justify-center space-y-4">
        <li className="">Login</li>
        <li className="">
          <Button text={"Register"} />
        </li>
      </ul>
    </div>
  )
}
