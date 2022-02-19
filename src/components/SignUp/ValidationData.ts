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
  name: Yup.string()
    .required('Required Field')
    .min(5, 'Must have more than 5 letters'),

  email: Yup.string().email().required('Required Field'),

  confirm_password: Yup.string()
    .required('Required Field')
    .oneOf([Yup.ref('password'), null], "Password don't match"),
})
