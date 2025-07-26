import { Slide } from 'react-slideshow-image'

export default function HeroSection() {
  const slideImages = [
    require('../../picture/cover-img-1.jpg'),
    require('../../picture/cover-img-2.jpg'),
    require('../../picture/cover-img-3.jpg'),
  ]
  return (
    <div className="h-[100dvh] overflow-hidden relative z-[15] flex flex-col justify-center xl:justify-start">
      <Slide arrows={false} swipe={false}>
        {slideImages.map((image, index) => (
          <div key={index} className="each-slide">
            <img
              src={image}
              className="h-[100dvh] w-full object-cover"
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </Slide>
      {/* mobile text */}
      <div className="absolute left-0 p-6 top-[116px] flex justify-center w-full xl:hidden poppins">
        <div className="max-w-3xl w-full flex flex-col gap-4">
          <span className="text-[28px] font-semibold text-[#B2CA7A] leading-10 ">
            Taste of nature
          </span>
          <span className="text-[#F0F4E4] font-semibold text-[40px] leading-[52px] ">
            Aromatic
            <br />
            Young
            <br />
            Coconut
          </span>
          <span className="text-[#E0EACA] text-[28px] leading-10 font-semibold y">
            & Thai Fruit
          </span>
        </div>
      </div>
      {/* desktop text */}
      <div className="absolute left-0 px-[96px] bottom-[96px] justify-center w-full hidden xl:flex poppins">
        <div className="max-w-1088 w-full flex flex-col gap-4">
          <span className="text-[40px] font-semibold text-[#B2CA7A] leading-[52px] ">
            Taste of nature
          </span>
          <span className="text-[#F0F4E4] font-semibold text-[80px] leading-[90px]">
            {'Aromatic'.toUpperCase()}
            <br />
            {'Young Coconut'.toUpperCase()}
          </span>
          <span className="text-[#E0EACA] text-[28px] leading-10 font-semibold">
            & Thai Fruit
          </span>
        </div>
      </div>
    </div>
  )
}
