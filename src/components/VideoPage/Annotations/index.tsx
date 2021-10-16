import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import usePagination from 'use-pagination-mui'

import {
  MyForm,
  MyFormikField,
  MyButton,
  MyInputAdornment,
  MyPagination,
} from '../../../adapters'
import useMyFormik from '../../../hooks/useMyFormik'
import { IAnnotationField, IAnnotation } from '../../../interfaces/IAnnotation'
import { useAnnotations } from '../../../providers/annotations'
import styles from './styles.module.css'

const Annotations = () => {
  const params = useParams()
  const videoId = params?.videoId

  const { annotations, isLoading, getAnnotations, addAnnotation } =
    useAnnotations()

  const { changePageEventBefore, perPage, arrayPage } = usePagination(10)

  const submitAnnotation = (values: IAnnotationField) => {
    const presentTime = window['player']?.getCurrentTime?.()
    const annotation = {
      video_id: videoId,
      text: values.annotation,
      videotime: presentTime,
    }
    addAnnotation(annotation)
  }

  const formik = useMyFormik({
    initialValues: {
      annotation: '',
    },
    onSubmit: submitAnnotation,
  })

  const [currentTime, setCurrentTime] = useState('0:00')

  const setMinuteAndSecond = () => {
    window?.['player']?.pauseVideo?.()
    const presentTime = window['player']?.getCurrentTime?.()
    const minute = fancyTimeFormat(presentTime)
    setCurrentTime(minute)
  }

  const goToSpecificTime = (videotime: number) => {
    window['player']?.seekTo?.(videotime)
  }

  const fancyTimeFormat = (duration: number) => {
    // Hours, minutes and seconds
    let hrs = ~~(duration / 3600)
    let mins = ~~((duration % 3600) / 60)
    let secs = ~~duration % 60

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = ''

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '')
    ret += '' + secs
    return ret
  }

  useEffect(() => {
    getAnnotations(videoId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <article className={styles.annotations}>
          <div className={styles.content}>
            {annotations
              ?.slice(arrayPage * perPage, arrayPage * perPage + perPage)
              ?.map((annotation: IAnnotation, i: number) => (
                <div className={styles.annotation} key={i}>
                  <span
                    className={styles.time}
                    onClick={() => goToSpecificTime(annotation.videotime)}
                  >
                    {fancyTimeFormat(annotation.videotime)}
                  </span>

                  <span className={styles.annotation_text}>
                    {annotation.text}
                  </span>
                </div>
              ))}

            {annotations?.length > perPage && (
              <MyPagination
                count={Math.ceil(annotations?.length / perPage)}
                page={arrayPage}
                onChange={changePageEventBefore}
                hidePrevButton
                hideNextButton
              />
            )}

            <MyForm context={formik}>
              <MyFormikField
                InputProps={{
                  startAdornment: (
                    <MyInputAdornment position="start">
                      {currentTime}
                    </MyInputAdornment>
                  ),
                }}
                onClick={setMinuteAndSecond}
                size="small"
                name="annotation"
                label="Annotation"
              />
              <MyButton type="submit" />
            </MyForm>
          </div>
        </article>
      )}
    </>
  )
}

export default Annotations
