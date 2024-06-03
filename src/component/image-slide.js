import { useState } from 'react'
import { ReactComponent as ArrowLeft } from '../svg/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../svg/arrow-right.svg'

export default function ImageSlide({ images, customStyle, customStylePic }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handleChangeImg = (direction) => {
    if (direction === 'next') {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length)
    } else {
      setCurrentImgIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length,
      )
    }
  }

  return (
    <div className={customStyle}>
      <div
        className={`w-auto rounded-2xl flex items-center overflow-hidden relative ${customStylePic}`}
      >
        <ArrowLeft
          className="absolute left-0 size-9 cursor-pointer z-10"
          onClick={() => handleChangeImg('prev')}
        />
        <ArrowRight
          className="absolute right-0 size-9 cursor-pointer z-10"
          onClick={() => handleChangeImg('next')}
        />
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`w-full transition-opacity duration-500 ${currentImgIndex === index ? 'opacity-100 relative' : 'opacity-0 absolute'}`}
            alt={`Slide ${index + 1}`}
            style={{ left: 0 }}
          />
        ))}
      </div>
      <div className="flex mt-4 lg:mt-6 gap-3 justify-start lg:justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`${currentImgIndex === index ? 'bg-[#6B7949]' : 'bg-[#DADCD6]'} size-4 rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  )
}
