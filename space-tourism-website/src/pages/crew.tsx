import { type Dispatch, type SetStateAction, useState } from "react"
import Image from "next/image"
import data from "../data.json"
import { PageHeading } from "~/components/PageHeading"
import Link from "next/link"

const { crew } = data
type SelectionProps = {
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}

const Selection = ({ selected, setSelected }: SelectionProps) => {
  return (
    <div className=" my-4 flex cursor-pointer items-center justify-center space-x-6 font-Barlow text-xl font-light lg:justify-start lg:space-x-12 lg:text-2xl">
      {crew.map((_, idx) => (
        <button
          key={idx}
          className={`
        ${selected === idx ? "bg-slate-200/80 text-orange-600" : ""}
        h-10 w-10 rounded-full bg-black/50 text-center font-Barlow font-bold shadow-inner backdrop-blur-md transition-all hover:bg-slate-100 hover:text-orange-600 active:scale-110
        `}
          onClick={() => setSelected(idx)}
        >
          {idx + 1}
        </button>
      ))}
      <NextButton />
    </div>
  )
}

const NextButton = () => {
  return (
    <Link
      href="/technology"
      className="border-b-2 border-slate-400 border-opacity-0 py-2 text-slate-400 transition-all hover:scale-110 hover:border-slate-200 hover:border-opacity-100 hover:text-slate-100 "
    >
      {">>"}
    </Link>
  )
}

export default function Crew() {
  const [selected, setSelected] = useState<number>(0)
  return (
    <>
      <main className=" mx-auto max-w-[375px] sm:max-w-[550px] lg:max-w-none">
        <PageHeading text={" MEET YOUR CREW"} headingNumber={2} />
        <section className=" flex min-h-min flex-col items-center justify-between px-[7vw] sm:pt-10 lg:mx-auto lg:h-[550px] lg:w-[90vw] lg:flex-row">
          <div className="flex h-full flex-col lg:w-[45%]">
            <div className="flex h-full flex-col justify-evenly">
              <div className=" text-center font-Bellefair lg:text-left">
                <h2 className="my-4 text-xl text-slate-500">
                  {crew[selected]?.role.toUpperCase()}
                </h2>
                <h2 className="truncate text-3xl">
                  {crew[selected]?.name.toUpperCase()}
                </h2>
              </div>
            </div>
            <div className="my-4 flex min-h-[175px]  items-center justify-center lg:justify-start">
              <p className="text-center font-BarlowCondensed font-light tracking-wide sm:mx-4 lg:mx-0 lg:max-w-[400px] lg:text-left lg:text-lg">
                {crew[selected]?.bio}
              </p>
            </div>
            <Selection selected={selected} setSelected={setSelected} />
          </div>
          <div className=" flex h-full flex-col items-center justify-center lg:w-[45%]">
            <Image
              className="h-[400px] object-contain object-bottom"
              src={crew[selected]?.images.png ?? ""}
              width={445}
              height={445}
              sizes="100vw"
              priority={true}
              alt={"crew image"}
            />

            <div className="h-[1px] w-full bg-slate-400/40" />
          </div>
        </section>
      </main>
    </>
  )
}
