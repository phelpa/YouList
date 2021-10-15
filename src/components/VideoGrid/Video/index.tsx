import React from 'react'

import { Link } from 'react-router-dom'

import { IVideo } from '../../../interfaces/IVideo'
import styles from './styles.module.css'

interface IProps {
  video: IVideo
}

const Video = ({ video }: IProps) => {
  return (
    <article className={styles.article}>
      <iframe
        title="iframeYoutube"
        className={`${styles.iframe} w-100`}
        src={`https://www.youtube.com/embed/${video.youtube_id}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className={styles.description}>
        <Link
          to={`/list/${video.list_id}/video/${video.id}`}
          className={styles.link}
        >
          <h1 className={styles.video_title}>{video.title}</h1>
        </Link>

        <p className={styles.description_text}>{video.description}</p>
      </div>
    </article>
  )
}

export default Video
