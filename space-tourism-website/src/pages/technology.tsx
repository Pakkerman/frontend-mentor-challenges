import { type Dispatch, type SetStateAction, useState } from "react"
import Image from "next/image"
import data from "../data.json"

import vehiclePortrait from "../../public/assets/technology/image-launch-vehicle-portrait.jpg"
import vehicleLandscape from "../../public/assets/technology/image-launch-vehicle-landscape.jpg"
import spaceCraftPortrait from "../../public/assets/technology/image-spaceport-portrait.jpg"
import spaceCraftLandscape from "../../public/assets/technology/image-spaceport-landscape.jpg"
import capsultPortrait from "../../public/assets/technology/image-space-capsule-portrait.jpg"
import capsulLandscape from "../../public/assets/technology/image-space-capsule-landscape.jpg"
import { PageHeading } from "~/components/PageHeading"

const { technology: tech } = data

// import this way to avoid defining width and height in Image component
const imgs = [
  {
    portrait: vehiclePortrait,
    landscape: vehicleLandscape,
  },
  {
    portrait: spaceCraftPortrait,
    landscape: spaceCraftLandscape,
  },
  {
    portrait: capsultPortrait,
    landscape: capsulLandscape,
  },
]

type SelectedProps = {
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}

const Selection = ({ selected, setSelected }: SelectedProps) => {
  return (
    <>
      <div className="my-4 flex justify-center space-x-12 font-Barlow text-xl font-light lg:mx-12 lg:flex-col lg:space-x-0 lg:space-y-12 lg:text-2xl">
        {tech.map((_, idx) => (
          <button
            key={idx}
            className={`
            ${
              selected === idx
                ? "border-slate-200 bg-slate-200 text-orange-500"
                : "border-slate-500"
            }
                    h-14 w-14 rounded-full border-[1px]  text-center font-Barlow font-bold transition-all hover:border-slate-100 hover:bg-slate-100 hover:text-orange-500  active:scale-110
                    `}
            onClick={() => setSelected(idx)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default function Destination() {
  const [selected, setSelected] = useState<number>(0)

  return (
    <>
      <main className=" mx-auto max-w-[375px] sm:max-w-[550px] lg:max-w-none">
        <PageHeading text={"SPACE LAUNCH 101"} headingNumber={3} />
        <section className="  flex min-h-min flex-col items-center justify-between sm:pt-10 lg:mx-auto lg:h-[550px] lg:w-[100vw] lg:flex-row-reverse lg:pl-[7vw]">
          <div className="my-4 flex h-[250px] w-screen flex-col items-center  justify-center sm:h-[400px] lg:h-full lg:w-[40%]">
            <Image
              className="h-[250px] object-cover  object-center sm:hidden"
              src={imgs[selected]?.landscape ?? ""}
              priority={true}
              sizes="100vw"
              alt={"crew image"}
            />
            <Image
              className="hidden h-full object-cover object-left sm:block sm:max-w-[550px] sm:rounded-lg "
              src={imgs[selected]?.portrait ?? ""}
              sizes="100vw"
              priority={true}
              alt={"crew image"}
            />
          </div>

          <div className=" flex h-full flex-col justify-center lg:w-[50%] lg:flex-row">
            <Selection selected={selected} setSelected={setSelected} />
            <div className=" flex flex-col justify-center">
              <div className="text-center font-Bellefair lg:text-left">
                <p className="font-BarlowCondensed font-light text-slate-300">
                  THE TECHNOLOGY...
                </p>
                <h2 className="my-4 text-4xl ">
                  {tech[selected]?.name.toUpperCase()}
                </h2>
              </div>
              <div className="my-4 flex h-[160px] items-center">
                <p className="px-6 text-center font-BarlowCondensed font-light tracking-wide sm:mx-4 sm:max-w-[400px] sm:px-0 lg:mx-0 lg:text-left ">
                  {tech[selected]?.description}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="h-[1px] w-full bg-slate-400/40" /> */}
        </section>
      </main>
    </>
  )
}
