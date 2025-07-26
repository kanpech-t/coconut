import { useState } from 'react'
import { AspectRatio } from '../common/aspect-ratio'
import { ReactComponent as ArrowLeft } from '../../svg/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../svg/arrow-right.svg'

const backgroundContent = [
  `   With over 50 years of experience as coconut farmers, our company's
      roots run deep in agriculture. Progressing with the times, the next
      generation of entrepreneurs brought expertise in international
      trade, leading us to expand into exporting coconuts and fruits
      globally. Today, we offer comprehensive logistics services,
      including transportation and custom clearance, for FOB, CFR and CIF
      of incoterms, ensuring seamless business operations for our clients.`,
  `We possess an extensive 112,000-square-meter coconut farm situated in Samut Songkram province in
      the western region of Thailand. This area is renowned for its exceptional coconut-growing conditions,
      nestled within a river basin that is periodically flooded by the sea. The resulting soil is abundant in minerals,
      particularly potassium, which is perfect for nurturing coconut trees. Located in the Ban Phaeo district, our
      farm benefits from a consistent water source that nourishes the coconut plantation, imparting a delightful
      aroma to the coconuts.
      `,
  `With these exceptional conditions, our coconut meat offers a sweet, mellow taste and a pleasant aroma,
        making it a refreshing choice to quench your thirst and cool you down. Our young coconuts have become our
        best-selling product, preferred by consumers who enjoy both the meat and the healthy coconut water.
        Additionally, they are processed into a variety of delicious coconut-based products, catering to the
        preferences of both Thai locals and international buyers.`,
]

export default function CompanyBackgroundSection() {
  const [currentBackGroundPage, setCurrentBackGroundPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleChangeBackgroundPage = (page) => {
    if (page > -1 && page < backgroundContent.length && !isAnimating) {
      //   setIsAnimating(true)
      setCurrentBackGroundPage(page)
      // Reset animation state after transition completes
      setTimeout(() => setIsAnimating(false), 300)
    }
  }

  return (
    <div className="flex justify-center py-[72px] px-6 bg-[#EDEEEA]">
      <div className="max-w-3xl w-full xl:max-w-1088 flex gap-16">
        <div className="rounded-[8px] overflow-hidden hidden xl:block flex-shrink-0 w-[484px]">
          <AspectRatio
            ratio={327 / 490}
            className="rounded-[8px] overflow-hidden "
          >
            <img
              src="/images/Figure 5_compressed.jpg"
              alt="company background"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[24px] font-bold leading-[32px] text-[#8EA262]">
            Company Background
          </h2>
          <span className="text-[28px] leading-[40px] font-semibold text-[#475131] mt-3 mb-[56px] xl:mb-16">
            Siriphon Thai Fruit company is a leading exporter of fresh coconuts
            and Thai fruits worldwide.
          </span>
          <div className="rounded-[8px] overflow-hidden xl:hidden mb-[56px]">
            <AspectRatio
              ratio={327 / 490}
              className="rounded-[8px] overflow-hidden"
            >
              <img
                src="/images/Figure 5_compressed.jpg"
                alt="company background"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="relative  min-h-[120px]">
            <span
              className={`font-medium text-[18px] leading-[24px] text-[#4D4D4D] transition-all duration-300 ease-in-out xl:text-[20px] xl:leading-[28px] text-balance ${
                isAnimating
                  ? 'opacity-0 transform translate-y-2'
                  : 'opacity-100 transform translate-y-0'
              }`}
            >
              {backgroundContent[currentBackGroundPage]}
            </span>
          </div>
          <div className="mt-6 xl:mt-16 flex gap-4">
            <button
              className={`size-10 rounded-full flex justify-center items-center ${
                currentBackGroundPage === 0
                  ? 'bg-[#B5B9AD] cursor-not-allowed'
                  : 'bg-[#475131] hover:bg-[#5A6B3F] cursor-pointer'
              }`}
              onClick={() =>
                handleChangeBackgroundPage(currentBackGroundPage - 1)
              }
              disabled={currentBackGroundPage === 0 || isAnimating}
            >
              <ArrowLeft />
            </button>
            <button
              className={`size-10 rounded-full flex justify-center items-center  ${
                currentBackGroundPage === backgroundContent.length - 1
                  ? 'bg-[#B5B9AD] cursor-not-allowed'
                  : 'bg-[#475131] hover:bg-[#5A6B3F] cursor-pointer'
              }`}
              onClick={() =>
                handleChangeBackgroundPage(currentBackGroundPage + 1)
              }
              disabled={
                currentBackGroundPage === backgroundContent.length - 1 ||
                isAnimating
              }
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
