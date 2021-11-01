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

export const loadYoutubeApi = () => {
  if (typeof window['youtubePlayer']?.getCurrentTime !== 'function') {
    // 2. This code loads the IFrame Player API code asynchronously.
    let tag = document.createElement('script')

    tag.src = 'https://www.youtube.com/iframe_api'
    let firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag?.parentNode!.insertBefore(tag, firstScriptTag)

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    let YT //declaring outside the function to avoid 'not defined'
    window['onYouTubeIframeAPIReady'] = function () {
      YT = window['YT'] //youtube API expects the YT object to be
      //assigned to the window object
      window['youtubePlayer'] = new YT.Player('videoplayer', {})
    }
  }
}
