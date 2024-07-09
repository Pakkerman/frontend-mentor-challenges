import * as yup from "yup"

export const formSchema = yup.object().shape({
  holderName: yup
    .string()
    .matches(/^[A-z\s-]+$/, "Must only contain alphabet letters")
    .max(30, "Exceed character limit")
    .required("Required"),
  cardNumber: yup
    .string()
    .matches(/^[0-9]+/, "Must only contain digits")
    .length(16, "Must contain 16 digits")
    .required("Required"),
  month: yup
    .number()
    .typeError("Invalid")
    .min(0, "Invalid month")
    .max(12, "Invalid month")
    .positive("No negative")
    .integer()
    .required("Required"),
  year: yup
    .number()
    .typeError("Invalid")
    .min(0, "Invalid year")
    .max(99, "Invalid year")
    .positive("No negative")
    .integer()
    .required("Required"),
  CVC: yup.string().length(3, "Must contain 3 digits").required("Required"),
})

export type FormFields = {
  holderName: string
  cardNumber: string
  month: string
  year: string
  CVC: string
}
