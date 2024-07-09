import Image from "next/image"

import { ButtonBlack } from "./Button"
import Logos from "./Logos"

export const HeroImage = () => {
  return (
    <>
      <Image
        className="md:hidden"
        src={"/assets/image-hero-mobile.png"}
        height={750}
        width={564}
        alt="hero image"
      />
      <Image
        className="hidden object-contain object-left md:block md:w-[154px] md:object-cover lg:w-full lg:object-contain lg:object-center"
        src={"/assets/image-hero-desktop.png"}
        width={960}
        height={1280}
        alt="hero image"
      />
    </>
  )
}

export const HeroSection = () => {
  return (
    <div className=" md:spacep-y-0  mx-auto flex h-[650px] max-w-[375px] flex-col justify-between space-y-8 md:w-[80vw] md:max-w-none md:flex-row-reverse lg:w-[75vw]">
      <HeroImage />

      <section className=" flex w-full flex-grow flex-col items-center justify-between md:items-start">
        {/* because of the line break difference of mobile and desktop, we use two separate elements for hero text*/}
        <div className=" flex h-full flex-col items-center justify-evenly md:items-start">
          <h1 className=" text-4xl font-bold md:hidden ">Make remote work</h1>
          <div className=" hidden text-left font-bold md:block  md:text-7xl">
            <h1 className="">Make</h1>
            <h1 className="">remote work</h1>
          </div>
          <article className="px-4 text-center md:w-[80%] md:max-w-[420px] md:px-0 md:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </article>
          <ButtonBlack text={"Learn More"} />
        </div>
        <Logos />
      </section>
    </div>
  )
}
