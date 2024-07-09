import Head from "next/head"
import { useEffect, useState } from "react"

import data from "~/data.json"

// Components
import Chart from "~/components/Chart"
import Footer from "~/components/Footer"

export default function Home() {
  const [balance, setBalance] = useState<string>("0.00")

  useEffect(() => {
    setBalance((Math.random() * 1200).toFixed(2))
  }, [])

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Challenge by Frontend Mentor built with Create T3 App"
        />
        <link rel="icon" href="/assets/favicon.png" />
        <title>Frontend Mentor | Expenses chart component</title>
      </Head>
      <main className="m-auto flex h-[100dvh] min-h-[700px] w-[375px] flex-col justify-center space-y-4 p-4 transition-all md:w-[500px] ">
        <section className="flex h-24 items-center justify-between rounded-xl bg-PrimarySoftRed p-6 text-VeryPaleOrange">
          <div>
            <h1 className="">My balance</h1>
            <p className="text-2xl font-bold">${balance}</p>
          </div>
          <div className="relative h-10 w-10">
            <div className=" absolute right-5 h-10 w-10 translate-x-5 rounded-full bg-DarkBrown" />
            <div className=" absolute right-5 h-10 w-10 rounded-full border-2 border-VeryPaleOrange" />
          </div>
        </section>
        <section className="flex flex-col items-stretch justify-between rounded-xl bg-VeryPaleOrange p-6 text-MediumBrown transition-all md:p-8">
          <h1 className="text-left text-2xl font-bold text-DarkBrown">
            Spending - Last 7 days
          </h1>

          <Chart />

          <div className="my-4 border-[1px]" />
          <div className="flex w-full items-end justify-between">
            <div>
              <h1 className="">Total this week</h1>
              <p className="text-left text-2xl font-bold text-DarkBrown">
                $
                {data.reduce(
                  (accumulator, item) => accumulator + item.amount,
                  0
                )}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-DarkBrown">+2.4%</p>
              <p>from last week</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
