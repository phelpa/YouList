import { useEffect } from 'react'

const loadYoutubeApi = () => {
  // useEffect(() => {
  //     loadYoutubeAPI()
  //   }
  // }, [])
  if (!window['player']) {
    // 2. This code loads the IFrame Player API code asynchronously.
    let tag = document.createElement('script')

    tag.src = 'https://www.youtube.com/iframe_api'
    let firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag?.parentNode!.insertBefore(tag, firstScriptTag)

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    let YT //declaring outside the function to avoid 'not defined'
    window['onYouTubeIframeAPIReady'] = function() {
      YT = window['YT'] //youtube API expects the YT object to be
      //assigned to the window object
      window['player'] = new YT.Player('videoplayer', {})
    }
  }
}

export default loadYoutubeApi
