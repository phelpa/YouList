import React from 'react'

import styles from './styles.module.css'

const Nav = () => {
  return (
    <header className={styles.header}>
      <a className={styles.black_circle} href="/"></a>
      <h1 className={styles.app_name}>YouList</h1>
      <h2 className={styles.title_text}>
        your own customized video list, create your annotations
      </h2>
    </header>
  )
}

export default Nav
