import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import Layout from "~/components/Layout"
import CustomButton from "~/components/CustomButton"

const EMAIL_REGEX = /^[A-z0-9]+@[A-z0-9]+\.[A-z]+$/

export default function Home() {
  const [email, setEmail] = useState<string>("")
  const [isValid, setIsValid] = useState<boolean>(false)
  const [displayError, setDisplayError] = useState<boolean>(true)

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const email = event.target.value
    setEmail(email)
    validate(email)
  }

  const validate = (email: string): void => {
    const isValidEmail = EMAIL_REGEX.test(email)
    setIsValid(isValidEmail)
    setDisplayError(isValidEmail)
  }

  return (
    <Layout>
      <div className=" flex h-full w-full max-w-md flex-col bg-slate-100 sm:h-[80%] sm:w-[80%] sm:max-w-5xl sm:flex-row-reverse sm:items-center sm:justify-center sm:rounded-3xl sm:p-6">
        <div className="h-[284px] shrink overflow-hidden rounded-b-2xl sm:hidden">
          <Image
            width={500}
            height={500}
            className="h-full w-full object-cover"
            src="assets/images/illustration-mobile.svg"
            alt="cover image"
          />
        </div>
        <div className="hidden h-full overflow-hidden rounded-3xl md:block">
          <Image
            width={500}
            height={500}
            className="h-full w-full object-cover object-right"
            src="assets/images/illustration-desktop.svg"
            alt="cover image"
          />
        </div>
        <section className=" flex grow flex-col justify-evenly px-8 sm:items-start sm:space-y-6">
          <h1 className="w-full font-RobotoBold text-4xl sm:text-[5vw] sm:leading-[4vw]">
            Stay updated!
          </h1>
          <h1 className="w-full">
            Join 60,000+ product managers receiving monthly updates on:
          </h1>
          <ul className="w-full space-y-4">
            <li className="flex items-start space-x-4 ">
              <Image
                height={20}
                width={20}
                src="assets/images/icon-list.svg"
                alt="list icon"
              />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex items-start space-x-4">
              <Image
                height={20}
                width={20}
                src="assets/images/icon-list.svg"
                alt="list icon"
              />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex items-start space-x-4">
              <Image
                height={20}
                width={20}
                src="assets/images/icon-list.svg"
                alt="list icon"
              />
              <p>And much more!</p>
            </li>
          </ul>

          <form className="flex w-full max-w-lg flex-col justify-center space-y-4 ">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between opacity-90">
                <label className="font-RobotoBold text-xs ">
                  Email Address
                </label>
                {!displayError && (
                  <p className=" font-RobotoBold text-xs text-red-500">
                    Valid Email Required
                  </p>
                )}
              </div>
              <input
                type="text"
                onChange={handleEmailChange}
                value={email}
                placeholder="email@company.com"
                className={`h-12 rounded-md border-[1px] p-3 shadow-inner
                outline-none transition-all
                hover:cursor-pointer
                focus:border-opacity-100
                ${
                  displayError
                    ? "border-slate-800 border-opacity-40 "
                    : "border-red-500 border-opacity-100 bg-red-100 bg-opacity-60"
                }`}
              />
            </div>
            <Link href={`${isValid ? `/success/${email}` : "/"}`}>
              <CustomButton buttonText=" Subscribe to monthly newsletter" />
            </Link>
          </form>
        </section>
      </div>
    </Layout>
  )
}
