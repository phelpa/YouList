import React, { createContext, useContext, useState } from 'react'

import { baseService } from '../../constants/endpoint'
import { IAnnotation, IAddAnnotation } from '../../interfaces/IAnnotation'
import { get, post } from '../../utils/agent'

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
  const [error, setError] = useState<unknown>(undefined)

  const getAnnotations = async (video_id: number) => {
    setError(undefined)
    setAnnotations(undefined!)
    setIsLoading(true)
    try {
      const { annotations } = await get(`${baseService}/get_annotations`, {
        video_id,
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
      const { annotation } = await post(
        `${baseService}/add_annotation`,
        annotationPayload
      )

      const newAnnotations = [...annotations, annotation]

      const sortedAnnotations = newAnnotations.sort(
        (a: IAnnotation, b: IAnnotation) => {
          return a.videotime - b.videotime
        }
      )
      setAnnotations(sortedAnnotations)
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
    addAnnotation,
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
