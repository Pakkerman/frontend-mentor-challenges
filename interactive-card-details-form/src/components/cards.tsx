interface CardFrontProps {
  holderName: string
  cardNumber: string
  month: string
  year: string
}

export function CardFront(props: CardFrontProps) {
  const { holderName, cardNumber, month, year } = props
  return (
    <div className="bg-fit flex h-[240px] w-[447px] flex-col justify-between overflow-hidden rounded-xl bg-cardFront px-8 py-6 shadow-2xl">
      <div className="left-0 top-0 flex items-center space-x-4 ">
        <div className="h-12 w-12 rounded-full border-2 border-LightGrayishViolet bg-white" />
        <div className="h-6 w-6 rounded-full border-2 border-LightGrayishViolet" />
      </div>
      <div className="space-y-6 text-LightGrayishViolet">
        <p className="text-3xl tracking-wider">
          {cardNumber.slice(0, 4) || "0000 0000 0000 0000"}{" "}
          {cardNumber.slice(4, 8)} {cardNumber.slice(8, 12)}{" "}
          {cardNumber.slice(12, 16)}
        </p>
        <div className="flex justify-between">
          <p className="">{holderName.toUpperCase() || "JANE APPLESEED"}</p>
          <p className="">
            {month ? (month.length === 1 ? "0" + month : month) : "00"} /{" "}
            {year ? (year.length === 1 ? "0" + year : year) : "00"}
          </p>
        </div>
      </div>
    </div>
  )
}

interface CardBackProps {
  CVC: string
}

export function CardBack(props: CardBackProps) {
  const { CVC } = props
  return (
    <div className="bg-fit h-[240px] w-[447px]  overflow-hidden rounded-xl bg-cardBack shadow-2xl ">
      <p className="translate-x-[353px] translate-y-[107.5px] text-xl tracking-wider text-LightGrayishViolet">
        {CVC || "000"}
      </p>
    </div>
  )
}
