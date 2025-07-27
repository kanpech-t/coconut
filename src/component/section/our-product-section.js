import { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../common/carousel'
import { AspectRatio } from '../common/aspect-ratio'
import { ReactComponent as ArrowLeft } from '../../svg/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../svg/arrow-right.svg'

export const OurProductItem = ({ urlArray, title }) => {
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
    <div className="flex flex-col flex-1 flex-shrink-0 gap-6 xl:max-w-[330px]">
      <Carousel
        className="rounded-[8px] overflow-hidden"
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {urlArray.map((url, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={1.5}>
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
      <div className="flex gap-4 self-center">
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
      <span className="text-[20px] leading-[28px] font-bold  text-[#475131]">
        {title}
      </span>
    </div>
  )
}

export const OurProductTableItem = ({ title, subTitle, remark }) => {
  return (
    <div className="flex flex-col gap-3 w-full items-start text-start">
      <span className="text-[18px] xl:text-[24px] xl:leading-[32px] leading-[24px] font-bold text-[#475131] whitespace-pre-line">
        {title}
      </span>
      <span className="text-[16px] xl:text-[20px] xl:leading-[28px] leading-[20px] text-[#4D4D4D] font-medium whitespace-pre-line">
        {subTitle}
      </span>
      {remark && (
        <span className="text-[16px]  -mt-1 xl:mt-2 leading-[20px]  xl:leading-[24px] text-[#6B7949] font-medium whitespace-pre-line">
          {remark}
        </span>
      )}
    </div>
  )
}

const Separator = () => {
  return <div className="h-[1px] w-full bg-[#B5B9AD]"></div>
}

export default function OurProductSection({ catalog }) {
  const tinCanSize = [
    '250 ml',
    '330 ml',
    '330 ml',
    '350 ml',
    '520 ml',
    '520 ml',
    '24x310 ml (Sleek Can)',
  ]

  const unitPerCartons = ['24', '12', '24', '24', '12', '24', '24']

  return (
    <div
      className="py-[72px] xl:py-[128px] px-6 bg-white flex justify-center"
      ref={catalog}
      id="catalog"
    >
      <div className="max-w-3xl w-full xl:max-w-1088  text-center flex flex-col">
        <h2 className="font-semibold text-[40px] xl:text-[56px] xl:leading-[64px] leading-[52px] text-[#8EA262] text-balance poppins xl:uppercase">
          Our Product
        </h2>
        <div className="flex flex-col gap-[126px] mt-4 xl:mt-5">
          {/* shaped coconut */}
          <div className=" flex flex-col gap-[56px] xl:gap-[80px]">
            <h3 className="text-[28px] leading-[40px] xl:text-[40px] xl:leading-[52px] font-semibold text-[#475131] poppins">
              Shaped Coconut
            </h3>
            <div className="flex flex-col gap-[56px] xl:flex-row xl:gap-[48.3px]">
              <OurProductItem
                urlArray={['/images/diamond.png']}
                title="Shaped Coconut"
              />
              <OurProductItem
                urlArray={['/images/greenCut.png']}
                title="Green Cut Diamond"
              />
              <OurProductItem
                urlArray={['/images/partialGreen.png']}
                title="Partial Green Diamond"
              />
            </div>
            {/* mobile */}
            <div className="bg-[#EDEEEA] p-7 rounded-[16px] flex flex-col gap-7 xl:hidden">
              <OurProductTableItem
                title="Packaging"
                subTitle="9 Units / Carton"
              />
              <Separator />
              <OurProductTableItem
                title="Weight"
                subTitle={'700 - 1200 grams'}
              />
              <Separator />
              <OurProductTableItem title="MOQ" subTitle={'1x20’RF'} />
              <Separator />
              <OurProductTableItem title="Incoterms" subTitle={'FOB or CIF'} />
              <Separator />
              <OurProductTableItem
                title="Shelf Life"
                subTitle={'45 - 60 days\n(Stored at  2-3°C)'}
              />
              <Separator />
              <OurProductTableItem
                title="Container Load"
                subTitle={
                  <div className="flex flex-col gap-2">
                    <span>970 - 1020 Cartons / 20’RF</span>
                    <span>2000 - 2052 Cartons / 40’RF (High Cube)</span>
                  </div>
                }
                remark={'Remark: Depends on the total weight of the coconuts.'}
              />
              <Separator />
              <OurProductTableItem
                title="Payment Term"
                subTitle={
                  '80% T/T payment is required to confirm the order, with the remaining 20% due upon packing into the container or L/C'
                }
              />
            </div>
            {/* desktop */}
            <div className="bg-[#EDEEEA] py-[52px] px-[56px] rounded-[16px] xl:flex  gap-[72px] hidden">
              <div className="w-[438px] grid grid-cols-2 ">
                <div className="border-r border-b border-[#B5B9AD] pb-12">
                  <OurProductTableItem
                    title="Packaging"
                    subTitle="9 Units / Carton"
                  />
                </div>
                <div className=" border-b border-[#B5B9AD] pb-12 flex pl-[43px]">
                  <OurProductTableItem
                    title="Weight"
                    subTitle={'700 - 1200 grams'}
                  />
                </div>
                <div className="border-r border-b border-[#B5B9AD] py-12">
                  <OurProductTableItem title="MOQ" subTitle="1x20’RF" />
                </div>
                <div className=" border-b border-[#B5B9AD] py-12 flex pl-[43px]">
                  <OurProductTableItem
                    title="Incoterms"
                    subTitle={'FOB or CIF'}
                  />
                </div>
                <div className="col-span-2 pt-12">
                  <OurProductTableItem
                    title="Shelf Life"
                    subTitle={'45 - 60 days (Stored at  2-3°C)'}
                  />
                </div>
              </div>
              <div className="h-full w-[1px] bg-[#B5B9AD] " />
              <div className="w-[399px] flex flex-col gap-9">
                <OurProductTableItem
                  title="Container Load"
                  subTitle={
                    <div className="flex flex-col gap-2">
                      <span>970 - 1020 Cartons / 20’RF</span>
                      <span>2000 - 2052 Cartons / 40’RF (High Cube)</span>
                    </div>
                  }
                  remark={
                    'Remark: Depends on the total weight of the coconuts.'
                  }
                />
                <Separator />
                <OurProductTableItem
                  title={`Payment\nTerm`}
                  subTitle={
                    '80% T/T payment is required to confirm the order, with the remaining 20% due upon packing into the container or L/C'
                  }
                />
              </div>
            </div>
          </div>
          {/* polished coconut */}
          <div className="mt-4 flex flex-col gap-[56px]">
            <h3 className="text-[28px] leading-[40px] xl:text-[40px] xl:leading-[52px] font-semibold text-[#475131] poppins">
              Polished Coconut
            </h3>
            <div className="flex flex-col gap-[56px] xl:flex-row xl:gap-[160px] xl:justify-center">
              {/* TODO:change image to remove bg */}
              <OurProductItem
                urlArray={['/images/cupcake.png']}
                title="Cup Cake"
              />
              <OurProductItem urlArray={['/images/ball.png']} title="Ball" />
            </div>
            {/* mobile   */}
            <div className="bg-[#EDEEEA] p-7 rounded-[16px] flex flex-col gap-7 xl:hidden">
              <OurProductTableItem
                title="Packaging"
                subTitle="32 Units / Carton"
              />
              <Separator />
              <OurProductTableItem
                title="Weight"
                subTitle={'650 - 1100 grams'}
              />
              <Separator />
              <OurProductTableItem title="MOQ" subTitle={'1x20’RF'} />
              <Separator />
              <OurProductTableItem title="Incoterms" subTitle={'FOB or CIF'} />
              <Separator />
              <OurProductTableItem
                title="Shelf Life"
                subTitle={'45 - 60 days\n(Stored at  2-3°C)'}
              />
              <Separator />
              <OurProductTableItem
                title="Container Load"
                subTitle={
                  <div className="flex flex-col gap-2">
                    <span>970 - 1020 Cartons / 20’RF</span>
                    <span>2000 - 2052 Cartons / 40’RF (High Cube)</span>
                  </div>
                }
                remark={'Remark: Depends on the total weight of the coconuts.'}
              />
              <Separator />
              <OurProductTableItem
                title="Payment Term"
                subTitle={
                  '80% T/T payment is required to confirm the order, with the remaining 20% due upon packing into the container or L/C'
                }
              />
            </div>
            {/* desktop */}
            <div className="bg-[#EDEEEA] py-[52px] px-[56px] rounded-[16px] xl:flex  gap-[72px] hidden">
              <div className="w-[438px] grid grid-cols-2 ">
                <div className="border-r border-b border-[#B5B9AD] pb-12">
                  <OurProductTableItem
                    title="Packaging"
                    subTitle="32 Units / Carton"
                  />
                </div>
                <div className=" border-b border-[#B5B9AD] pb-12 flex pl-[43px]">
                  <OurProductTableItem
                    title="Weight"
                    subTitle={'650 - 1100 grams'}
                  />
                </div>
                <div className="border-r border-b border-[#B5B9AD] py-12">
                  <OurProductTableItem title="MOQ" subTitle="1x20’RF" />
                </div>
                <div className=" border-b border-[#B5B9AD] py-12 flex pl-[43px]">
                  <OurProductTableItem
                    title="Incoterms"
                    subTitle={'FOB or CIF'}
                  />
                </div>
                <div className="col-span-2 pt-12">
                  <OurProductTableItem
                    title="Shelf Life"
                    subTitle={'45 - 60 days (Stored at  2-3°C)'}
                  />
                </div>
              </div>
              <div className="h-full w-[1px] bg-[#B5B9AD] " />
              <div className="w-[399px] flex flex-col gap-9">
                <OurProductTableItem
                  title="Container Load"
                  subTitle={
                    <div className="flex flex-col gap-2">
                      <span>970 - 1020 Cartons / 20’RF</span>
                      <span>2000 - 2052 Cartons / 40’RF (High Cube)</span>
                    </div>
                  }
                  remark={
                    'Remark: Depends on the total weight of the coconuts.'
                  }
                />
                <Separator />
                <OurProductTableItem
                  title={`Payment\nTerm`}
                  subTitle={
                    '80% T/T payment is required to confirm the order, with the remaining 20% due upon packing into the container or L/C'
                  }
                />
              </div>
            </div>
          </div>
          {/* OEM Canned Coconut Water */}
          <div className="mt-4 flex flex-col gap-[56px]">
            <h3 className="text-[28px] leading-[40px] xl:text-[40px] xl:leading-[52px] font-semibold text-[#475131] poppins">
              OEM Canned <br className="xl:hidden" />
              Coconut Water
            </h3>
            <div className="flex flex-col gap-[56px] xl:gap-[80px] xl:flex-row xl:h-[240px]">
              <div className="flex flex-col gap-2 xl:gap-4 xl:flex-1 xl:items-start xl:text-start">
                <span className="text-[56px] leading-[64px] xl:text-[80px] xl:leading-[90px] font-semibold text-[#8EA262]">
                  100%
                </span>
                <span className="text-[20px] leading-[28px] xl:text-[28px] xl:leading-[40px] font-bold text-[#475131]">
                  Pure Coconut Water
                  <br /> with Private Label
                  <br />
                  OEM Sticker
                </span>
              </div>
              <div className="flex flex-row gap-[33px] xl:gap-[80px] xl:w-[521px]">
                <div className="basis-1/3">
                  <AspectRatio ratio={82 / 174}>
                    <img
                      src="/images/Figure 15.png"
                      alt="oem canned coconut water"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="basis-1/3">
                  <AspectRatio ratio={82 / 174}>
                    <img
                      src="/images/Figure 14.png"
                      alt="oem canned coconut water"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="basis-1/3">
                  <AspectRatio ratio={82 / 174}>
                    <img
                      src="/images/Figure 13.png"
                      alt="oem canned coconut water"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[56px] xl:flex-row">
              <div className="bg-[#EDEEEA] p-7 rounded-[16px] flex  gap-[23.5px] xl:flex-1 xl:px-[56px] xl:py-[52px]">
                <div className="flex flex-col gap-3 text-start flex-1">
                  <span className="text-[#475131] font-bold text-[18px] leading-[24px] h-[48px] sm:h-auto xl:text-[20px] xl:leading-[28px]">
                    Tin Can Beverage Size
                  </span>
                  {tinCanSize.map((size, index) => (
                    <span
                      key={index}
                      className="text-[16px] xl:text-[18px] xl:leading-[24px] leading-[20px] text-[#4D4D4D] font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
                <div className="h-full w-[1px] bg-[#B5B9AD] " />{' '}
                <div className="flex flex-col gap-3 text-start flex-1">
                  <span className="text-[#475131] font-bold text-[18px] leading-[24px] h-[48px] sm:h-auto xl:text-[20px] xl:leading-[28px]">
                    Units Per Cartons
                  </span>
                  {unitPerCartons.map((size, index) => (
                    <span
                      key={index}
                      className="text-[16px] xl:text-[18px] xl:leading-[24px] leading-[20px] text-[#4D4D4D] font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#EDEEEA] p-7 rounded-[16px] flex flex-col gap-7 -mt-[32px] xl:mt-0 xl:w-[296px] xl:px-[56px] xl:py-[52px]">
                <div className="flex flex-col gap-3 w-full items-start text-start">
                  <span className="text-[18px]  leading-[24px] font-bold text-[#475131] whitespace-pre-line">
                    MO
                  </span>
                  <span className="text-[16px]  leading-[20px] text-[#4D4D4D] font-medium whitespace-pre-line">
                    2x20’RF
                  </span>
                </div>
                <Separator />
                <div className="flex flex-col gap-3 w-full items-start text-start">
                  <span className="text-[18px]  leading-[24px] font-bold text-[#475131] whitespace-pre-line">
                    Incoterms
                  </span>
                  <span className="text-[16px]  leading-[20px] text-[#4D4D4D] font-medium whitespace-pre-line">
                    FOB or CIF
                  </span>
                </div>
                <Separator />
                <div className="flex flex-col gap-3 w-full items-start text-start">
                  <span className="text-[18px] leading-[24px] font-bold text-[#475131] whitespace-pre-line">
                    Shelf Life
                  </span>
                  <span className="text-[16px]  leading-[20px] text-[#4D4D4D] font-medium whitespace-pre-line">
                    24 months
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
