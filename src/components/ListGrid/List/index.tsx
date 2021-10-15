import React, { memo } from 'react'

import { Link } from 'react-router-dom'

import { youtubeImg } from '../../../constants/endpoint'
import { IList } from '../../../interfaces/IList'
import styles from './styles.module.css'

interface IProps {
  list: IList
}

const List = memo(({ list }: IProps) => {
  return (
    <article className={styles.article}>
      <img className={styles.image} src={youtubeImg(list.youtube_id)} alt="" />
      <div className={styles.description}>
        <Link className={styles.link} to={`/list/${list.id}`}>
          <h1 className={styles.video_title}>{list.title}</h1>
        </Link>
        <p className={styles.description_text}>{list.description}</p>
      </div>
    </article>
  )
})

export default List
