type PageHeadingProps = {
  text: string
  headingNumber: number
}

// For tailwind parsing
const content = [
  'before:content-["01_"]',
  'before:content-["02_"]',
  'before:content-["03_"]',
]

export const PageHeading = ({ text, headingNumber }: PageHeadingProps) => {
  return (
    <h1
      className={`text-center font-BarlowCondensed text-2xl font-light before:mx-2 before:font-medium before:text-slate-500 before:content-["0${headingNumber}_"] sm:mt-4 lg:m-0 lg:text-4xl`}
    >
      {text}
    </h1>
  )
}
