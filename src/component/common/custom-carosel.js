import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from './carousel'

import { ReactComponent as ArrowLeft } from '../../svg/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../svg/arrow-right.svg'
import { cn } from '../../util'

export default function CustomCarosel({ className, content, totalImage }) {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <div className="flex flex-col items-center">
        <Carousel
          className={cn(
            'relative flex-shrink-0 rounded-2xl overflow-hidden',
            className,
          )}
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <ArrowRight
            className="absolute size-9 -translate-y-1/2 top-1/2  right-0 z-10 cursor-pointer"
            onClick={() => {
              api?.scrollNext()
            }}
          />
          <ArrowLeft
            className="absolute left-0 size-9 -translate-y-1/2 top-1/2  cursor-pointer z-10"
            onClick={() => {
              api?.scrollPrev()
            }}
          />
          <CarouselContent>{content}</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex mt-4 xl:mt-6 gap-3  justify-start xl:justify-center">
        {Array.from({ length: totalImage }).map((_, index) => (
          <div
            key={index}
            className={`${current === index + 1 ? 'bg-[#6B7949]' : 'bg-[#DADCD6]'} size-4 rounded-full`}
          ></div>
        ))}
      </div>
    </>
  )
}
