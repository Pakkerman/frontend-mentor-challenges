import { useEffect, useState } from "react"
import data from "~/data.json"

const MAX_BAR_HEIGHT = 200
const DAY_OF_THE_WEEK = new Date().getDay()

type BarProps = {
  height: number
  idx: number
}

const Bar = ({ height, idx }: BarProps) => {
  return (
    <li className="group relative w-10 transition-all md:w-14">
      <div
        className={`mx-auto w-8 rounded-md transition-all hover:cursor-pointer  hover:opacity-75 md:w-10  ${
          idx + 1 === DAY_OF_THE_WEEK ? "bg-PrimaryCyan" : "bg-PrimarySoftRed "
        }`}
        style={{ height }}
      />
      <div className="absolute left-[50%] top-[-37.5px] z-10 w-16 translate-x-[-50%] rounded-md bg-DarkBrown opacity-0 transition-all group-hover:opacity-100">
        <p className="text-center leading-8 text-VeryPaleOrange">
          ${data[idx]?.amount}
        </p>
      </div>
    </li>
  )
}

type WeekdayLabelProps = { day: string }

const WeekdayLabel = ({ day }: WeekdayLabelProps) => {
  return (
    <li key={day} className="w-10 text-center text-sm transition-all md:w-14">
      {day}
    </li>
  )
}

const Chart = () => {
  const [barHeights, setBarHeights] = useState<Array<number>>([])

  useEffect(() => {
    let maxAmount = 0
    data.forEach((item) => (maxAmount = Math.max(maxAmount, item.amount)))
    setBarHeights(
      data.map((item) => Math.ceil((item.amount / maxAmount) * MAX_BAR_HEIGHT))
    )
  }, [])
  return (
    <>
      <ul className=" flex h-[250px] w-full items-end justify-between text-sm">
        {barHeights.map((height, idx) => (
          <Bar key={idx} height={height} idx={idx} />
        ))}
      </ul>
      <ul className="flex justify-between ">
        {data.map((item, idx) => (
          <WeekdayLabel key={idx} day={item.day} />
        ))}
      </ul>
    </>
  )
}

export default Chart
