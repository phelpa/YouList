import React from 'react'

import { MyForm, MyFormikField, MyButton } from 'adapters'
import useMyFormik from '../../hooks/useMyFormik'
import LoginVideoPage from './LoginVideoPage'

import styles from './styles.module.css'

const Login = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  const formik = useMyFormik({
    initialValues: {
      email: '',
      password: '',
      youtube_id: '',
    },
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
          <MyFormikField name="password" label="Password" />
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
      </div>
      <LoginVideoPage />
    </div>
  )
}

export default Login
