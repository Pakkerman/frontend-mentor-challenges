import Link from "next/link"
import Image from "next/image"
import CustomButton from "~/components/CustomButton"
import Layout from "~/components/Layout"
import { useRouter } from "next/router"

export default function Success() {
  const router = useRouter()
  const email = router.query.slug
  return (
    <Layout>
      <div className=" flex h-full w-full max-w-md flex-col bg-slate-100 sm:h-[450px] sm:w-[450px] sm:max-w-5xl sm:flex-row-reverse sm:items-center sm:justify-center sm:rounded-3xl sm:p-6">
        <div className="flex h-full flex-col justify-between p-8 sm:px-6 sm:py-4">
          <div className=" flex h-[80%] flex-col justify-center space-y-8 sm:justify-evenly sm:space-y-4">
            <Image
              width={64}
              height={64}
              className="h-16 w-16 sm:h-14 sm:w-14"
              src="/assets/images/icon-success.svg"
              alt=""
            />
            <h1 className="w-full font-RobotoBold text-4xl sm:text-5xl ">
              Thanks for subscribing!
            </h1>
            <p>
              A confirmation email has been sent to
              <span className="font-RobotoBold"> {email} </span>
              Please open it and click the button inside to confirm your
              suscription
            </p>
          </div>
          <Link href="/#">
            <CustomButton buttonText="Dismiss Message" />
          </Link>
        </div>
      </div>
    </Layout>
  )
}
