export const baseUrl = 'http://localhost:9000/api'

export const youtubeImg = (youtubeId: string) =>
  `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`

// BASE
export const baseService = `${baseUrl}`

//LISTS
export const listsPath = `${baseService}`

//LIST
export const listPath = `${baseService}`

//VIDEOS
export const videosPath = `${baseService}/videos`

//VIDEO
export const videoPath = `${baseService}/video`

//Annotations
export const annotationsPath = `${baseService}/annotations`
