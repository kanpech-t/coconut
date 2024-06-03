import { useRef, useState } from 'react'

import { ReactComponent as ArrowLeft } from '../svg/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../svg/arrow-right.svg'

export default function PictureView({
  firstImage,
  secondImage,
  customStyle,
  customStylePic,
}) {
  const [currentImg, setCurrentImg] = useState(1)

  const img1 = useRef(null)
  const img2 = useRef(null)

  const handleChangeImg = (type) => {
    if (currentImg === 1) {
      setCurrentImg(2)
    } else {
      setCurrentImg(1)
    }
  }

  return (
    <div className={customStyle}>
      <div
        className={`w-auto rounded-2xl  flex items-center  overflow-hidden  relative ${customStylePic} `}
      >
        {currentImg === 1 ? (
          <ArrowRight
            className="absolute size-9 right-0 z-10 "
            onClick={() => {
              handleChangeImg('goNext')
            }}
          />
        ) : (
          <ArrowLeft
            className="absolute left-0 size-9 cursor-pointer z-10"
            onClick={() => {
              handleChangeImg('goBack')
            }}
          />
        )}
        <img
          src={firstImage}
          className={`${currentImg === 1 ? 'opacity-100' : 'opacity-0'} w-full `}
          alt={`Slide 1`}
          ref={img1}
        />
        <img
          src={secondImage}
          className={`${currentImg === 2 ? 'opacity-100' : 'opacity-0'} w-full absolute left-0`}
          alt={`Slide 2`}
          ref={img2}
        />
      </div>
      <div className="flex mt-4 lg:mt-6 gap-3  justify-start lg:justify-center">
        <div
          className={`${currentImg === 1 ? 'bg-[#6B7949]' : 'bg-[#DADCD6]'} size-4 rounded-full`}
        ></div>
        <div
          className={`${currentImg === 2 ? 'bg-[#6B7949]' : 'bg-[#DADCD6]'} size-4 rounded-full`}
        ></div>
      </div>
    </div>
  )
}
