import React, { useState } from 'react'

import { MyForm, MyFormikField, MyButton } from 'adapters'
import useMyFormik from '../../hooks/useMyFormik'
import LoginVideoPage from './LoginVideoPage'
import authenticationsActions from 'services/authentication/actions'
import styles from './styles.module.css'
import useModal from 'hooks/useModal'
import PasswordRecovery from 'components/Login/PasswordRecovery'
import history from 'CreateHistory'
import { AuthError } from 'constants/authErrors'

const Login = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const [error, setError] = useState('')

  const onSubmit = async (values) => {
    setError('')
    const { error } = await authenticationsActions.signIn(values)

    if (error) {
      setError(error)
    }
  }

  const onRegisterClick = () => {
    history.push('/signup')
  }

  const formik = useMyFormik({
    initialValues: {
      email: '',
      password: '',
    },
    removeEmptySpace: true,
    onSubmit,
  })

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <div className={styles.title}>
          <span className={styles.black_circle}></span>
          <span className={styles.app_name}>YouList</span>
        </div>
        <MyForm context={formik}>
          <MyFormikField name="email" label="Email" />
          <MyFormikField name="password" label="Password" type="password" />
          {error === AuthError.InvalidCredentials && (
            <div className={styles.passwordError}>Invalid Credentials </div>
          )}
          <div className={styles.belowPassword}>
            <div className={styles.hoverPointer} onClick={openModal}>
              Forgot Password?
            </div>
            <div className={styles.hoverPointer} onClick={onRegisterClick}>
              Not a member? Register now
            </div>
          </div>

          <div className={styles.end}>
            <MyButton
              color="primary"
              variant="outlined"
              className={styles.button}
              type="submit"
              loading={formik.isSubmitting}
            >
              Login
            </MyButton>
          </div>
        </MyForm>

        {isOpen && <PasswordRecovery closeModal={closeModal} />}
      </div>
      <LoginVideoPage />
    </div>
  )
}

export default Login
