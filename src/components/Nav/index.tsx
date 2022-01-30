import React from 'react'
import authenticationActions from '../../services/authentication/actions'
import styles from './styles.module.css'

const Nav = () => {
  const logout = () => {
    authenticationActions.logout()
  }
  return (
    <header className={styles.header}>
      <div className={styles.logout}>
        <a onClick={logout} className={styles.logoutButton}>
          Logout
        </a>
      </div>
      <a className={styles.black_circle} href="/"></a>
      <div className={styles.app_name}>YouList</div>
      <h2 className={styles.title_text}>
        your own customized video list, make your annotations
      </h2>
    </header>
  )
}

export default Nav
