import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import usePagination from 'use-pagination-mui'

import {
  MyForm,
  MyFormikField,
  MyButton,
  MyInputAdornment,
  MyPagination,
} from '../../../adapters'
import useApiCall from '../../../hooks/apiCall'
import useMyFormik from '../../../hooks/useMyFormik'
import { IAnnotationForm, IAnnotation } from '../../../interfaces/IAnnotation'
import annotationsActions from '../../../redux/annotations/actions'
import { annotationsSelector } from '../../../redux/annotations/slice'
import styles from './styles.module.css'

const Annotations = () => {
  const params = useParams()
  const videoId = params?.videoId

  const annotations = useSelector(annotationsSelector)

  const { changePageEventBefore, perPage, arrayPage } = usePagination(10)

  const submitAnnotation = async (values: IAnnotationForm) => {
    const presentTime = window['youtubePlayer']?.getCurrentTime?.()
    const annotation = {
      video_id: videoId,
      text: values.annotation,
      videotime: presentTime,
    }

    await annotationsActions.addAnnotation(annotation)
    formik.setFieldValue('annotation', '')
  }

  const formik = useMyFormik({
    initialValues: {
      annotation: '',
    },
    onSubmit: submitAnnotation,
  })

  const [currentTime, setCurrentTime] = useState('0:00')

  const setMinuteAndSecond = () => {
    window?.['youtubePlayer']?.pauseVideo?.()
    const presentTime = window['youtubePlayer']?.getCurrentTime?.()
    const minute = fancyTimeFormat(presentTime)
    setCurrentTime(minute)
  }

  const goToSpecificTime = (videotime: number) => {
    window['youtubePlayer']?.seekTo?.(videotime)
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

  const [loading] = useApiCall(
    () => annotationsActions.getAnnotations(videoId),
    []
  )

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
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
                value={formik.values.annotation}
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
