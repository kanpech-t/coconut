import React, { useRef } from 'react'
import { AspectRatio } from './aspect-ratio'

const YouTubeShort = ({ videoId }) => {
  const iframeRef = useRef(null)

  const handlePlay = () => {
    iframeRef.current.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      '*',
    )
  }

  const handlePause = () => {
    iframeRef.current.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      '*',
    )
  }

  return (
    <div
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
      onClick={handlePlay}
      className="w-full max-w-[504px] h-[581px] xl:h-[869px] xl:mx-0 mx-auto"
      style={{
        overflow: 'hidden',
        borderRadius: '12px',
        cursor: 'pointer',
      }}
    >
      <AspectRatio ratio={9 / 16}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&mute=1&controls=0&modestbranding=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </div>
  )
}

export default YouTubeShort
