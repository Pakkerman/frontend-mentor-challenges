import Image, { type StaticImageData } from "next/image"
import { useRouter } from "next/router"

import homeMobile from "../../public/assets/home/background-home-mobile.jpg"
import homeTablet from "../../public/assets/home/background-home-tablet.jpg"
import homeDesktop from "../../public/assets/home/background-home-desktop.jpg"
import destinationMobile from "../../public/assets/destination/background-destination-mobile.jpg"
import destinationTablet from "../../public/assets/destination/background-destination-tablet.jpg"
import destinationDesktop from "../../public/assets/destination/background-destination-desktop.jpg"
import crewMobile from "../../public/assets/crew/background-crew-mobile.jpg"
import crewTablet from "../../public/assets/crew/background-crew-tablet.jpg"
import crewDesktop from "../../public/assets/crew/background-crew-desktop.jpg"
import technologyMobile from "../../public/assets/technology/background-technology-mobile.jpg"
import technologyTablet from "../../public/assets/technology/background-technology-tablet.jpg"
import technologyDesktop from "../../public/assets/technology/background-technology-desktop.jpg"
import { useState } from "react"

const img: Record<string, StaticImageData> = {
  homeMobile: homeMobile,
  homeTablet: homeTablet,
  homeDesktop: homeDesktop,
  destinationMobile: destinationMobile,
  destinationTablet: destinationTablet,
  destinationDesktop: destinationDesktop,
  crewMobile: crewMobile,
  crewTablet: crewTablet,
  crewDesktop: crewDesktop,
  technologyMobile: technologyMobile,
  technologyTablet: technologyTablet,
  technologyDesktop: technologyDesktop,
}

export const BG = () => {
  const [loaded, setLoaded] = useState<boolean>(false)
  let { pathname } = useRouter()
  pathname = pathname.slice(1)

  if (pathname === "") return <div></div>

  return (
    <div className="fixed left-0 top-0 z-[-100] bg-slate-950">
      <Image
        className={`h-screen w-screen object-cover object-center sm:hidden ${
          loaded ? "opacity-100" : " animate-pulse opacity-50"
        } transition-opacity duration-200`}
        src={img[`${pathname}Mobile`]!}
        placeholder="blur"
        priority={true}
        sizes="100vw"
        onLoadingComplete={() => setLoaded(true)}
        alt="background image"
      />
      <Image
        className={`hidden h-screen w-screen object-cover sm:block lg:hidden ${
          loaded ? "opacity-100" : " animate-pulse opacity-50"
        } transition-opacity duration-200`}
        src={img[`${pathname}Tablet`]!}
        placeholder="blur"
        priority={true}
        onLoadingComplete={() => setLoaded(true)}
        sizes="100vw"
        alt="background image"
      />
      <Image
        className={`hidden h-screen w-screen object-cover object-center lg:block ${
          loaded ? "opacity-100" : " animate-pulse opacity-50"
        } transition-opacity duration-200`}
        src={img[`${pathname}Desktop`]!}
        placeholder="blur"
        priority={true}
        onLoadingComplete={() => setLoaded(true)}
        sizes="100vw"
        alt="background image"
      />
    </div>
  )
}
