import Image from "next/image"

export const Logos = () => {
  return (
    <div className="flex justify-between space-x-4 p-4">
      <Image
        className="h-6 w-[20%]  object-scale-down "
        width={114}
        height={20}
        src="assets/client-databiz.svg"
        alt="databiz logo"
      />
      <Image
        className="h-6 w-[20%] object-scale-down"
        width={73}
        height={36}
        src="assets/client-audiophile.svg"
        alt="audiophile logo"
      />
      <Image
        className="h-6 w-[20%] object-scale-down"
        width={90}
        height={20}
        src="assets/client-meet.svg"
        alt="meet logo"
      />
      <Image
        className="h-6 w-[20%] object-scale-down"
        width={83}
        height={24}
        src="assets/client-maker.svg"
        alt="maker logo"
      />
    </div>
  )
}

export default Logos
