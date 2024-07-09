interface customButtonProps {
  buttonText?: string
}

export default function customButton(props: customButtonProps) {
  return (
    <div className="group relative">
      <div className="pointer-events-none absolute -inset-2 left-[50%] top-8 w-[90%] translate-x-[-50%] rounded-lg bg-gradient-to-r from-[#ff5176] to-[#fe6634] opacity-0 blur-lg group-hover:opacity-50" />
      <button
        type="submit"
        className="relative w-full rounded-lg bg-slate-800 from-[#ff5176] to-[#fe6634] py-4 font-RobotoBold text-sm text-white transition hover:cursor-pointer hover:bg-gradient-to-br">
        {props.buttonText}
      </button>
    </div>
  )
}
