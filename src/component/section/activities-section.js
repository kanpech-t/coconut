import { ReactComponent as YoutubeColor } from '../../svg/youtube-color.svg'
import YouTubeShort from '../common/youtube-player'

export const ActivitiesSection = ({ activities }) => {
  return (
    <>
      <div
        className="flex flex-col bg-white gap-[96px] py-[72px] px-[24px] xl:py-[128px] xl:px-[96px]"
        ref={activities}
      >
        <span className="text-[40px] xl:text-[56px] leading-[80px] xl:leading-[92px] font-semibold text-[#8EA262] xl:mb-[28px] poppins xl:uppercase">
          Activities
        </span>

        <div className="flex flex-col xl:flex-row gap-[32px] xl:gap-[80px]">
          <div className="flex flex-1">
            <YouTubeShort videoId={'AuZ-M1Knl6k'} />
          </div>

          <div className="flex flex-1 flex-col gap-[24px] my-auto">
            <div className="text-[#475131] text-[20px] text-center xl:text-[28px] font-bold xl:font-semibold poppins xl:capitalize">
              Discover more of our activities <br />
              and content on Youtube
            </div>
            <a
              className="flex flex-row mx-auto text-center gap-[36px] max-w-[279px] xl:max-w-[392px] cursor-pointer hover:bg-[#EDEEEA]"
              href="https://www.youtube.com/@FruitXportThailand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeColor className="my-auto" />
              <div className="text-[#8EA262] text-[28px] xl:text-[40px] font-semibold poppins">
                FruitXport <br />
                Thailand
              </div>
            </a>
          </div>
        </div>

        <hr className="text-[#B5B9AD]" />

        <div className="flex flex-col xl:flex-row gap-[32px] xl:gap-[80px]">
          <div className="flex flex-1 justify-end mx-auto xl:hidden">
            <img
              src="/images/activity-1.png"
              className="w-full max-w-[504px] max-h-[478px] justify-self-end"
              alt="activity-1"
              loading="lazy"
            />
          </div>

          <div className="flex flex-1 flex-col m-auto gap-[24px]">
            <div className="text-[#475131] text-[28px] text-center xl:text-[40px] font-semibold poppins">
              Harvesting <br />
              Quality Coconuts
            </div>
            <div className="text-[#8EA262] text-[20px] text-center xl:text-[28px] font-bold xl:font-semibold poppins xl:capitalize">
              Our commitment to <br />
              uncompromising quality & <br />
              excellence in every pieces
            </div>
          </div>

          <div className="hidden xl:flex xl:flex-1 xl:justify-end">
            <img
              src="/images/activity-1.png"
              className="w-full max-w-[504px] max-h-[478px] justify-self-end"
              alt="activity-1"
              loading="lazy"
            />
          </div>
        </div>

        <hr className="text-[#B5B9AD]" />

        <div className="flex flex-col xl:flex-row gap-[32px] xl:gap-[80px]">
          <div className="flex flex-1 mx-auto justify-start">
            <img
              src="/images/activity-2.png"
              className="w-full max-w-[504px] max-h-[478px]"
              alt="activity-2"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col m-auto gap-[24px]">
            <div className="text-[#475131] text-[28px] text-center xl:text-[40px] font-semibold poppins">
              Secure & Quality <br />
              Packing
            </div>
            <div className="text-[#8EA262] text-[20px] text-center xl:text-[28px] font-bold xl:font-semibold poppins xl:capitalize">
              Delivering excellence <br />
              in every carton
            </div>
          </div>
        </div>

        <hr className="text-[#B5B9AD]" />

        <div className="flex flex-col xl:flex-row gap-[32px] xl:gap-[80px]">
          <div className="flex flex-1 mx-auto justify-start xl:hidden">
            <img
              src="/images/activity-3.png"
              className="w-full max-w-[504px] max-h-[478px]"
              alt="activity-3"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col m-auto gap-[24px]">
            <div className="text-[#475131] text-[28px] text-center xl:text-[40px] font-semibold poppins">
              Quality Check On Every Pieces
            </div>
            <div className="text-[#8EA262] text-[20px] text-center xl:text-[28px] font-bold xl:font-semibold poppins xl:capitalize">
              Ensuring perfection before packing
            </div>

            <div className="hidden xl:flex xl:flex-row xl:gap-[80px] mt-[80px]">
              <div className="flex flex-1 mx-auto justify-center">
                <img
                  src="/images/activity-3.png"
                  className="w-full max-w-[504px] max-h-[478px]"
                  alt="activity-3"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 mx-auto justify-center">
                <img
                  src="/images/activity-4.png"
                  className="w-full max-w-[504px] max-h-[478px]"
                  alt="activity-4"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 mx-auto justify-start xl:hidden">
            <img
              src="/images/activity-4.png"
              className="w-full max-w-[504px] max-h-[478px]"
              alt="activity-4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  )
}
