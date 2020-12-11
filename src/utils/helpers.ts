

import { IAnnotation } from '../../src/interfaces/IAnnotation';

export const rounder = (float: number) => {
  return (Math.round(parseFloat(`${float}}`)*100)/100)
}

export const insertAnnotationAtTheRightPosition = (data: IAnnotation, annotations: IAnnotation[]) => {
  const newAnnotations = [...annotations];

  if(!annotations.length) {
    newAnnotations.unshift(data)
    return newAnnotations;
  }

  if(rounder(data.videotime) < rounder(newAnnotations[0]['videotime']) ) {
    newAnnotations.unshift(data)
    return newAnnotations;
  }

  const index = newAnnotations.findIndex( (item,i) => {
    if(rounder(data.videotime) > rounder(newAnnotations[i]['videotime']) &&
       rounder(data.videotime) < rounder(newAnnotations[i+1]?.['videotime']) ){
      return true;
    }
  })

  if(index === -1) {
    newAnnotations.push(data);
  }

  if(index !== -1) {
    newAnnotations.splice(index + 1, 0, data);
  }

  return newAnnotations
}
