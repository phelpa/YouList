import React, { memo } from 'react'

import { MyIcon } from '../../../adapters'
import styles from './styles.module.css'

interface IProps {
  callback: Function
  icon: string
  description: string
}

const ActionIcon = memo((props: IProps) => {
  return (
    <article onClick={() => props.callback()} className={styles.article}>
      <div className={styles.action}>
        <div className={styles.icon}>
          <MyIcon fontSize="large">{props.icon}</MyIcon>
        </div>

        <p className={styles.description}>
          <b>{props.description}</b>
        </p>
      </div>
    </article>
  )
})

export default ActionIcon
