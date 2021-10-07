import React, { useEffect, useState } from 'react'

import { Button, InputAdornment } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { Field, Form, Formik } from 'formik'
import { useParams } from 'react-router-dom'
import usePagination from 'use-pagination-mui'

import { IAnnotationField, IAnnotation } from '../../../interfaces/IAnnotation'
import { useAnnotations } from '../../../providers/annotations'
import TextFormField from '../../Shared/TextFormField'

const Annotations = () => {
  const params = useParams()
  const videoId = params?.videoId

  const {
    annotations,
    isLoading,
    getAnnotations,
    addAnnotation
  } = useAnnotations()

  const { changePageEventBefore, perPage, arrayPage } = usePagination(10)
  const [currentTime, setCurrentTime] = useState('0:00')

  const submitAnnotation = (values: IAnnotationField) => {
    const presentTime = window['player']?.getCurrentTime?.()
    const annotation = {
      video_id: videoId,
      text: values.annotation,
      videotime: presentTime
    }
    addAnnotation(annotation)
  }

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
  }, [])

  return (
    <>
      {isLoading && <div>Carregando...</div>}
      {!isLoading && (
        <article className="vh-50 br2 ba dark-gray b--black-10 mh1 bn">
          <div className="pa3 b--black-10">
            <div className="baskerville i bn b f4">Anotações</div>
            {annotations
              ?.slice(arrayPage * perPage, arrayPage * perPage + perPage)
              ?.map((annotation: IAnnotation, i: number) => (
                <div className="mv2" key={i}>
                  <span
                    className="f6 f5-ns lh-copy measure baskerville ph1 mid-gray underline-hover pointer"
                    onClick={() => goToSpecificTime(annotation.videotime)}
                  >
                    {fancyTimeFormat(annotation.videotime)}
                  </span>

                  <span className="f6 f5-ns lh-copy fs-normal measure pl1">
                    {annotation.text}
                  </span>
                </div>
              ))}

            {annotations?.length > perPage && (
              <Pagination
                count={Math.ceil(annotations?.length / perPage)}
                page={arrayPage}
                onChange={changePageEventBefore}
                hidePrevButton
                hideNextButton
              />
            )}

            <Formik
              initialValues={{} as IAnnotationField}
              onSubmit={data => submitAnnotation(data)}
            >
              <Form>
                <Field
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {currentTime}
                      </InputAdornment>
                    )
                  }}
                  onClick={setMinuteAndSecond}
                  size="small"
                  fullWidth
                  margin="normal"
                  name="annotation"
                  label="Anotação"
                  type="text"
                  // multiline
                  component={TextFormField}
                />
                <Button type="submit" />
              </Form>
            </Formik>
          </div>
        </article>
      )}
    </>
  )
}

export default Annotations
