import React from 'react'

import { MyForm, MyFormikField, MyButton } from 'adapters'
import useMyFormik from '../../hooks/useMyFormik'

import styles from './styles.module.css'

const SignUp = () => {
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
        <div className={styles.backgroundbeige}>
          <span className={styles.black_circle}></span>
          <span className={styles.app_name}>YouList</span>
        </div>

        <div className={styles.borderform}>
          <div className={styles.title}>
            {/* <span className={styles.register}>Register</span> */}
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default SignUp
