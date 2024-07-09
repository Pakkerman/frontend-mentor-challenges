import Head from "next/head"

// components
import { CardBack, CardFront } from "../components/cards"
import { CardForm } from "../components/CardForm"
import { useFormik } from "formik"
import { type FormFields, formSchema } from "~/formSchema/schema"
import { useState } from "react"
import { SuccessPage } from "../components/SuccessPage"

async function mockAPI() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

export default function Home() {
  const [submitted, setSubmitted] = useState<boolean>(false)

  const formik = useFormik<FormFields>({
    initialValues: {
      holderName: "",
      cardNumber: "",
      month: "",
      year: "",
      CVC: "",
    },

    validationSchema: formSchema,
    onSubmit: () => {
      void mockAPI().then(() => {
        setSubmitted(true)
      })
    },
  })

  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive card details form</title>
        <meta
          name="description"
          content="A Frontend Mentor Challenge Built With create-t3-app"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex flex-col items-center bg-slate-800 ">
        <div className="flex w-full flex-col items-center bg-White md:flex-row">
          <section className="relative h-[330px] md:h-full md:max-w-[483px] md:flex-[1_1] ">
            <div className="h-[240px] w-[100vw] bg-mobile md:hidden" />
            <div className="hidden h-[100vh] max-h-[900px] min-h-[500px] bg-desktop transition-all md:block" />
            <div className="absolute left-[55%] top-[-20px] translate-x-[-45%] scale-[60%] transition-all md:left-[50%] md:top-[45%] md:translate-x-[-50%] md:scale-[65%] xl:left-[40%] xl:top-[50%] xl:translate-x-0 xl:scale-90">
              <CardBack CVC={formik.values.CVC} />
            </div>
            <div className="absolute left-[45%] top-[90px] translate-x-[-55%] scale-[60%] transition-all md:left-[50%] md:top-[15%] md:translate-x-[-50%] md:scale-[65%] xl:left-[20%] xl:top-[17%] xl:translate-x-0 xl:scale-90">
              <CardFront
                holderName={formik.values.holderName}
                cardNumber={formik.values.cardNumber}
                year={formik.values.year}
                month={formik.values.month}
              />
            </div>
          </section>
          <section className=" px-6 md:flex-[1_1] ">
            {submitted ? (
              <SuccessPage
                setSubmitted={setSubmitted}
                resetForm={formik.resetForm}
              />
            ) : (
              <CardForm formik={formik} />
            )}
          </section>
        </div>
      </main>
    </>
  )
}
