import Image from "next/image"
import Footer from "~/components/Footer"

export function SuccessPage({
  setSubmitted,
  resetForm,
}: {
  setSubmitted: (state: boolean) => void
  resetForm: () => void
}) {
  return (
    <div className=" mx-auto w-[100vw] max-w-[375px] ">
      <div className=" flex h-[456px] flex-col items-center justify-center">
        <Image
          className="pb-12"
          width={84}
          height={84}
          src="/assets/images/icon-complete.svg"
          alt="Submitted Icon"
        />
        <div className="space-y-4 pb-12">
          <h1 className="text-center text-3xl tracking-widest text-VeryDarkViolet">
            THANK YOU!
          </h1>
          <p className="text-center text-DarkGrayishViolet">
            {"We've added your card details"}
          </p>
        </div>
        <button
          className="w-full rounded-lg bg-VeryDarkViolet p-4 text-LightGrayishViolet"
          onClick={() => {
            setSubmitted(false)
            resetForm()
          }}
        >
          Continue
        </button>
        <Footer />
      </div>
    </div>
  )
}
