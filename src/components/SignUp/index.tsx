import React, { useState } from 'react'

import { MyForm, MyFormikField, MyButton } from 'adapters'
import useMyFormik from 'hooks/useMyFormik'
import authenticationActions from 'services/authentication/actions'
import { ISignUp } from 'interfaces/IAuthentication'
import { AuthError } from 'constants/authErrors'
import styles from './styles.module.css'
import PasswordRecovery from './PasswordRecovery'

const SignUp = () => {
  const [error, setError] = useState('')

  const onSubmit = async ({ name, email, password }: ISignUp) => {
    const userPayload = {
      name,
      email,
      password,
    }
    const { user, error } = await authenticationActions.signUp(userPayload)

    if (error) {
      setError(error)
    }
  }

  const formik = useMyFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit,
  })

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <div className={styles.backgroundbeige}>
          <span className={styles.black_circle}></span>
          <span className={styles.app_name}>YouList</span>
        </div>

        <div className={styles.borderform}>
          <div className={styles.title}></div>
          <MyForm context={formik}>
            <MyFormikField name="name" label="Name" />
            <MyFormikField name="email" label="Email" />
            <MyFormikField name="password" label="Password" />
            <MyFormikField name="confirm_password" label="Confirm Password" />

            <div className={styles.end}>
              <MyButton
                color="primary"
                variant="outlined"
                className={styles.button}
                type="submit"
                loading={formik.isSubmitting}
              >
                Register
              </MyButton>
            </div>
          </MyForm>

          {error === AuthError.EmailInUse && <PasswordRecovery />}
        </div>
      </div>
    </div>
  )
}

export default SignUp
