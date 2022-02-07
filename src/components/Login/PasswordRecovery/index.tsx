import React from 'react'
import useMyFormik from 'hooks/useMyFormik'
import { MyForm, MyFormikField, MyButton } from 'adapters'
import styles from './styles.module.css'
import authenticationActions from 'services/authentication/actions'
import { MyDialog } from 'adapters'

interface IProps {
  closeModal: () => void
}

const PasswordRecovery = ({ closeModal }: IProps) => {
  const onSubmit = async ({ email }) => {
    await authenticationActions.resetPassword(email)
    closeModal()
  }

  const formik = useMyFormik({
    initialValues: {
      email: '',
    },
    onSubmit,
  })

  return (
    <MyDialog maxWidth="xs" fullWidth={true} open={true} onClose={closeModal}>
      <div className={styles.recoveryPassword}>
        <div>
          Forgot your account’s password? Enter your email address and we’ll
          send you a recovery link.
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
    </MyDialog>
  )
}

export default PasswordRecovery
