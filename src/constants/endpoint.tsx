export const baseUrl = 'http://192.168.0.13:9000/api'

export const youtubeImg = (youtubeId: string) =>
  `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`

// BASE
export const baseService = `${baseUrl}`

//LISTS
export const listsPath = `${baseService}`

//LIST
export const listPath = `${baseService}`

//VIDEOS
export const videosPath = `${baseService}`

//VIDEO
export const videoPath = `${baseService}`

//Annotations
export const annotationsPath = `${baseService}`
