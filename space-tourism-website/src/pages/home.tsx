import Link from "next/link"

export default function home() {
  return (
    <>
      <main className="mx-auto max-w-[375px] sm:max-w-[550px] lg:max-w-none">
        <div className="flex h-[700px] flex-col items-center justify-between px-[7vw] sm:pt-10 lg:mx-auto lg:h-[550px] lg:w-[90vw] lg:flex-row">
          <section className="flex h-full flex-col items-center justify-evenly lg:h-[80%] lg:w-[50%] lg:items-start lg:pr-20">
            <h1 className="font-BarlowCondensed text-xl font-light tracking-widest text-slate-300 lg:text-2xl">
              SO, YOU WANT TO TRAVEL TO
            </h1>
            <h1 className="select-none font-Bellefair text-8xl transition-all sm:text-[10rem]">
              SPACE
            </h1>
            <article className="text-center font-BarlowCondensed text-lg font-light tracking-wider text-slate-300 lg:text-left">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </article>
          </section>
          <div className="lg:w-[50%]">
            <Link href="/destination">
              <div className=" mx-auto h-40 w-40 cursor-pointer select-none rounded-full bg-slate-100 transition-all duration-100 hover:bg-black/30 hover:backdrop-blur-md active:border-2 lg:translate-x-[100%] lg:translate-y-[60%] lg:scale-150">
                <h1 className="text-center font-Bellefair text-2xl leading-[10rem] text-slate-700 transition-all duration-100 hover:text-slate-200">
                  EXPLORE
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
