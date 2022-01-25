import { ClipboardEvent } from 'react'

const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
  e.stopPropagation()
  e.preventDefault()

  const clipboardData = e.clipboardData || window['clipboardData']
  const pastedData = clipboardData.getData('Text')

  return pastedData
}

const getYoutubeId = (url: string) => {
  if (!url) return
  const myregexp =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi

  if (myregexp) {
    const youtubeUrl = url.match(myregexp)
    if (youtubeUrl) {
      const youtubeUrlString = youtubeUrl![0]
      const youtubeId = youtubeUrlString?.slice(-11)
      return youtubeId
    }
  }
  return url
}

export const retrieveYoutubeIdFromClipBoard = (
  e: ClipboardEvent<HTMLInputElement>
) => {
  const pastedData = handlePaste(e)
  const youtubeId = getYoutubeId(pastedData)
  return youtubeId
}
