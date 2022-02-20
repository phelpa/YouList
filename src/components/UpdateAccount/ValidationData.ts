import * as Yup from 'yup'

export const ValidationPassword = Yup.string()
  .required('')
  .matches(/[0-9]/, '× Must have a number')
  .matches(/[a-z]/, '× Must have an lowercase letter')
  .matches(/[A-Z]/, '× Must have an uppercase letter')
  .matches(/[!#@$%^&*)(+=._-]/, '× Must have a symbol')
  .min(6, '× Must have at least 6 characters')
  .nullable()

export const ValidationData = Yup.object().shape({
  confirm_new_password: Yup.string()
    .required('Required Field')
    .oneOf([Yup.ref('new_password'), null], "Passwords doesn't match"),
})
