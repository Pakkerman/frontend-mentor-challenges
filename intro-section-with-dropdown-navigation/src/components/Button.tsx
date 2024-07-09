type ButtonProps = {
  text: string
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button className="group rounded-2xl border-[1.5px] border-MediumGray bg-AlmostWhite px-5 py-2 font-bold hover:cursor-pointer hover:border-AlmostBlack hover:bg-AlmostBlack">
      <p className="translate-y-[2px] text-MediumGray group-hover:text-AlmostWhite">
        {text}
      </p>
    </button>
  )
}
export const ButtonBlack = ({ text }: ButtonProps) => {
  return (
    <button className="border- group rounded-2xl border-[1.5px] border-AlmostBlack bg-AlmostBlack px-6 py-3 font-bold hover:cursor-pointer hover:border-AlmostBlack hover:bg-AlmostWhite">
      <p className="translate-y-[2px] text-AlmostWhite group-hover:text-AlmostBlack">
        {text}
      </p>
    </button>
  )
}
