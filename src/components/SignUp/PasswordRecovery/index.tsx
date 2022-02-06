import React from 'react'
import useMyFormik from 'hooks/useMyFormik'
import { MyForm, MyFormikField, MyButton } from 'adapters'
import styles from './styles.module.css'
import authenticationActions from 'services/authentication/actions'

const PasswordRecovery = () => {
  const onSubmit = async ({ email }) => {
    console.log('entrou aqui')
    await authenticationActions.resetPassword(email)
  }

  const formik = useMyFormik({
    initialValues: {
      email: '',
    },
    onSubmit,
  })

  return (
    <div className={styles.recoveryPassword}>
      <div>
        Forgot your account’s password? Enter your email address and we’ll send
        you a recovery link.
      </div>
      <MyForm context={formik}>
        <MyFormikField name="email" label="Email" />
        <MyButton
          variant="outlined"
          className={styles.button}
          type="submit"
          loading={formik.isSubmitting}
        >
          Send Recovery Email
        </MyButton>
      </MyForm>
    </div>
  )
}

export default PasswordRecovery
