import React, { createContext, useContext, useState } from 'react'

import { annotationsPath } from '../../constants/endpoint'
import { IAnnotation, IAddAnnotation } from '../../interfaces/IAnnotation'
import { get, post } from '../../utils/agent'
import { insertAnnotationAtTheRightPosition } from '../../utils/helpers'

export interface IAnnotationsContext {
  annotations: IAnnotation[]
  isLoading: boolean
  error: any
  getAnnotations: (video_id: number) => void
  isAdding: boolean
  errorAddAnnotation: any
  addAnnotation: (list: IAddAnnotation) => void
}

function Annotations(): IAnnotationsContext {
  const [annotations, setAnnotations] = useState<IAnnotation[]>(undefined!)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const getAnnotations = async (video_id: number) => {
    setError(undefined)
    setAnnotations(undefined!)
    setIsLoading(true)
    try {
      const { annotations } = await get(`${annotationsPath}/get_annotations`, {
        video_id
      })
      setAnnotations(annotations)
    } catch (e) {
      setError(e)
      setAnnotations(undefined!)
    } finally {
      setIsLoading(false)
    }
  }

  const [isAdding, setIsAdding] = useState(false)
  const [errorAddAnnotation, setErrorAddAnnotation] = useState(undefined)

  const addAnnotation = async (annotationPayload: IAddAnnotation) => {
    setErrorAddAnnotation(undefined)
    setIsAdding(true)
    try {
      const { annotation }: any = await post(
        `${annotationsPath}/add_annotation`,
        annotationPayload
      )

      const newAnnotations = insertAnnotationAtTheRightPosition(
        annotation,
        annotations
      )

      setAnnotations(newAnnotations)
    } catch (e) {
      setError(e)
      setAnnotations(undefined!)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    annotations,
    isLoading,
    error,
    getAnnotations,
    isAdding,
    errorAddAnnotation,
    addAnnotation
  }
}

const AnnotationsContext = createContext<IAnnotationsContext>(
  {} as IAnnotationsContext
)

export const useAnnotations = () => useContext(AnnotationsContext)

type IProviderProps = {
  children: React.ReactNode
}

const AnnotationsProvider = ({ children }: IProviderProps) => {
  return (
    <AnnotationsContext.Provider value={Annotations()}>
      {children}
    </AnnotationsContext.Provider>
  )
}

export default AnnotationsProvider
