import { ReactComponent as Varietires } from '../../svg/varietires.svg'
import { ReactComponent as Quality } from '../../svg/quality.svg'

export default function DeliverySection() {
  return (
    <div className="py-[72px] xl:py-[128px] px-6 bg-primary-green flex justify-center">
      <div className="max-w-3xl w-full xl:max-w-1088  text-center flex flex-col">
        <h2 className="font-semibold text-[28px] leading-[40px] text-[#E0EACA] text-balance">
          We Have A Commitment <br className="hidden xl:block" />
          To Delivering
        </h2>
        <div className="flex-col flex xl:flex-row  gap-16 mt-[56px] xl:mt-16 items-center justify-center xl:w-[904px] xl:self-center xl:h-[136px]">
          <div className="flex flex-col gap-8 items-center text-start xl:flex-1 xl:flex-row">
            <Varietires className="size-16" />
            <div className="flex flex-col items-center xl:items-start">
              <h2 className="font-semibold text-[40px] leading-[52px] xl:font-bold xl:text-[36px] text-white">
                Varieties
              </h2>
              <span className="text-[20px] leading-[28px] font-bold text-white">
                Aromatic young coconuts
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center text-start xl:flex-1 xl:flex-row">
            <Quality className="size-16" />
            <div className="flex flex-col items-center xl:items-start">
              <h2 className="font-semibold text-[40px] leading-[52px] xl:font-bold xl:text-[36px] text-white">
                Quality
              </h2>
              <span className="text-[20px] leading-[28px] font-bold text-white">
                No pest, 100% organic
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
