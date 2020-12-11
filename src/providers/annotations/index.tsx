import React, {createContext, useContext, useState, } from 'react';
import { get, post } from '../../utils/agent';
import { annotationsPath } from '../../constants/endpoint';
import { IAnnotation, IAddAnnotation } from '../../interfaces/IAnnotation';
import { insertAnnotationAtTheRightPosition, rounder } from '../../utils/helpers'

export interface IAnnotationsContext {
  annotations: IAnnotation[]
  isLoading: boolean
  error: any
  getAnnotations: (video_id: number) => void;
  isAdding: boolean
  errorAddAnnotation: any
  addAnnotation: (list: IAddAnnotation) => void;
}

function Annotations(): IAnnotationsContext {
  const [annotations, setAnnotations] = useState<IAnnotation[]>(undefined!);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getAnnotations = async (video_id: number) => {
    setError(undefined);
    setAnnotations(undefined!);
    setIsLoading(true);
    try {
      const annotations = await get(`${annotationsPath}/video/${video_id}`);
      setAnnotations(annotations);
    } catch (e) {
      setError(e);
      setAnnotations(undefined!);
    } finally {
      setIsLoading(false);
    }
  };

  const [isAdding, setIsAdding] = useState(false);
  const [errorAddAnnotation, setErrorAddAnnotation] = useState(undefined);

  const addAnnotation = async (annotation: IAddAnnotation) => {
    setErrorAddAnnotation(undefined);
    setIsAdding(true);
    try {
      const { data }: any = await post(`${annotationsPath}`, annotation);

      const newAnnotations = insertAnnotationAtTheRightPosition(data, annotations);

      setAnnotations(newAnnotations);
    } catch (e) {
      setError(e);
      setAnnotations(undefined!);
    } finally {
      setIsLoading(false);
    }
  };

  return { annotations, isLoading, error, getAnnotations, isAdding, errorAddAnnotation , addAnnotation };
}

const AnnotationsContext = createContext<IAnnotationsContext>({} as IAnnotationsContext)
export const useAnnotations = () => useContext(AnnotationsContext)

type IProviderProps = {
  children: React.ReactNode
};

const AnnotationsProvider = ({children}: IProviderProps) => {
  return (
    <AnnotationsContext.Provider value={Annotations()}>
        {children}
    </AnnotationsContext.Provider>
  )
}

export default AnnotationsProvider;