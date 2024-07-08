import { type Dispatch, type SetStateAction, useState } from "react"
import Image from "next/image"
import data from "../data.json"
import { PageHeading } from "~/components/PageHeading"
import Link from "next/link"

const { destinations } = data

type SelectionProps = {
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}

const Selection = ({ selected, setSelected }: SelectionProps) => {
  return (
    <div className=" my-4 flex cursor-pointer items-center space-x-6 font-BarlowCondensed text-xl font-light lg:text-2xl">
      {destinations.map((item, idx) => (
        <div
          key={idx}
          className={`
    ${selected === idx ? "border-opacity-100 text-slate-100" : "text-slate-400"}
    border-b-2 border-slate-400 border-opacity-0 py-2  transition-all hover:border-slate-200 hover:border-opacity-100 hover:text-slate-100`}
          onClick={() => setSelected(idx)}
        >
          {item.name.toUpperCase()}
        </div>
      ))}
      <NextButton />
    </div>
  )
}

const NextButton = () => {
  return (
    <Link
      href="/crew"
      className="border-b-2 border-slate-400 border-opacity-0 py-2 text-slate-400 transition-all hover:scale-110 hover:border-slate-200 hover:border-opacity-100 hover:text-slate-100"
    >
      {">>"}
    </Link>
  )
}

export default function Destination() {
  const [selected, setSelected] = useState<number>(0)

  return (
    <>
      <main className="mx-auto max-w-[375px] sm:max-w-[550px] lg:max-w-none">
        <PageHeading text={"PICK YOUR DESTINATION"} headingNumber={1} />
        <section className=" flex min-h-min flex-col items-center justify-between px-[7vw] sm:pt-10 lg:mx-auto lg:h-[550px] lg:w-[90vw] lg:flex-row">
          <div className=" h-full lg:w-[45%]">
            <div>
              <Image
                className="animate-rotate mx-auto my-8 h-[250px] w-[250px] object-contain lg:my-12 lg:h-[400px] lg:w-[400px]"
                src={destinations[selected]?.images.png ?? ""}
                width={445}
                height={445}
                sizes="100vw"
                priority={true}
                alt={"destination image"}
              />
            </div>
          </div>
          <div className=" flex h-full flex-col items-center justify-center lg:w-[45%] lg:items-start">
            <Selection selected={selected} setSelected={setSelected} />
            <h1 className="my-4 font-Bellefair text-7xl">
              {destinations[selected]?.name.toUpperCase()}
            </h1>
            <div className="mb-4 flex min-h-[150px] flex-col justify-center">
              <p className="text-center font-BarlowCondensed font-light tracking-wide sm:mx-4 lg:mx-0 lg:max-w-[400px] lg:text-left">
                {destinations[selected]?.description}
              </p>
            </div>
            <div className="my-4 h-[1px] w-full bg-slate-400/40" />
            <div className=" flex flex-col  justify-evenly text-center sm:w-full sm:flex-row lg:max-w-max lg:justify-start lg:space-x-12 lg:text-left">
              <div className="my-4 ">
                <div className=" font-Barlow  font-light">AVG. DISTANCE</div>
                <div className="my-2 truncate font-Bellefair text-3xl font-light">
                  {destinations[selected]?.distance.toUpperCase()}
                </div>
              </div>
              <div className="my-4">
                <div className="font-Barlow  font-light">EST. TRAVEL TIME</div>
                <div className="my-2  truncate font-Bellefair text-3xl font-light">
                  {destinations[selected]?.travel.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
