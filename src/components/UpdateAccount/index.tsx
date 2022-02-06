import React, { useState, useEffect } from 'react'

import { MyForm, MyFormikField, MyButton } from 'adapters'
import useMyFormik from 'hooks/useMyFormik'
import authenticationActions from 'services/authentication/actions'
import { IUpdateAccount, IUpdateAccountForm } from 'interfaces/IAuthentication'
import styles from './styles.module.css'

const UpdateAccount = () => {
  const [token, setToken] = useState('')

  const getToken = async () => {
    const params = new URL(window.location.href.replace(/#/g, '?'))
    const accessToken = params.searchParams.get('access_token')
    setToken(accessToken as string)
  }

  const onSubmit = async ({ new_password }) => {
    await authenticationActions.updateAccount(token, new_password)
  }

  const formik = useMyFormik<IUpdateAccountForm>({
    initialValues: {
      new_password: '',
      confirm_new_password: '',
    },
    onSubmit,
  })

  useEffect(() => {
    getToken()
  }, [])

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
            <MyFormikField name="new_password" label="New Password" />
            <MyFormikField
              name="confirm_new_password"
              label="Confirm New Password"
            />

            <div className={styles.end}>
              <MyButton
                color="primary"
                variant="outlined"
                className={styles.button}
                type="submit"
                loading={formik.isSubmitting}
              >
                Update Password
              </MyButton>
            </div>
          </MyForm>
        </div>
      </div>
    </div>
  )
}

export default UpdateAccount
