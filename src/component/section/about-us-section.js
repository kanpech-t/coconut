import { ReactComponent as ArrowLeft } from '../../svg/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../svg/arrow-right.svg'
import { useEffect, useState } from 'react'
import { AspectRatio } from '../common/aspect-ratio'
import { Carousel, CarouselContent, CarouselItem } from '../common/carousel'

export const AboutUsItem = ({ urlArray, title }) => {
  const [carouselApi, setCarouselApi] = useState()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!carouselApi) {
      return
    }
    setCurrent(carouselApi.selectedScrollSnap() + 1)

    carouselApi.on('select', () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1)
    })
  }, [carouselApi])

  return (
    <div className="flex flex-col flex-1 flex-shrink-0">
      <span className="text-[28px] leading-[40px] font-semibold text-[#8EA262] poppins">
        {title}
      </span>
      <Carousel
        className="rounded-[8px] overflow-hidden mt-4 mb-6"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {urlArray.map((url, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={1}>
                <img
                  src={url}
                  className="w-full h-full object-cover"
                  alt="our product"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>{' '}
      <div className="flex gap-4">
        <div
          className={`size-10 bg-[#475131] rounded-full flex justify-center items-center ${
            current === 1 ? 'bg-[#B5B9AD]' : 'bg-[#475131]'
          }`}
          onClick={() => carouselApi?.scrollPrev()}
        >
          <ArrowLeft />
        </div>
        <div
          className={`size-10 bg-[#475131] rounded-full flex justify-center items-center ${
            current === urlArray.length ? 'bg-[#B5B9AD]' : 'bg-[#475131]'
          }`}
          onClick={() => carouselApi?.scrollNext()}
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  )
}

export default function AboutUsSection() {
  const [carouselApi, setCarouselApi] = useState()

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!carouselApi) {
      return
    }
    setCurrent(carouselApi.selectedScrollSnap() + 1)

    carouselApi.on('select', () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1)
    })
  }, [carouselApi])

  return (
    <>
      {' '}
      <div className="flex flex-col py-[100px] px-6 bg-[#F0F4E4] items-center relative">
        <div
          className="p-[28px] xl:p-[56px] max-w-3xl xl:max-w-1088 bg-white/80 rounded-[16px] flex flex-col gap-6 xl:gap-16 xl:flex-row relative z-[2]"
          style={{
            boxShadow:
              '0px 16px 32px -4px rgba(12, 12, 13, 0.1), 0px 4px 4px -4px rgba(12, 12, 13, 0.05)',
          }}
        >
          <h2 className="text-[40px] leading-[52px] font-semibold text-[#475131] self-center xl:hidden poppins">
            About Us
          </h2>
          <div className="flex flex-col gap-6 xl:w-[440px] flex-shrink-0">
            <Carousel
              className="rounded-[8px] overflow-hidden"
              setApi={setCarouselApi}
            >
              <CarouselContent>
                <CarouselItem>
                  <AspectRatio ratio={10 / 15}>
                    <img
                      src={require('../../picture/our-product-img-1.jpg')}
                      className="w-full h-full object-cover"
                      alt="our product"
                    />
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={10 / 15}>
                    <img
                      src={require('../../picture/our-product-img-2.jpg')}
                      className="w-full h-full object-cover"
                      alt="our product"
                    />
                  </AspectRatio>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <div className="flex gap-4">
              <div
                className={`size-10 bg-[#475131] rounded-full flex justify-center items-center ${
                  current === 1 ? 'bg-[#B5B9AD]' : 'bg-[#475131]'
                }`}
                onClick={() => carouselApi?.scrollPrev()}
              >
                <ArrowLeft />
              </div>
              <div
                className={`size-10 bg-[#475131] rounded-full flex justify-center items-center ${
                  current === 2 ? 'bg-[#B5B9AD]' : 'bg-[#475131]'
                }`}
                onClick={() => carouselApi?.scrollNext()}
              >
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <h2 className="text-[56px] leading-[64px] font-semibold text-[#475131] hidden xl:block">
              {'About Us'.toUpperCase()}
            </h2>
            <span className="text-[18px] xl:text-[20px]  xl:leading-[28px] leading-[24px] text-[#4D4D4D] font-medium">
              Our key products consist of authentic aromatic young coconuts,
              cultivated in the lush western region of Thailand— an area
              well-known for its ideal coconut growing environment.
              <br />
              <br /> Benefiting from this prime location, our coconuts exhibit a
              delightful blend of sweetness, creaminess, and richness, capturing
              the distinctive flavor profile of original Thai aromatic coconuts.
              In addition to our signature coconuts, we offer a wide selection
              of seasonal fruits and vegetables sourced directly from Thailand's
              fertile landscapes.
              <br />
              <br /> Moreover, we tailor our services to individual customer
              preferences by offering customized orders of Thai seasonal
              produce.
            </span>
          </div>
        </div>
        {/* background image */}
        <div
          className="absolute bottom-0 h-[calc(100%-484px)] xl:h-[calc(100%-385px)] w-full  z-[1] "
          style={{
            backgroundImage: `url("/images/background-image-1.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="size-full bg-white/60" />
        </div>
      </div>
      <div className="py-[72px] px-6 flex justify-center xl:py-[128.5px]">
        <div className="flex flex-col gap-[56px] max-w-3xl w-full xl:max-w-1088 xl:flex-row xl:gap-16">
          <AboutUsItem
            title="Product"
            urlArray={[
              '/images/Figure 2-3_compressed.jpg',
              '/images/Figure 2-1_compressed.jpg',
              '/images/Figure 2-2_compressed.jpg',
            ]}
          />{' '}
          <AboutUsItem
            title="Manufacturing"
            urlArray={[
              '/images/Figure 3-1_compressed.jpg',
              '/images/Figure 3-2_compressed.jpg',
            ]}
          />{' '}
          <AboutUsItem
            title="Farm"
            urlArray={[
              '/images/Figure 4-1_compressed.jpg',
              '/images/Figure 4-2_compressed.jpg',
            ]}
          />
        </div>
      </div>
    </>
  )
}
